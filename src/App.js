import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Menubar from './components/Menubar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MovieDetails from './pages/MovieDetails';
import Watchlist from './pages/Watchlist';
import  { Favourite } from './FavoriteContext';
import React, { useState, useEffect } from 'react';
import About from './pages/About';


function App() {

  const [fav, setFav] = useState([]);
  useEffect(() => {
    const savedFav = JSON.parse(localStorage.getItem("lsfav"));
    if (Array.isArray(savedFav)) {
      // setFav(savedFav);
      setFav(savedFav.map(id => Number(id)));
    }

  }, [])

  useEffect(() => {
    localStorage.setItem("lsfav", JSON.stringify(fav));
  }, [fav])

  return (

    <>
      <Favourite.Provider value={{ fav, setFav }} >


        <BrowserRouter>
          <Menubar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Explore' element={<Explore />} />
              <Route path='/movie/:id' element={<MovieDetails />} />
              <Route path='/Watchlist' element={<Watchlist />} />
              <Route path='/About' element={<About /> } />
            </Routes>
          </main>
        </BrowserRouter>

      </Favourite.Provider>
    </>
  );
}

export default App;
