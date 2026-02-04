import React, { useEffect, useState } from 'react'
import a from 'axios'
import Card from 'react-bootstrap/Card';
import '../styles/top.css'
import { Link } from 'react-router-dom';
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

function Toprated() {

    const [trated, setTrated] = useState([])
    useEffect(() => {
        a.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
            .then(response => {
                setTrated(response.data.results)
            })
            .catch(error => {
                console.error('failed')
            })
    }, [])
    return (
        <div>
            <div>
                <h2 style={{ position: 'relative', top: 10, left: 30, width: '80%', fontFamily: 'Brush Script MT ,cursive', color: 'white' }}>
                    Top Rated Movies
                </h2>
                <div className="line" style={{ width: '95%', height: '1px', background: 'white', margin: '10px auto 0 ', opacity: 0.4 }}></div>
            </div>
            <br /><br />

            <div className="viewareacarousel mx-auto">

                <div className='track' > {trated.map(i => (

                    <Link to={`/movie/${i.id}`} >
                        <Card key={i.id}  className="card bg-dark text-white" >
                            <Card.Img src={`https://image.tmdb.org/t/p/original/${i.poster_path}`} alt="Card image" style={{ height: '200px', width: '200px',objectFit:'cover' }} />
                            <Card.ImgOverlay>
                                <Card.Title>{i.title}</Card.Title>
                                <Card.Text>{i.vote_average}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                ))}
                </div>

            </div>

        </div>

    )
}

export default Toprated
