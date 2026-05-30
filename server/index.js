/* Minimal Express API for DevOps Roadmap
 * - Auth (signup/login) using JWT
 * - User state endpoints (GET/PUT)
 * - Practice toggle endpoint
 * - Chat proxy to Gemini (server-side key)
 */

const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

// MySQL (optional) — use mysql2 when DATABASE_URL is provided
let dbPool = null;

async function ensureTables() {
   if (!dbPool) return;
   // users
   await dbPool.query(`
      CREATE TABLE IF NOT EXISTS users (
         id VARCHAR(36) PRIMARY KEY,
         email VARCHAR(255) UNIQUE NOT NULL,
         name VARCHAR(255),
         passwordHash VARCHAR(255),
         createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
   `);

   // user_states
   await dbPool.query(`
      CREATE TABLE IF NOT EXISTS user_states (
         userId VARCHAR(36) PRIMARY KEY,
         state JSON,
         updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
         FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
      )
   `);

   // practice_checks
   await dbPool.query(`
      CREATE TABLE IF NOT EXISTS practice_checks (
         id INT AUTO_INCREMENT PRIMARY KEY,
         userId VARCHAR(36) NOT NULL,
         day INT NOT NULL,
         taskId VARCHAR(255) NOT NULL,
         checked BOOLEAN DEFAULT FALSE,
         updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
         UNIQUE KEY user_day_task (userId, day, taskId),
         INDEX idx_user (userId)
      )
   `);
}

async function initMySQL() {
   if (!process.env.DATABASE_URL) return;
   try {
      const mysql = require('mysql2/promise');
      const dbUrl = new URL(process.env.DATABASE_URL);
      const config = {
         host: dbUrl.hostname,
         port: dbUrl.port ? Number(dbUrl.port) : 3306,
         user: decodeURIComponent(dbUrl.username || ''),
         password: decodeURIComponent(dbUrl.password || ''),
         database: dbUrl.pathname ? dbUrl.pathname.slice(1) : undefined,
         waitForConnections: true,
         connectionLimit: 10,
         timezone: 'Z',
      };
      dbPool = mysql.createPool(config);
      await ensureTables();
      console.log('MySQL pool initialized (using DATABASE_URL)');
   } catch (err) {
      console.warn('MySQL init failed:', err.message);
      dbPool = null;
   }
}

initMySQL().catch(err => console.warn('initMySQL error:', err));

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_in_production';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

const DB_PATH = path.join(__dirname, 'db.json');

function readDB() {
   if (!fs.existsSync(DB_PATH)) {
      const init = { users: [], userStates: {}, practiceChecks: {} };
      fs.writeFileSync(DB_PATH, JSON.stringify(init, null, 2));
      return init;
   }
   try {
      return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
   } catch (err) {
      console.error('Failed to read DB:', err);
      return { users: [], userStates: {}, practiceChecks: {} };
   }
}

function writeDB(db) {
   fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

const app = express();

app.use(helmet());
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json({ limit: '200kb' }));

const limiter = rateLimit({ windowMs: 60 * 1000, max: 120 });
app.use('/api/', limiter);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// --- Auth ---
app.post('/api/auth/signup', async (req, res) => {
   try {
      const { email, password, name } = req.body || {};
      if (!email || !password) return res.status(400).json({ error: 'email and password required' });

      const emailLower = email.toLowerCase();
      const passwordHash = await bcrypt.hash(password, 10);

      if (dbPool) {
         const [rows] = await dbPool.query('SELECT id FROM users WHERE email = ?', [emailLower]);
         if (rows && rows.length) return res.status(409).json({ error: 'user exists' });
         const id = uuidv4();
         await dbPool.query('INSERT INTO users (id, email, name, passwordHash, createdAt) VALUES (?, ?, ?, ?, ?)', [id, emailLower, name || '', passwordHash, new Date()]);
         const token = jwt.sign({ userId: id }, JWT_SECRET, { expiresIn: '7d' });
         return res.json({ token, user: { id, email: emailLower, name: name || '' } });
      }

      // Fallback file DB
      const db = readDB();
      const exists = db.users.find(u => u.email === emailLower);
      if (exists) return res.status(409).json({ error: 'user exists' });
      const user = { id: uuidv4(), email: emailLower, passwordHash, name: name || '', createdAt: new Date().toISOString() };
      db.users.push(user);
      writeDB(db);
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
      res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
   } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'server error' });
   }
});

app.post('/api/auth/login', async (req, res) => {
   try {
      const { email, password } = req.body || {};
      if (!email || !password) return res.status(400).json({ error: 'email and password required' });
      const emailLower = email.toLowerCase();

      if (dbPool) {
         const [rows] = await dbPool.query('SELECT id, email, name, passwordHash FROM users WHERE email = ?', [emailLower]);
         const user = rows && rows[0];
         if (!user) return res.status(401).json({ error: 'invalid credentials' });
         const ok = await bcrypt.compare(password, user.passwordHash || '');
         if (!ok) return res.status(401).json({ error: 'invalid credentials' });
         const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
         return res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
      }

      const db = readDB();
      const user = db.users.find(u => u.email === emailLower);
      if (!user) return res.status(401).json({ error: 'invalid credentials' });
      const ok = await bcrypt.compare(password, user.passwordHash);
      if (!ok) return res.status(401).json({ error: 'invalid credentials' });
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
      res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
   } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'server error' });
   }
});

function authMiddleware(req, res, next) {
   const auth = req.headers.authorization;
   if (!auth) return res.status(401).json({ error: 'missing authorization' });
   const parts = auth.split(' ');
   if (parts.length !== 2 || parts[0] !== 'Bearer') return res.status(401).json({ error: 'invalid authorization' });
   try {
      const payload = jwt.verify(parts[1], JWT_SECRET);
      req.userId = payload.userId;
      next();
   } catch (err) {
      return res.status(401).json({ error: 'invalid token' });
   }
}

// --- User state ---
app.get('/api/user/state', authMiddleware, async (req, res) => {
   try {
      if (dbPool) {
         const [rows] = await dbPool.query('SELECT state FROM user_states WHERE userId = ?', [req.userId]);
         return res.json({ state: rows && rows[0] ? rows[0].state || {} : {} });
      }
      const db = readDB();
      const state = db.userStates[req.userId] || {};
      res.json({ state });
   } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'server error' });
   }
});

app.put('/api/user/state', authMiddleware, async (req, res) => {
   try {
      const newState = req.body.state || {};
      if (dbPool) {
         await dbPool.query('INSERT INTO user_states (userId, state, updatedAt) VALUES (?, ?, NOW()) ON DUPLICATE KEY UPDATE state = VALUES(state), updatedAt = VALUES(updatedAt)', [req.userId, JSON.stringify(newState)]);
         return res.json({ ok: true });
      }
      const db = readDB();
      db.userStates[req.userId] = newState;
      writeDB(db);
      res.json({ ok: true });
   } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'server error' });
   }
});

app.post('/api/user/practice/:day/:taskId', authMiddleware, async (req, res) => {
   try {
      const { day, taskId } = req.params;
      const dayNum = parseInt(day, 10) || 0;
      if (dbPool) {
         const [rows] = await dbPool.query('SELECT id, checked FROM practice_checks WHERE userId = ? AND day = ? AND taskId = ?', [req.userId, dayNum, taskId]);
         if (rows && rows.length) {
            const existing = rows[0];
            const newChecked = !existing.checked;
            await dbPool.query('UPDATE practice_checks SET checked = ?, updatedAt = NOW() WHERE id = ?', [newChecked ? 1 : 0, existing.id]);
            return res.json({ ok: true, checked: !!newChecked });
         }
         await dbPool.query('INSERT INTO practice_checks (userId, day, taskId, checked) VALUES (?, ?, ?, ?)', [req.userId, dayNum, taskId, 1]);
         return res.json({ ok: true, checked: true });
      }

      const db = readDB();
      const key = `${req.userId}:${day}:${taskId}`;
      db.practiceChecks[key] = !db.practiceChecks[key];
      writeDB(db);
      res.json({ ok: true, checked: !!db.practiceChecks[key] });
   } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'server error' });
   }
});

// --- Chat proxy ---
app.post('/api/chat', async (req, res) => {
   try {
      const { message, apiKey } = req.body || {};
      if (!message) return res.status(400).json({ error: 'message required' });

      // Allow client-provided API key only in non-production environments
      const clientKey = apiKey || req.headers['x-api-key'];
      const effectiveKey = GEMINI_API_KEY || (process.env.NODE_ENV !== 'production' ? clientKey : null);
      if (!effectiveKey) return res.status(503).json({ error: 'GEMINI_API_KEY not configured on server' });

      const payload = {
         contents: [
            {
               parts: [
                  { text: `You are a helpful expert DevOps mentor. Answer this question concisely and effectively: ${message}` }
               ]
            }
         ]
      };

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(effectiveKey)}`;
      const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!r.ok) {
         const text = await r.text();
         return res.status(502).json({ error: 'upstream error', details: text });
      }
      const data = await r.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
      res.json({ data, reply });
   } catch (err) {
      console.error('chat proxy error', err);
      res.status(500).json({ error: 'server error' });
   }
});

// Export app for tests; listen only when run directly
module.exports = app;

if (require.main === module) {
   app.listen(PORT, () => {
      console.log(`DevOps API listening on port ${PORT} (CORS origin: ${CORS_ORIGIN})`);
   });
}
