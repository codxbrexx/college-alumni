# College Alumni Platform

A modern, responsive alumni networking platform with a polished UI/UX. It connects alumni and students with features like a people directory, job board, news/events, and placement stats. Built with React (Vite), Tailwind CSS 4, and an Express/MongoDB backend.

## Highlights

- Beautiful, professional UI with gradients, glass-morphism, and dark mode
- Landing + Home pages with animations and stats
- Alumni directory with modern cards, skills, and mentor badges
- Job board with search, filters, bookmarking, and rich job cards
- News & Events with tabs, search, categories, and event details
- Placements page with interactive year selector and animated stats
- SPA routing with React Router v7 and Vercel-friendly rewrites

## Tech Stack

- Frontend: React 19, Vite 7, Tailwind CSS 4, React Router v7, React Icons, CountUp
- Backend: Node.js, Express 5, MongoDB (Mongoose), JWT, Multer, Cloudinary
- Tooling: ESLint, Prettier
- Deployment: Vercel (Frontend), any Node host for Backend

## Monorepo Structure

```
college-alumni/
├─ Backend/
│  ├─ app.js                # Express app + CORS/cookies
│  ├─ index.js              # Server entry + dotenv
│  ├─ package.json          # Backend deps
│  └─ src/
│     ├─ controller/
│     │  └─ user.controller.js   # WIP user handlers
│     ├─ database/
│     │  └─ dbConnect.js         # TODO: wire up Mongo connection
│     ├─ middleware/
│     │  ├─ auth.middleware.js   # JWT verification
│     │  └─ multer.middleware.js # Uploads (WIP)
│     ├─ model/
│     │  ├─ jobPost.model.js
│     │  ├─ newsPost.model.js
│     │  └─ user.model.js
│     ├─ routes/
│     │  └─ user.routes.js       # WIP: register/login routes
│     └─ utils/
│        ├─ ApiError.utils.js
│        ├─ ApiResponse.utils.js
│        └─ cloudinary.utils.js  # Cloudinary config + upload helper
│
├─ Frontend/
│  ├─ index.html
│  ├─ package.json          # Vite + React + Tailwind
│  ├─ vite.config.js
│  └─ src/
│     ├─ main.jsx           # Router + ThemeProvider
│     ├─ App.jsx / Layout.jsx
│     ├─ context/ThemeContext.jsx
│     ├─ Components/
│     └─ pages/
│        ├─ Home/
│        ├─ Alumni/
│        ├─ Job/
│        ├─ News/
│        └─ Placements/
└─ README.md (this file)
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm 9+
- MongoDB connection string (for backend features)
- Cloudinary account (for media uploads)

### 1) Clone and Install

```bash
# Clone
git clone <repo-url>
cd college-alumni

# Install frontend deps
cd Frontend
npm install

# Install backend deps
cd ../Backend
npm install
```

### 2) Environment Variables (Backend)

Create `Backend/.env` with:

```
# Server
PORT=5000
CORS_ORIGIN=http://localhost:5173

# Database
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority

# Auth
ACCESS_TOKEN_SECRET=change_me_to_a_strong_secret
REFRESH_TOKEN_SECRET=change_me_to_another_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_EXPIRY=10d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Notes:
- The backend defaults CORS_ORIGIN to http://localhost:3000. If you use Vite’s default port, set `CORS_ORIGIN=http://localhost:5173`.
- `dbConnect.js` is currently empty; wire it to `MONGODB_URI` before enabling DB-backed routes.

### 3) Run in Development

Open two terminals.

Terminal A – Backend
```bash
cd Backend
# Option A: plain Node
node index.js
# Option B: nodemon (installed)
npx nodemon index.js
```
Server runs on http://localhost:5000 (or your PORT).

Terminal B – Frontend
```bash
cd Frontend
npm run dev
```
Vite serves the client at http://localhost:5173.

### 4) Production Builds

Frontend (Vite):
```bash
cd Frontend
npm run build
npm run preview   # optional local preview
```

Backend: Deploy to your Node host (Render/railway/fly/heroku), set the same `.env` and start with `node index.js`.

## Frontend Features Overview

- Landing/Home: Gradient hero, stats counters, feature cards, animated CTA
- Alumni: Modern profile cards, mentor badge, skills, contact shortcuts
- Jobs: Search, job type/location filters, bookmark, salary badge, benefits
- News & Events: Tabs, category filter, search, likes/bookmark, event details
- Placements: Year selector, animated stats, top recruiters, insights cards
- Dark Mode: Consistent dark theme across all screens

## API (Backend – WIP)

Current scaffolding exists; endpoints are placeholders until controllers are implemented.

Base URL: `http://localhost:5000/api`

Planned endpoints:
- POST `/auth/register` – Register a user (WIP)
- POST `/auth/login` – Login and issue JWT (WIP)
- POST `/auth/forgot` – Begin password reset (WIP)
- POST `/auth/createpassword` – Complete password reset (WIP)

Middleware:
- `verifyJWT` in `src/middleware/auth.middleware.js` verifies access tokens using `ACCESS_TOKEN_SECRET`.

Utilities:
- `uploadOnCloudinary(localFilePath)` in `src/utils/cloudinary.utils.js` uploads and cleans up local files.

Database:
- Add a real connection in `src/database/dbConnect.js` and call it before `app.listen`.

Example dbConnect.js (suggested):
```js
import mongoose from 'mongoose';

export const connectDB = async () => {
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI not set');
  await mongoose.connect(process.env.MONGODB_URI, { dbName: 'alumni' });
  console.log('MongoDB connected');
};
```
Then in `index.js`:
```js
import { connectDB } from './src/database/dbConnect.js';
await connectDB();
app.listen(...)
```

## Deployment

### Frontend on Vercel
- Project Root: `Frontend`
- Build Command: `npm run vercel-build` (uses `vite build`)
- Output Directory: `dist`
- SPA rewrites: ensure unknown routes serve `/index.html`
- Environment variables: none required for static client

### Backend
- Deploy to Render/Railway/Fly/Heroku/AWS
- Set all environment variables from the `.env` section
- Ensure CORS allows your deployed frontend origin

## Troubleshooting

- CORS error in dev: Set `CORS_ORIGIN=http://localhost:5173` in `Backend/.env`.
- Blank page on Vercel: Confirm SPA rewrites and `dist` as output.
- JWT errors: Ensure `ACCESS_TOKEN_SECRET` is set and consistent.
- Cloudinary upload fails: Verify cloud credentials and network access.

## Roadmap

- Implement real user auth and profile APIs
- Persist jobs/news data to MongoDB
- Add role-based permissions (alumni/admin)
- Add image upload to profiles and posts
- Add e2e tests and CI

## Contributing

1. Fork the repo and create a feature branch
2. Follow the project style (ESLint/Prettier)
3. Submit a PR with a clear description and screenshots if UI

## License

Add your preferred license (MIT/Apache-2.0/etc.) or keep the repo private.

---

Made with care to be fast, beautiful, and useful. ✨