import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Toprated from '../components/Toprated'
import { Link } from 'react-router-dom'
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

function Explore() {
    
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
            <Toprated />

        </div>
    )
}

export default Explore



