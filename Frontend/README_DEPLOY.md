# Deploying Frontend (Vite + React) on Vercel

This project uses Vite + React with Tailwind CSS (v4) in the `Frontend/` folder.

## 1) Vercel Settings (Project Root)
- `vercel.json` at repository root targets the Frontend app and enables SPA rewrites.
- Build step uses `@vercel/static-build` to run `npm run build` in the Frontend and serve `dist/`.

Root `vercel.json`:
```
{
  "version": 2,
  "builds": [
    {
      "src": "Frontend/package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "Frontend/dist" }
    }
  ],
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

## 2) Frontend SPA Rewrites (optional)
If you deploy the `Frontend/` directory directly as its own Vercel project, you can also keep a `Frontend/vercel.json`:
```
{
  "version": 2,
  "builds": [
    { "src": "vite.config.js", "use": "@vercel/static-build", "config": { "distDir": "dist" } }
  ],
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

## 3) Vite Config
- If you host under a subpath, uncomment `base: './'` in `vite.config.js`.
- Preview/dev ports are pinned for consistency.

## 4) Build Locally
```
cd Frontend
npm ci
npm run build
npx serve -s dist  # or any static server
```

## 5) Common 404 Fix
- 404s on client-side routes (like `/alumni`, `/job`, etc.) happen because the hosting tries to fetch a physical file.
- The `routes` rewrites above ensure every path returns `index.html`, letting React Router handle it.

## 6) Environment
No server-side code needed for the Frontend build.

You're good to deploy 🚀
