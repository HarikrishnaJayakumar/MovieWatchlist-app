import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import '../styles/moviedetail.css'
import Watchtrailer from '../components/Watchtrailer';
import { Favourite } from '../FavoriteContext';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;


function MovieDetails() {

    const { fav, setFav } = useContext(Favourite)

    const { id } = useParams();
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
            .then(response => (
                setMovie(response.data)
            ))
            .catch(error => (
                console.error('error fetch')

            ))
    }, [id])
    const [mtrail, setMtrail] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=8d56a3a8bb9b9679509488721e180d4e`)
            .then(response => (
                setMtrail(response.data.results)
            ))
            .catch(error => (
                console.error('error fetch')

            ))
    }, [id])
    const trailer = mtrail.find(v => v.type === "Trailer" && v.site === "YouTube");



    const [modalShow, setModalShow] = useState(false);


    function Addtowatchlist() {
        // setFav([...fav,id])
        // alert('Added to Watchlist')
        const movieid = Number(id)
        if (!fav.includes(movieid)) {
            setFav([...fav, movieid]);
            alert("Added to Watchlist");
        } else {
            alert("Already in Watchlist");
        }
    }

    return (
        <div>


            <div style={{ backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
                <div
                    className="moviebackground"
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
                >
                    <div className='mbgoverlay' ></div>


                    <Container className="position-relative" style={{ zIndex: 2, paddingBottom: '40px' }}>
                        <Row>

                            <Col md={4} lg={3}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="img-fluid rounded shadow-lg"
                                    style={{ border: '1px solid #333' }}
                                />
                            </Col>
                            <Col md={8} lg={9} className="d-flex flex-column justify-content-end">
                                <h1 className="display-4 fw-bold">{movie.title}</h1>
                                <p className="lead fst-italic text-secondary">{movie.tagline}</p>

                                <div className="d-flex gap-3 mb-4">
                                    <Badge bg="danger" className="p-2 fs-6">{movie.vote_average}/10</Badge>
                                    <span className="text-light">{movie.release_date}</span>
                                    <span className="text-light">{movie.runtime} min</span>
                                </div>

                                <div className="d-flex gap-3">
                                    <Button variant="danger" size="lg" onClick={() => setModalShow(true)}

                                    >Watch Trailer</Button>


                                    <Button variant="outline-light" size="lg" onClick={Addtowatchlist}>Add to Watchlist</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <Container className="py-5">
                    <h3>Overview</h3>
                    <p className="fs-5 text-secondary">{movie.overview}</p>

                </Container>


                <Watchtrailer t={trailer} show={modalShow} onHide={() => setModalShow(false)} />



            </div>

        </div>
    )
}

export default MovieDetails
