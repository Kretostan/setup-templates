# Setup templates

Zestaw szablonowych plików do szybkiego uruchamiania aplikacji **backend + frontend** za pomocą
Docker Compose i reverse proxy Nginx.  
Repo może służyć jako punkt startowy dla nowych projektów – wystarczy skopiować pliki i
dostosować konfigurację pod własną aplikację.

> Domyślnie przykład zakłada backend w Node.js (ESM) oraz frontend w Vite + React,
> ale szablon jest na tyle ogólny, że możesz go użyć z dowolną technologią.

---

## Zawartość

- `compose.yaml` – główny plik Docker Compose, definicja usług (backend, frontend, nginx itp.).
- `compose.override.yaml` – nadpisania ustawień dla środowiska developerskiego
  (np. montowanie kodu z hosta, inne porty).
- `Dockerfile.backend` – szablon obrazu dla serwisu backendowego.
- `Dockerfile.frontend` – szablon obrazu dla serwisu frontendowego.
- `nginx.conf` – konfiguracja Nginxa pełniącego rolę reverse proxy między frontendem a backendem.
- `.env.example` – przykładowy plik zmiennych środowiskowych; skopiuj go do `.env` i uzupełnij.
- `.dockerignore` – pliki i katalogi pomijane przy budowaniu obrazów Dockera.
- `.gitignore` – pliki i katalogi pomijane przez Git.
- `tsconfig.backend.node-esm.json` – przykładowa konfiguracja TypeScript dla backendu w trybie ESM.
- `tsconfig.frontend.vite-react.json` – przykładowa konfiguracja TS dla frontendu opartego o Vite + React.
- `LICENSE` – licencja dla repozytorium (zmień, jeśli używasz innej).

---

## Jak korzystać

To repozytorium jest zbiorem szablonów konfiguracyjnych.  
Możesz:

- po prostu podejrzeć pliki online (np. na GitHubie) i skopiować ich treść do swojego projektu, albo
- sklonować repo i skopiować wybrane pliki do nowego projektu.

Po skopiowaniu plików dostosuj porty, nazwy usług, ścieżki oraz komendy w Dockerfile’ach do własnego stacku.
