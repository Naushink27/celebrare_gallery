# Celebrare Photo Gallery

A responsive photo gallery built with React and Vite that allows users to explore photographs, search by author, and save their favourite photos. The application fetches photo data from the Picsum Photos API and provides a clean, interactive interface.

## Features

- **Photo Gallery:** Fetches and displays 30 photos from the Picsum Photos API.
- **Author Search:** Search for photos by author in real time without making additional API requests.
- **Favourite Photos:** Add or remove photos from favourites using an interactive heart button.
- **Persistent Storage:** Saves favourite photo IDs in the browser's local storage so they remain available after refreshing the page.
- **Custom React Hook:** Uses a reusable `useFetchPhotos` hook to manage photo fetching, loading, and error states.
- **Loading State:** Displays an animated spinner while photos are loading.
- **Error Handling:** Shows an error message if fetching photos fails.
- **Responsive Design:** Displays four columns on desktop, two on tablets, and one on mobile devices.
- **Interactive UI:** Includes styled search input, hover effects, smooth transitions, and responsive photo cards.

## Tech Stack

- **React** — Component-based user interface.
- **Vite** — Development server and build tool.
- **Tailwind CSS** — Responsive styling and UI design.
- **JavaScript (ES6+)** — Application logic.
- **Picsum Photos API** — Photo data source.
- **Browser Local Storage** — Persistent favourite storage.

## React Concepts Used

This project demonstrates the following React concepts:

| Concept | Purpose |
|---|---|
| `useState` | Manages the author's search input. |
| `useEffect` | Fetches photos when the gallery mounts and synchronizes favourites with local storage. |
| `useReducer` | Manages adding and removing favourite photo IDs. |
| `useCallback` | Memoizes the search handler to avoid recreating the function unnecessarily between renders. |
| `useMemo` | Memoizes the filtered photo list based on the photos and search term. |
| Custom Hooks | Encapsulates photo-fetching logic in `useFetchPhotos`. |
| Component Reusability | Separates the gallery, photo cards, and loading spinner into reusable components. |

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Replace `<YOUR_GITHUB_REPOSITORY_URL>` with your actual repository URL.

### 2. Navigate to the project directory

```bash
cd celebrare-gallery
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## API Reference

This project uses the Picsum Photos API to retrieve photo information.

**Endpoint:**

`https://picsum.photos/v2/list?limit=30`

The API provides information such as photo IDs, author names, and image URLs.

The application fetches the photo data once when the gallery loads. Author searches filter the existing data locally instead of making additional API requests.

## Project Structure

```text
celebrare-gallery/
├── public/
├── src/
│   ├── components/
│   │   ├── Gallery.jsx
│   │   ├── PhotoCard.jsx
│   │   └── LoadingSpinner.jsx
│   ├── hooks/
│   │   └── useFetchPhotos.js
│   ├── reducers/
│   │   └── favouritesReducer.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*Note: This structure reflects the intended project organization. Adjust the file list if your actual project structure differs.*

## How Favourites Work

The application uses `useReducer` to manage the list of favourite photo IDs.

- Clicking an unselected heart adds that photo's ID to the favourites array.
- Clicking a selected heart removes the photo's ID.
- The updated array is saved to browser local storage.
- When the application initializes, it retrieves previously saved favourites and restores the selected heart states.

This allows favourites to persist across page refreshes without requiring a backend or user account.

## Responsive Layout

The gallery uses Tailwind CSS responsive grid classes to adapt to different screen sizes:

- **Mobile:** One column.
- **Tablet:** Two columns.
- **Desktop:** Four columns.

The layout adjusts automatically to the available screen width.

## Future Improvements

Possible enhancements include:

- Filtering the gallery to display only favourite photos.
- Adding pagination or a load-more option.
- Adding automated tests for search and favourite functionality.
- Improving accessibility and keyboard navigation.

## Acknowledgements

- [Picsum Photos](https://picsum.photos/) for providing the photo API.
- React, Vite, and Tailwind CSS for the development tools used in this project.

---

**Built as a React frontend assessment project.**