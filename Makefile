dev-up:
	docker compose -p app-dev -f compose.dev.yml --env-file .env.development up --build -d

dev-start:
	docker compose -p app-dev -f compose.dev.yml --env-file .env.development up --build -d

dev-down:
	docker compose -p app-dev down

prod-up:
	docker compose -p app-prod -f compose.yml --env-file .env up --build -d

prod-start:
	docker compose -p app-prod -f compose.yml --env-file .env up --build -d

prod-down:
	docker compose -p app-prod down
