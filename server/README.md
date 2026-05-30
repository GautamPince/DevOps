# DevOps API (minimal)

This folder contains a minimal Express API used to prototype a backend for the DevOps 90-Day Roadmap app.

Features:
- Signup / Login (JWT)
- Per-user state endpoints (GET/PUT)
- Practice task toggle
- Chat proxy that forwards messages to the Gemini API using the server-side `GEMINI_API_KEY` env var

Quick start (development):

1. Copy `.env.example` to `.env` and set `JWT_SECRET` and `GEMINI_API_KEY` if you want chat proxying.

2. Install dependencies and start server:

```bash
cd server
npm install
npm start
```

The server listens on the port defined in `PORT` (default `3000`).

Warning: This implementation uses a simple `db.json` file for persistence and is intended only for local development and prototyping.
