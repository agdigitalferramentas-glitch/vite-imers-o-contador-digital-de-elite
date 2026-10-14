# Project rules
- Build checkout URLs through `src/lib/checkout.ts` on every sales page so campaign attribution follows one shared, tested policy.
- Keep the application a classic Vite React SPA with static Docker/Nginx deployment so it runs independently on the user's server.
- Scope homepage theme tokens and visual overrides under `.theme-light` in the shared stylesheet; only the homepage mounts this wrapper so other sales variants retain their independent appearance.