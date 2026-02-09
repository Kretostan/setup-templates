dev-up:
	docker compose -p app-dev -f compose.dev.yaml --env-file .env.development up --build -d

dev-start:
	docker compose -p app-dev -f compose.dev.yaml --env-file .env.development up --build -d

dev-stop:
	docker compose -p app-dev stop

dev-down:
	docker compose -p app-dev down

prod-up:
	docker compose -p app-prod -f compose.yaml --env-file .env up --build -d

prod-start:
	docker compose -p app-prod -f compose.yaml --env-file .env up --build -d

prod-stop:
	docker compose -p app-prod stop

prod-down:
	docker compose -p app-prod down
