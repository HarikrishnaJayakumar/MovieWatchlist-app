# **CineVault – React Movie Discovery & Watchlist App**

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TMDB](https://img.shields.io/badge/API-TMDB-yellow)
![Bootstrap](https://img.shields.io/badge/UI-React--Bootstrap-purple)

**CineVault** is a sleek, responsive movie discovery web application built using React and powered by The Movie Database (TMDB) API.

Users can:

- Browse movies  
- Search titles instantly  
- View detailed movie pages  
- Watch trailers  
- Maintain a personal watchlist (stored locally)

The project is fully API-driven and uses The Movie Database (TMDB) for real-time movie data.

---

##  Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Environment Variables](#-environment-variables)
- [Installation & Setup](#-installation--setup)
- [Watchlist System](#-watchlist-system-context-api)
- [LocalStorage Behavior](#-watchlist-localstorage-behavior)
- [UI Features](#-ui-features)
- [License](#-license)

---

## **Features**

###  Movie Browsing

- Explore **Trending, Popular, Top Rated & Genres**
- Responsive movie grids
- Horizontal scrolling sections
- API-powered search
- Dynamic content loading
- Lightweight & fast UI

###  Movie Details
- High-resolution posters & backdrops
- Rating, runtime, release date & overview
- YouTube trailer modal
- Add to Watchlist button

###  Watchlist System

- Add movies to a personal watchlist
- Managed globally using **React Context**
- Remove movies easily
- Add/remove from any page
- Duplicate prevention
- Real-time movie data fetching
- Persistent across refresh

--- 
##  Tech Stack

### Frontend
- React (Functional Components + Hooks)
- React Router DOM
- Axios
- React-Bootstrap

### API
- TMDB (The Movie Database)

### State Management
- React Context API

### Styling
- CSS Modules
- React-Bootstrap

---
##  Folder Structure

```bash
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

```
##  Environment Variables

This project requires a **TMDB API key**.

Generate one from:

 https://www.themoviedb.org

Create a `.env` file:

REACT_APP_TMDB_API_KEY=your_api_key
 


---

##  Installation & Setup

###  Clone the repository

```bash
git clone https://github.com/HarikrishnaJayakumar/MovieWatchlist-app.git
cd MovieWatchlist-app
```
Install dependencies:
```bash
npm install
```

Configure environment variables:
```bash
echo "REACT_APP_TMDB_API_KEY=your_api_key" > .env
```
Start the development server:
```bash
npm start
```

The application will run at:
```bash
http://localhost:3000
```

##  Watchlist System (Context API)

The Watchlist is implemented using a global context (**FavouriteContext**).

### Context provides:

- `fav` → array of movie IDs saved by the user  
- `setFav()` → function used to update the watchlist 

 **Add to Watchlist** occurs within `MovieDetails.jsx`  
 **Watchlist page** retrieves real-time movie details  

This ensures **consistent, centralized state management** across all pages.

---
##  Watchlist LocalStorage Behavior

The app uses **React Context** for storing favorites (`fav[]`) and syncs them with **LocalStorage**.

✔ **Automatically stored**  
When you add/remove any movie, the updated list is saved.

✔ **Restored on refresh**  
On page reload, your saved movies reappear.

✔ **No duplicates**  
A movie can only be added once.

✔ **Persistent**  
Data remains until you manually clear your browser storage.

---


##  UI Features

###  Movie Detail Backdrop Overlay
Smooth gradient overlay to improve text readability.

###  Trailer Modal
Bootstrap modal with embedded YouTube `<iframe>` trailer.

###  Explore Genre Animations
Cards fade-in with staggered transitions for a clean UI.

###  Search Result Dropdown
- Custom scrollbars  
- Hover effects  
- Close button  
- Poster previews  

---

##  License

This project is licensed under the **MIT License**.

You are free to:

- Use  
- Modify  
- Contribute to CineVault
