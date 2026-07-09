# FinTeam One — Company Website (KworksGlobal)

React (Create React App) frontend + Express backend for **finteam.one**.

## Prerequisites
- [Node.js](https://nodejs.org) 18+ (includes npm)
- [Git](https://git-scm.com)

## Get the code
```bash
git clone https://github.com/PChanduraj/KworksGlobal.git
cd KworksGlobal
git checkout sandbox/resources-careers-video   # work on the sandbox branch, NOT main
```

## Run it locally

**Frontend** (the website) — http://localhost:3000
```bash
cd Frontend
npm install
npm start
```

**Backend** (article-view tracking API) — http://localhost:3001, optional
```bash
cd Backend
npm install
npm start
```
The frontend proxies `/api/*` to the backend (see `Frontend/package.json` → `proxy`),
so run both if you want the self-hosted view counter to record. View counts are
written to `Backend/data/views.json` (gitignored) and ranked at
http://localhost:3000/resources/stats.

## Project structure
```
Frontend/   React app (CRA)
  src/components/   UI: Navbar, Banner (video hero), Resources, Article, Careers, Stats, VideoEmbed …
  src/data/articles.js   On-site article content (add editions here)
  src/utils/track.js     Article-view tracking (GA4 + self-hosted counter)
  public/video/          Hero video + poster
Backend/    Express server (server.js) — email + /api/track endpoints
```

## Adding a resource article
Append an object to `Frontend/src/data/articles.js` (`slug`, `category`, `title`,
`excerpt`, `date`, `readingTime`, optional `video` URL, and a `body` array of
`{ h }` headings / `{ p }` paragraphs). The Resources list, `/resources/:slug`
page, and stats dashboard pick it up automatically.

## Analytics
- **GA4:** replace `G-XXXXXXXXXX` in `Frontend/public/index.html` with your
  Measurement ID to activate. Inert until then.
- **Self-hosted counter:** only records while the Express backend is running.

## Branch / deploy workflow
- Production `finteam.one` deploys from **`main`** via Vercel. **Do not push to `main`.**
- Do all work on **`sandbox/resources-careers-video`** — pushes there build an
  isolated Vercel Preview URL; production stays untouched.
- `git pull` before you start on another machine so you don't fork your own work.
```bash
git add -A && git commit -m "your message" && git push
```
