# Bevin and Jaimi

A polished wedding invitation web app for Bevin Binny and Jaimi Benny. It includes the event details, countdown, and RSVP flow in a mobile-friendly floral design. The invitation is now fully general and no longer depends on a guest name in the URL.

## Getting Started

Install dependencies and start the local dev server:

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build and generate the static index
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Notes

- The app loads from the clean root URL without query parameters.
- RSVP submissions are stored locally in the browser.
- The layout is designed to work well on mobile and desktop.