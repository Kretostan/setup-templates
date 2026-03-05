# System Architecture

## 1. Overview (High-Level)

Short description:
What is the frontend?
What is the backend?
What are the main integrations?

## 2. Components

### Frontend

- Technology: ___
- Responsibility: ___
- Communicates with: ___

### Backend

- Technology: ___
- Responsibility: ___
- Exposes: (REST/GraphQL/gRPC/WS)

### Database

- Type: (PostgreSQL/MySQL/Mongo/etc.)
- Responsibility: ___

### Additional Components (optional)

- Cache (Redis): ___
- Storage (S3/local): ___
- Search engine: ___
- Queue / background jobs: ___
- External APIs: ___

---

## 3. Logical Diagram (Text-Based)

Frontend
  ↓ (HTTP / WS)
Backend API
  ↓
Database

Backend
  ↔ Cache (optional)

Backend
  → External API (optional)

---

## 4. Responsibility Boundaries

Frontend:

- ...
- ...

Backend:

- ...
- ...

Database:

- Data persistence only
- No business logic

---

## 5. Main Flows

### Example: Authentication

1. Frontend sends credentials
2. Backend validates
3. Backend issues token
4. Frontend stores token

### Example: Creating a Resource

1. Frontend sends request
2. Backend validates DTO
3. Backend writes to DB
4. Backend returns response

---

## 6. Architectural Decisions

- Why this database: ___
- Why REST instead of GraphQL: ___
- Why WebSocket instead of polling: ___

(Short, 1–2 sentences per decision)

---

## 7. Risks / Future Changes

- Possible scaling needs: ___
- Bottlenecks: ___
- Components to refactor later: ___
