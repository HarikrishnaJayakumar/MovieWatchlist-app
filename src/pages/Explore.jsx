import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Toprated from '../components/Toprated'
import { Link } from 'react-router-dom'
import '../styles/explore.css';
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

function Explore() {
 
    const [genres, setGenres] = useState([])
    const [selectedGenre, setSelectedGenre] = useState(null)
    const [genreMovies, setGenreMovies] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
            .then(res => setGenres(res.data.genres))
    }, [])

    useEffect(() => {
        if (selectedGenre) {
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre}`)
                .then(res => setGenreMovies(res.data.results))
        }
    }, [selectedGenre])



    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
            .then(response => {
                setData(response.data.results);


            })
            .catch(error => {
                console.error('failed')
            })
    }, [])


    return (
        <div>

            <h1 style={{ position: 'relative', top: 10, left: 30, width: '80%', fontFamily: 'Brush Script MT ,cursive', color: 'white' }}>
                Popular Around You
            </h1>
            <div style={{ height: '5px' }}>

            </div>

            <Carousel indicators={false}  >

                {data.map(i => (
                    <Carousel.Item key={i.id} interval={1100}
                        style={{ height: '90vh' }} >
                        <Link to={`/movie/${i.id}`}>
                            <img className='d-block w-100' style={{ height: '100%', objectFit: 'cover', filter: "brightness(60%)" }} src={`https://image.tmdb.org/t/p/original/${i.backdrop_path}`} alt="First slide" />


                        </Link>
                        <div
                            style={{
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
                                padding: "40px 20px",


                            }}
                        >
                            <h2 style={{ color: "#fff", fontSize: "50px" }}>{i.title}</h2>
                            <p style={{ color: "#B3B3B3", fontSize: "18px" }}>{i.overview}</p>
                        </div>

                    </Carousel.Item>


                ))}

            </Carousel>


            <div style={{ height: '20px' }}>

            </div>

            <h2  style={{ position: 'relative', top: 10, left: 30, width: '80%', fontFamily: 'Brush Script MT ,cursive', color: 'white' }} >Browse by Genre</h2>

            <div className="genre-scroll">
                {genres.map(g => (
                    <button
                                            
                        key={g.id }
                        className={selectedGenre === g.id ? "genre-chip active" : "genre-chip"}
                        onClick={() =>
                            setSelectedGenre(prev => prev === g.id ? null : g.id)
                        }
                    >
                        {g.name}
                    </button>
                ))}
            </div>
            {selectedGenre && (
                <>
                    <h3 style={{ position: 'relative', top: 10, left: 30, width: '80%', fontFamily: 'Brush Script MT ,cursive', color: 'white' }} >
                        {genres.find(g => g.id === selectedGenre)?.name} Movies
                    </h3>

                   
                    <div className={`container mt-4 genre-container ${genreMovies.length ? "show" : ""}`}>    

                        <div className="row">
                            {genreMovies.map(m => (
                                <div className="col-6 col-md-4 col-lg-2 mb-4" key={m.id}>
                                    <Link to={`/movie/${m.id}`}>
                                        <Card className="bg-dark text-white h-100 movie-card">
                                            <Card.Img
                                                src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                                                style={{ objectFit: "cover" }}
                                            />
                                            <Card.ImgOverlay className="d-flex flex-column justify-content-end overlay">
                                                <Card.Title>{m.title}</Card.Title>
                                                <Card.Text> {m.vote_average}</Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </>

            )}
            {!selectedGenre && <Toprated />}

        </div>
    )
}

export default Explore



