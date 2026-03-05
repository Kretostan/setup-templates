# API – Contract Overview

## API Type

- (REST / GraphQL / gRPC / mixed) → ___

## Documentation / Contract

- OpenAPI/Swagger: UI: ___, JSON/YAML:___ (if applicable)
- Other schema (e.g., schema.graphql): ___

## Authentication

- Mechanism: ___
- How clients pass auth: ___
- Common errors: 401/403 + error format: ___

## Endpoints / Operations (MVP)

### Auth / Users (if applicable)

- POST /auth/login
- POST /auth/register
- GET /users/me

### Main Domain Resources

- GET /resources
- POST /resources
- GET /resources/:id
- PATCH /resources/:id
- DELETE /resources/:id

## Conventions

- Error format: ___
- Pagination: ___
- Filtering/sorting: ___
- Limits: ___
- API versioning: (none / /v1 / header) → ___
