# SANRO Fibre Glass Industries

Premium frontend website for **SANRO Fibre Glass Industries** — a fibre manufacturer in Idukki, Kerala, focused on interior fibre doors, custom fibre solutions and waterproofing.

## Stack

- React 19
- Vite
- Tailwind CSS 4
- React Router
- Lucide React

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Architecture

Static content lives in `src/data/` so it can later be replaced with Supabase or API calls without rebuilding the UI.

Enquiry submissions are validated on the frontend and stored locally as a placeholder (`sanro.enquiries` in localStorage) until a backend is connected.

## Images

Place real SANRO photography in:

```text
public/images/
  brand/
  doors/
  projects/
  factory/
  waterproofing/
  gallery/
  rooms/
```
