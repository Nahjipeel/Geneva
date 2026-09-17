# Geneva Body Shop

Mobile-first Geneva Body Shop website for collision repair, insurance claim support, custom paint, and estimate requests.

## Run locally

```powershell
npm install
npm run dev
```

Open `http://127.0.0.1:5173/` in a browser.

## Checks

```powershell
npm test
npm run build
```

The estimate form uses the Azure Functions API in `services/functions` during development. To run it locally, install Azure Functions Core Tools and start the backend with:

```powershell
npm --prefix services/functions install
npm --prefix services/functions run build
npm --prefix services/functions start
```

The frontend proxies `/api` requests to `http://127.0.0.1:7071`.