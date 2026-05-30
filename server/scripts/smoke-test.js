(async () => {
   // Simple smoke test for API: signup, login, state sync, practice toggle, chat
   const base = 'http://localhost:3000';
   const email = `smoke+${Date.now()}@example.com`;
   const password = 'Sm0keTest!';
   console.log('Starting smoke test...');
   try {
      // Signup
      console.log('1) Signup...');
      let r = await fetch(`${base}/api/auth/signup`, {
         method: 'POST', headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name: 'Smoke Tester', email, password })
      });
      const signup = await (r.ok ? r.json() : r.text());
      console.log('   Signup status:', r.status, (r.ok ? 'OK' : 'ERROR'));
      if (!r.ok) { console.log('   Signup body:', signup); return process.exit(2); }

      // Login
      console.log('2) Login...');
      r = await fetch(`${base}/api/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const login = await (r.ok ? r.json() : r.text());
      console.log('   Login status:', r.status);
      if (!r.ok) { console.log('   Login body:', login); return process.exit(3); }
      const token = login.token;

      // Put state
      console.log('3) Save state...');
      const statePayload = { completed: { 1: true }, notes: { 1: 'smoke note' }, globalNotes: 'smoke global' };
      r = await fetch(`${base}/api/user/state`, { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ state: statePayload }) });
      console.log('   Save state status:', r.status);
      if (!r.ok) { console.log('   Save state body:', await r.text()); return process.exit(4); }

      // Get state
      console.log('4) Get state...');
      r = await fetch(`${base}/api/user/state`, { headers: { Authorization: `Bearer ${token}` } });
      const got = await (r.ok ? r.json() : r.text());
      console.log('   Get state status:', r.status);
      if (!r.ok) { console.log('   Get state body:', got); return process.exit(5); }
      console.log('   State from server keys:', Object.keys(got.state || {}));

      // Toggle practice
      console.log('5) Toggle practice day 1 task "task1"...');
      r = await fetch(`${base}/api/user/practice/1/task1`, { method: 'POST', headers: { Authorization: `Bearer ${token}` } });
      const practice = await (r.ok ? r.json() : r.text());
      console.log('   Practice status:', r.status, 'body:', practice);

      // Chat (no key) - expected to fail if no GEMINI key configured
      console.log('6) Chat (no key) - expected 503 if no server key...');
      r = await fetch(`${base}/api/chat`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: 'What is DevOps?' }) });
      const chatNoKey = await (r.ok ? r.json() : r.text());
      console.log('   Chat (no key) status:', r.status, 'body:', typeof chatNoKey === 'string' ? chatNoKey : Object.keys(chatNoKey));

      // Chat (with fake key) - should return upstream error or 502
      console.log('7) Chat (with fake key) - server should proxy request or return upstream error...');
      r = await fetch(`${base}/api/chat`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: 'Hello', apiKey: 'INVALID-FAKE-KEY' }) });
      const chatFake = await (r.ok ? r.json() : r.text());
      console.log('   Chat (fake key) status:', r.status);
      console.log('   Chat (fake key) body preview:', (typeof chatFake === 'string' ? chatFake : JSON.stringify(chatFake).slice(0, 400)));

      console.log('\nSmoke test completed.');
      process.exit(0);
   } catch (err) {
      console.error('Smoke test error:', err);
      process.exit(10);
   }
})();
