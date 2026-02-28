CineVault – React Movie Discovery & Watchlist App

CineVault is a sleek, responsive movie discovery web application built using React and powered by The Movie Database (TMDB) API.
Users can browse movies, search titles instantly, view detailed movie pages, watch trailers, and maintain a personal watchlist stored locally on their device.
The project is fully API-driven and uses The Movie Database (TMDB) for real-time movie data.

Features
-Movie Browsing
    --Explore Trending, Popular, Top Rated, and Genre-specific movies
    --Responsive movie grids and horizontal scrolling sections
    --API-powered search and dynamic content loading
    --Lightweight and fast UI

-Movie Details
    --High-resolution posters and backdrops
    --Rating, runtime, release information, and overview
    --Integrated trailer player (YouTube modal)
    --“Add to Watchlist” button on the movie details page

-Watchlist System
    --Add movies to a personalized Watchlist
    --Watchlist is managed globally using React Context
    --Remove movies easily from the Watchlist page
    --Add/remove movies from any page
    --Displays all saved movies as cards
    --Persistent across page refreshes
    --Uses React Context + LocalStorage sync
    --Prevents duplicates ("Already in Watchlist")

Tech Stack
-Frontend
    --React (Functional Components + Hooks)
    --React Router DOM
    --Axios
    --React-Bootstrap
API
    --TMDB (The Movie Database API)
State Management
    --React Context API for Watchlist
Styling
    --CSS Modules and React-Bootstrap

Folder Structure
src/
│── components/
│   ├── MovieCard.jsx
│   ├── Menubar.jsx
│   ├── Watchtrailer.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── MovieDetails.jsx
│   ├── Watchlist.jsx
│
│── context/
│   └── FavoriteContext.jsx
│
│── styles/
│   ├── home.css
│   ├── explore.css
│   ├── moviedetail.css
│   ├── watchlist.css
│
│── App.jsx
│── index.js


Environment Variables

This project requires a TMDB API key.
You can generate an API key at:
https://www.themoviedb.org

Installation and Setup

Clone the repository:
git clone https://github.com/HarikrishnaJayakumar/MovieWatchlist-app.git
cd MovieWatchlist-app

Install dependencies:
npm install

Configure environment variables:
echo "REACT_APP_TMDB_API_KEY=your_api_key" > .env

Start the development server:
npm start

The application will run at:
http://localhost:3000

Watchlist System (Context API)

The Watchlist is implemented using a global context (FavouriteContext).
It exposes:

fav – array of movie IDs saved by the user

setFav() – used to modify the list

Add to Watchlist occurs  within MovieDetails.jsx

Watchlist page retrieves real-time movie details.

This ensures consistent, centralized state management across all pages.
Watchlist LocalStorage Behavior

The app uses React Context for storing favorites (fav[]) and syncs them with LocalStorage.

✔ Automatically stored

When you add/remove any movie, the updated list is saved.

✔ Restored on refresh

On page reload, your saved movies reappear.

✔ No duplicates

A movie can only be added once.

✔ Persistent

Data remains until you manually clear your browser storage.


 UI Features
-Movie Detail Backdrop Overlay
    --Smooth gradient overlay to improve text reading.

-Trailer Modal
    --Bootstrap modal with embedded YouTube <iframe> trailer.

-Explore Genre Animations
    --Cards fade-in staggered for clean transitions.

-Search Result Dropdown
    --Custom scrollbars, hover effects, close button, poster previews.



License

This project is licensed under the MIT License.
You are free to use, modify, and contribute to CineVault.