# DevOps 90-Day Roadmap — Feature App Description

Primary domain: https://devopsbootcamp.in

Overview
--------

This interactive web application guides learners through a structured, self-paced 90-day DevOps learning journey. It combines mentor-style lesson notes, hands-on practice checklists, progress analytics, and an integrated AI assistant into a single, polished dashboard so learners can go from absolute beginner to job-ready.

Core Features
-------------

- Progress Dashboard: visual ring chart, streak counter, task counters, and milestone badges to track progress.
- Interactive Roadmap: browse 90 days organized by phase; filter by phase, toggle completed items, and search topics.
- Mentor-Style Lessons: rich lesson notes with code examples, callouts, and best practices (stored in `content.js`).
- Practice Checklists: each day includes hands-on tasks; completing all tasks unlocks the "Mark as Complete" action.
- Personal Notes: per-day and global notes saved automatically to `localStorage`.
- AI DevOps Assistant: optional chat powered by the Gemini REST API for on-demand help and explanations.
- Curated Resources: hand-picked books, videos, certifications, platforms, and communities linked from the UI.

How it Works
------------

- Frontend-first app built with Vite and plain HTML/CSS/JavaScript (ES modules).
- Lesson content is authored in `content.js` (Days 1–25); future phases are planned for Days 26–90.
- User progress and notes persist in the browser via `localStorage`; an optional `server/` directory provides a small backend if needed.
- AI chat requires a Gemini API key (stored only in the browser or provided via a local `.env` for development).

Tech Stack
----------

- Frontend: Vanilla HTML, CSS, JavaScript (ES Modules)
- Bundler: Vite
- Markdown rendering: `marked.js` for chat or content rendering
- AI: Gemini REST API (optional)

Quick Start
-----------

Prerequisites: Node.js v18+

```bash
git clone https://github.com/GautamPince/DevOps.git
cd DevOps
npm install
npm run dev
```

The development server typically opens at `http://localhost:5173`.

Files To Inspect
----------------

- `index.html` — main page and UI scaffold
- `app.js` — application logic (state, rendering, chat integration)
- `content.js` — lesson content and daily entries
- `style.css` — visual design and theming
- `server/` — optional backend and sample `db.json`

Notes
-----

- API keys for the AI assistant are optional and can be provided via browser `localStorage` or a local `.env` for development (`GEMINI_API_KEY`, `OPENROUTER_API_KEY`).
- The app is intentionally frontend-driven so contributors can focus on adding curated lesson content and practice tasks.

Contributing
------------

Contributions are welcome — add more day entries to `content.js` or expand the roadmap phases and submit a pull request.

License
-------

Open source — intended for educational use and community contributions.
