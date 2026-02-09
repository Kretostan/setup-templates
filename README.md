# kretostan-setup

🚀 Zero-config CLI for quickly adding standard project files to an existing repository.

> Perfect for use with **npx** - no installation, no configuration, no pain.

## ✨ What is it?

`kretostan-setup` is a CLI tool that adds ready-made, proven configuration templates to your project in seconds.
Instead of copying files between repositories - run one command and choose what you want to install.

## 📦 What can you install?

- **Backend** - TypeScript configuration
- **Frontend** - TypeScript + Node.js configuration
- **Docker** - `Dockerfile` and `docker-compose`
- **Nginx** - reverse proxy
- **Base** - MIT license, Biome config, README

## ▶️ Quick start

```bash
npx kretostan-setup
```

That's it. The CLI will launch an interactive menu where you select which templates to add to your project.

### 🔁 Specific version (reproducible builds)

```bash
npx kretostan-setup@1.2.3
```

### 🧑‍💻 Local usage (teams / CI)

```bash
npm install --save-dev kretostan-setup
npx kretostan-setup
```

## 📦 What can you install?

You can safely install multiple templates in the same project.
Depending on the selected templates, kretostan-setup will add the following files and directories to your project.
Existing files are not overwritten without confirmation.

## 📂 What files will be created?

### 🧱 Base
```
├─ .gitignore
├─ biome.json
└─ LICENSE
```

### 🖥 Backend (Node.js)
```
├─ .env
├─ .env.development
└─ tsconfig.backend.json
```

### 🌐 Frontend (React + Vite)
```
├─ .env
├─ .env.development
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

### 🐳 Docker
```
├─ Dockerfile.backend
├─ Dockerfile.frontend
├─ .dockerignore
├─ Makefile
├─ compose.dev.yaml
└─ compose.yaml
```

### 🌍 Nginx
```
└─ nginx.conf
```

## 💡 Why kretostan-setup?

- ⚡ works instantly via npx
- 📦 no manual file copying
- 🧭 interactive template selection
- 🧩 easy to extend with new presets
- 🧼 consistent project structure across your team

## ⚙️ Requirements

- Node.js >= 24
- npm

## 🛠️ Libraries used

- chalk - colored terminal output
- ora - spinners
- prompts - interactive menu

## 📄 License
MIT
