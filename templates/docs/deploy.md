# Deployment / Operations

---

## 1. Environments

- local
- staging (optional)
- production

---

## 2. Backend

### Build

- Command: ___

### Start

- Command: ___

### Required Environment Variables

- DATABASE_URL=
- JWT_SECRET=
- API_BASE_URL=
- ...

---

## 3. Frontend

### Build

- Command: ___

### Hosting

- (Vercel / Netlify / S3 / other) → ___

### Environment Variables

- VITE_API_URL=
- ...

---

## 4. Database

- Type: ___
- Managed or self-hosted: ___
- Migrations:
  - How to run: ___
- Backup:
  - Automatic? (yes/no)
  - Frequency: ___

---

## 5. CORS / HTTPS / Security

- Allowed CORS origins: ___
- HTTPS: (auto / reverse proxy)
- Rate limiting: ___
- Security headers: ___

---

## 6. CI/CD

### Pipeline

- Backend tests: ___
- Frontend tests: ___
- Build: ___
- Deploy: ___

### Rules

- Deploy only from main?
- PR review required?

---

## 7. Monitoring / Logs

- Where logs go: ___
- Uptime monitoring: ___
- Alerts: ___

---

## 8. Incident / Rollback Procedure

- How to rollback deployment?
- How to restore database?
- Who has production access?
