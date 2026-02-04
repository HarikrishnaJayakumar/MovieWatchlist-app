import React, { useEffect, useState } from 'react'
import '../styles/mbar.css'
import logo from '../assets/images/navlogo.png'
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios'

const apiKey = process.env.REACT_APP_TMDB_API_KEY;


function Menubar() {
    const navbar = [
        { nav_name: 'Home', paths: '/' },
        { nav_name: 'Explore', paths: '/Explore' },
        { nav_name: 'Watchlist', paths: '/Watchlist' },
        { nav_name: 'About', paths: '/About' }
    ]

    
    const [search, setSearch] = useState("")
    const [sresult, setResult] = useState([])

   
    useEffect(() => {
        if (search === "") {
            setResult([])
            return;
        }
        const searchMovies = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`)
            .then(response => {
                setResult(response.data.results)
            }).catch(error => {
                console.error('failed')
            })

    }

        const timer = setTimeout(() => {
            searchMovies();
        }, 500);

        return () => clearTimeout(timer);
    }, [search]);

    const searchchange = (event) => {
        setSearch(event.target.value)
    }
    const closeSearch = () => {
        setSearch("");
        setResult([]);
    }
    return (
        <div>

            <nav>
                <div className='nav-logo' >
                    <img src={logo} alt="logo_missing" height={'75px'} width={'150px'} />
                </div>
                <div className="searchbar" style={{ position: 'relative' }} >

                    <input className='sbar' type="text" placeholder=' Search' value={search} onChange={searchchange} />
                   

                      {sresult.length > 0 && (
                        <div className="search-results-container" style={{position: 'absolute',top: '100%',left: 0,width: '100%',minWidth: '300px',maxHeight: '400px',overflowY: 'auto',backgroundColor: '#212529',
                            zIndex: 1000,borderRadius: '0 0 8px 8px',border: '1px solid #444',boxShadow: '0px 4px 15px rgba(0,0,0,0.5)'}}>
                          
                            <div style={{textAlign: 'right', padding: '5px 10px', borderBottom:'1px solid #333'}}>
                                <button onClick={closeSearch} className="search-close-btn">✕</button>
                            </div>

                            {sresult.map(s => (
                                <Link
                                    key={s.id}
                                    to={`/movie/${s.id}`}
                                    onClick={closeSearch} 
                                    style={{ textDecoration: 'none', color: 'white', display: 'block' }}
                                >
                                    <div className="search-item" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        padding: '10px',
                                        borderBottom: '1px solid #333'
                                    }}>
                                        <img src={s.poster_path ? `https://image.tmdb.org/t/p/original/${s.poster_path}` : "https://via.placeholder.com/50x75"}
                                            alt={s.original_title}
                                            style={{
                                                width: '40px',
                                                height: '60px',
                                                objectFit: 'cover',
                                                borderRadius: '4px'
                                            }} />
                                        <div>
                                            <h5 style={{ margin: 0, fontSize: '14px' }}>{s.title}</h5>
                                            <small style={{ color: '#aaa' }}>{s.release_date ? s.release_date.substring(0, 4) : ''}</small>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                <div className='nav-items'>
                    {navbar.map(n => (
                        <li style={{ listStyle: 'none' }} key={n.nav_name}>
                            <div className='navdiv' style={{ width: '100px', height: '60px', textAlign: 'center', display: 'flex', alignItems: 'center', borderradius: '10px', justifyContent: 'center', }}>
                                <NavLink className='navlink' to={n.paths}>{n.nav_name} </NavLink>
                            </div> </li>
                    ))}
                </div>
            </nav>
          

        </div>
    )
}

export default Menubar

