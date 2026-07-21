# Gallery Project

A simple React + Vite gallery app that fetches and displays image cards from the Picsum API. The app uses Tailwind CSS for styling and Axios for API requests.

## Features

- Fetches image data from `https://picsum.photos/v2/list`
- Displays a responsive gallery of image cards
- Pagination with `Prev` and `Next` buttons
- Opens the image source page in a new tab when a card is clicked
- Built with React, Vite, Tailwind CSS, and Axios

## Project Structure

- `src/App.jsx` — main application logic and pagination state
- `src/components/Card.jsx` — renders each image card and author name
- `package.json` — dependencies and scripts

## Getting Started

### Prerequisites

- Node.js installed

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown in the terminal to view the app.

## Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across the project

## Notes

- The app loads 10 images per page and updates content whenever the page index changes.
- If the first page is active, the `Prev` button is disabled visually and prevented from decrementing the page index.
- The gallery background is dark, and image cards are rendered with rounded corners for a polished look.
