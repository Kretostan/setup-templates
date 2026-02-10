# setup-templates

🚀 Zero-config CLI for quickly adding standard project files to an existing repository.

> Perfect for use with **npx** - no installation, no configuration, no pain.

## ✨ What is it?

`setup-templates` is a CLI tool that adds ready-made, proven configuration templates to your project in seconds.
Instead of copying files between repositories - run one command and choose what you want to install.

## 🧰 What's included?

- **Express** - TypeScript configuration for Express.js
- **Frontend** - React + Vite + TypeScript (development & build only)
- **Docker** - `Dockerfile` and `docker-compose` for development and production
- **Nginx** - production server for frontend build and API reverse proxy
- **Base** - MIT license, Biome config and .gitignore

## ▶️ Quick start

```bash
npx @kreciko/setup-templates
```

That's it. The CLI will launch an interactive menu where you select which templates to add to your project.

### 🔁 Specific version (reproducible builds)

```bash
npx @kreciko/setup-templates@1.2.3
```

### 🧑‍💻 Local usage (teams / CI)

```bash
npm install --save-dev @kreciko/setup-templates
npx @kreciko/setup-templates
```

## 📦 What can you install?

You can safely install multiple templates in the same project.
Depending on the selected templates, setup-templates will add the following files and directories to your project.
Existing files are not overwritten without confirmation.

## 📂 What files will be created?

### 🧱 Base
```
├─ .gitignore
├─ biome.json
└─ LICENSE
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

### 🖥 Express.js
```
└─ tsconfig.json
```

> Express template provides a minimal TypeScript setup, intended to be extended by the user.

### 🌐 Frontend (React + Vite)
```
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

### 🌍 Nginx
```
└─ nginx.conf
```

## 💡 Why setup-templates?

- ⚡ works instantly via npx
- 📦 no manual file copying
- 🧭 interactive template selection
- 🧩 easy to extend with new presets
- 🧼 consistent project structure across your team

## ⚙️ Requirements

- Node.js >= 24
- npm

> (Node 24+ required due to modern Node APIs)


## 🛠️ Libraries used

- chalk - colored terminal output
- ora - spinners
- prompts - interactive menu

## 📄 License
MIT
