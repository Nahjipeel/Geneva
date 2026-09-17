# Integration Plan

## Backend
- Folder: `services/functions`
- Run: `npm --prefix services/functions install`, then `npm --prefix services/functions run build`; local runtime: `func start` from `services/functions`
- Port: `7071`
- Health endpoint: no dedicated health route in approved plan; probe `POST /api/estimate`
- Built entrypoint: `services/functions/dist/src/functions/estimate.js`

## Frontend
- Folder: workspace root
- Build: `npm run build`
- Dev: `npm run dev`
- API seam: `src/api/index.ts` (`api.submitEstimate`)
- Mock files to delete: none; the scaffold mock is inline in `src/api/index.ts` and must be replaced there with the live client
- Mock datasets: none; content fixtures are presentational page content in `src/content/siteContent.ts`
- Preview state switcher: none

## API Routes
- GET `/` -> React home page, 200
- GET `/services` -> React services and gallery page, 200
- GET `/estimate` -> React estimate form page, 200
- POST `/api/estimate` -> `{ name, phone, email, vehicle, service, description, preferredContact }` -> `{ submitted, reference }`, 201 or standardized `{ error: { code, message, details } }`, 422

## Database
- Type: none in approved plan
- Migration tool/directory: none
- Connection env vars: none
- Seed data: do not create seed data

## Shared Types
- No shared package was specified in the approved plan.
- Request/response types currently live at `src/api/index.ts`; preserve the typed client seam during any live-data replacement.

## Services
- Essential: none; the app uses static content and the estimate form adapter.
- Enhancement: none.

## Integration Results
- Migrations: not applicable; the approved plan specifies no SQL/PostgreSQL or other relational datastore, so no migration or seed files were created.
- Backend build: passed with `npm --prefix services/functions run build`.
- Backend smoke test: `POST /api/estimate` returned `201` for a valid request and `422` with structured validation details for an invalid request.
- Frontend wiring: replaced the inline mock in `src/api/index.ts` with a typed live `fetch` client and configured the Vite `/api` proxy for `http://127.0.0.1:7071`.
- End-to-end: `POST http://127.0.0.1:5173/api/estimate` returned `201` while both hosts were running concurrently.
