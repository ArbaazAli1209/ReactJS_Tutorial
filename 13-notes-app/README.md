# Notes App

A simple React note-taking app built with Vite and Tailwind CSS. Users can add notes with a heading and details, then delete them from the notes list.

Live demo: https://notes-app-liard-alpha.vercel.app/

## Features

- Add a note with a title and details
- Display notes in a card grid
- Delete individual notes
- Responsive layout styled with Tailwind CSS

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- ESLint

## Project Structure

- `src/App.jsx` — main note form and note list UI
- `src/main.jsx` — application entry point
- `package.json` — scripts and dependencies

## Setup

1. Install dependencies:
   - `npm install`
2. Start the development server:
   - `npm run dev`

## Available Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build production assets
- `npm run preview` — preview the built app locally
- `npm run lint` — run ESLint

## Usage

1. Open the app in the browser.
2. Enter a note title.
3. Add note details.
4. Click **Add Note** to save the note.
5. Click **Delete** to remove a note.

## Notes

- Notes are stored in React state only and are not persisted after refresh.
- The app supports adding and deleting notes only.
