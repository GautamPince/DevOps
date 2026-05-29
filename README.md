# 🚀 DevOps 90-Day Roadmap — Interactive Learning Dashboard

A **premium, interactive web application** that guides you through a structured 90-day DevOps learning journey — from absolute zero to job-ready engineer.

> Built with ❤️ by [GautamPince](https://github.com/GautamPince)

---

## ✨ What It Does

This is a **self-paced learning tracker** that combines mentor-style lesson notes, hands-on practice checklists, and progress analytics — all in a single beautiful dashboard.

### 🎯 Core Features

| Feature | Description |
|---|---|
| **📊 Progress Dashboard** | Visual ring chart, streak counter, task counter, and milestone badges to track your 90-day journey. |
| **🗺️ Interactive Roadmap** | Browse all 90 days organized by phase. Filter by phase, toggle completed items, and search any topic. |
| **📖 Mentor-Style Lessons** | Click any day to open rich, in-depth lesson notes with code examples, callouts, and best practices. |
| **✅ Practice Checklists** | Each day has 4 hands-on tasks. Complete all tasks to unlock the "Mark as Complete" button. |
| **📝 Personal Notes** | Write notes per day and global notes — all saved automatically in your browser. |
| **🤖 AI DevOps Assistant** | Stuck on a concept? Ask the built-in AI chat assistant powered by the Gemini 2.0 API. |
| **👤 About Creator** | Dynamically fetched GitHub profile card via the GitHub REST API. |
| **🌙 Dark/Light Mode** | Toggle between dark mode (glassmorphism) and a clean light theme. |
| **📚 Curated Resources** | Hand-picked books, YouTube channels, certifications, online platforms, and communities. |
| **💾 Persistent State** | All progress, notes, and checklist completions are saved to `localStorage`. |

---

## 🏗️ Curriculum Phases

| Phase | Days | Topics |
|---|---|---|
| 🐧 **Linux, Bash & Git** | 1–15 | Filesystem, CLI, processes, Bash scripting, networking, SSH, Git workflows |
| 🐍 **Python for DevOps** | 16–25 | subprocess, File I/O, JSON/YAML, HTTP APIs, argparse, Jinja2, pytest, CLI tools |
| 🐳 **Containers & Docker** | 26–40 | *(Coming Soon)* |
| ☁️ **Cloud & IaC** | 41–60 | *(Coming Soon)* |
| ⚙️ **CI/CD Pipelines** | 61–80 | *(Coming Soon)* |
| 🔭 **Monitoring & GitOps** | 81–90 | *(Coming Soon)* |

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript (ES Modules)
- **Bundler**: [Vite](https://vitejs.dev/) — blazing-fast dev server & optimized production builds
- **Design**: Custom CSS with glassmorphism, smooth gradients, and micro-animations
- **Typography**: [Outfit](https://fonts.google.com/specimen/Outfit) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **AI Chat**: [Google Gemini 2.0 Flash API](https://ai.google.dev/) (bring your own free API key)
- **Markdown Rendering**: [marked.js](https://marked.js.org/) for AI chat responses
- **APIs Used**: GitHub REST API (profile data), Gemini REST API (chat)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- A free [Gemini API key](https://aistudio.google.com/app/apikey) *(optional, only for AI chat)*

### Installation

```bash
# Clone the repository
git clone https://github.com/GautamPince/DevOps.git
cd DevOps

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at `http://localhost:5173`.

### Production Build

```bash
npm run build    # Generates optimized bundle in /dist
npm run preview  # Preview the production build locally
```

---

## 🤖 AI Chat Setup

1. Click the floating 🤖 button in the bottom-right corner.
2. Click the ⚙️ gear icon inside the chat widget.
3. Paste your free Gemini API key (get one at [aistudio.google.com](https://aistudio.google.com/app/apikey)).
4. Start asking DevOps questions!

> Your API key is stored **only** in your browser's `localStorage` and is never sent anywhere except directly to the Gemini API.

---

## 📁 Project Structure

```
DevOps/
├── index.html      # Main HTML structure (Dashboard, Roadmap, Resources, About, Footer)
├── app.js          # Application logic (state, rendering, chat, GitHub fetch)
├── content.js      # Mentor-style lesson data for Days 1–25
├── style.css       # Premium glassmorphism design system
├── package.json    # Vite config & build scripts
├── .gitignore      # Excludes node_modules/ and dist/
└── README.md       # This file
```

---

## 📸 Screenshots

> *Coming soon — run `npm run dev` to preview the app locally!*

---

## 🤝 Contributing

Contributions are welcome! If you'd like to add content for future phases (Days 26–90), feel free to:
1. Fork this repository
2. Add day entries in `content.js` following the existing pattern
3. Submit a Pull Request

---

## 📄 License

This project is open source and available for educational purposes.

---

<p align="center">Made with ⚙️ + ❤️ for the DevOps community</p>
