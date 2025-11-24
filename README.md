# TACITUS◳ Apps Hub

A minimal React + Vite + Supabase front-end that acts as the unified **TACITUS◳ Apps Hub**.

- Deployed on **Vercel**
- Supabase email magic-link auth (passwordless)
- Tacitus-style glassmorphism UI
- Modular grid of app tiles so you can easily add more apps later

## Apps included

- **Resolution Engine** – Conflict intelligence from email-native analysis.
- **Prism Lab · Polarization** – Explorer for polarized audiences and narratives.
- **Ontology / Conflict Graph** – Graph-native ontology and conflict mapping.
- **Concordia Discors Magazine** – Long-form essays on polarization, liberty, and conscience.

## Quick start

```bash
npm install
npm run dev
```

Create a `.env.local` file (or set environment variables on Vercel):

```bash
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Make sure your Supabase **Site URL** under **Authentication → URL Configuration** matches your deployed Vercel domain (e.g. `https://apps.tacitus.me`), and add any preview URLs to the redirect list.
