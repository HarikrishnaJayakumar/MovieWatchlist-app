import React, { useContext, useEffect, useState } from 'react'
import { Favourite } from '../FavoriteContext'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import '../styles/watchlist.css'

const apiKey = process.env.REACT_APP_TMDB_API_KEY;



function Watchlist() {


    const { fav, setFav } = useContext(Favourite)
    const [displaymovie, setDisplaymovie] = useState([])

    useEffect(() => {



        if (fav.length !== 0) {



            Promise.all(
                fav.map(i => (
                    axios.get(`https://api.themoviedb.org/3/movie/${i}?api_key=${apiKey}`)
                )
                )
            )
                .then((response) => {


                    setDisplaymovie(response.map(r => r.data))
                })
                .catch((error) => {
                    console.log('error fetching')
                })


        } else {
            setDisplaymovie([]);
            return;
        }



    }, [fav])

    console.log(fav);

    function handleRemove(id) {
        setFav(fav.filter(item => Number(item) !== Number(id)))
        console.log(fav);
    }


  return (
        <div className="watchlist-container">
            <div>
                <h2 className="watchlist-header">Watchlist</h2>
                <div className="watchlist-line"></div>
            </div>

            <div className="spacer"></div>

            <div className="watchlist-grid">
                {displaymovie.map(d => (
                    <Card key={d.id} className="movie-card">
                        <Card.Img 
                            variant="top" 
                            src={`https://image.tmdb.org/t/p/w500/${d.poster_path}`} 
                            className="movie-poster" 
                        />
                        <Card.Body className="movie-card-body">
                            <div>
                                <Card.Title className="movie-title">{d.title}</Card.Title>
                                <Card.Text className="movie-rating">
                                    {d.vote_average ? d.vote_average.toFixed(1) : 'N/A'}
                                </Card.Text>
                            </div>
                            <button 
                                className="remove-btn"
                                onClick={() => handleRemove(d.id)}
                            >
                                Remove
                            </button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Watchlist
