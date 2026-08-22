# Breaking Bad React App

A character browser for Breaking Bad / Better Call Saul, built with React.

## API status

This project originally fetched data live from `breakingbadapi.com`. As of
August 2026 that domain no longer resolves (it was parked with ads by mid-2025
and has since expired entirely), so the app now ships with a bundled snapshot
of the character data at [`src/data/characters.json`](src/data/characters.json)
(62 characters, pulled from a 2022 Wayback Machine capture of the API
response). Searching filters that local dataset client-side instead of
calling the dead endpoint.

## Getting started

This project now uses [Vite](https://vitejs.dev/) instead of the old,
deprecated Create React App tooling.

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```
