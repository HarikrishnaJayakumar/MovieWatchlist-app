import React, { useEffect, useState } from 'react'
import a from 'axios'
import { Button } from 'react-bootstrap';
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

function Home() {
  const [i, seti] = useState([])


  useEffect(() => {
    const imgid = Math.floor(Math.random() * 100) + 1;
    console.log(imgid);
    a.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${imgid}`)
      .then(response => {
        seti(response.data.results)
      })
      .catch(error => {
        console.log(error);

      })


  }, [])
  const linkStyle = {
  color: '#aaa',
  margin: '0 12px',
  textDecoration: 'none',
  fontSize: '14px'
}

  const randomMovie = i[Math.floor(Math.random() * i.length)];
  return (
    <div>
      <div style={{ position: 'relative', width: '100%', height: '660px' }}>
        <img src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`} alt="" style={{ width: '100%', height: '660px', objectFit: 'cover', filter: "brightness(60%)" }} />
        <div style={{
          position: "absolute",
          height: '660px',
          top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(transparent,rgba(0,0,0,0.9))"

        }}>
        </div>
      </div >
      <div style={{ color: 'white', textAlign: 'center', position: 'absolute', bottom: 10, left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
        <h1 style={{ fontWeight: 600, }}>
          Your Personal Cinema.</h1>
        <br />
        <h2>Track what you’ve seen. Save what you want.</h2>
        <br /><br />
        <a href='/Explore'>  <Button variant="danger" size="lg" style={{ width: '200px', height: '50px', fontWeight: 'bold', fontFamily: 'Roboto' }}>Explore Now</Button>
        </a>
      </div>
       <footer
        style={{
          backgroundColor: '#000',
          color: '#aaa',
          padding: '40px 20px',
          textAlign: 'center'
        }}
      >
        
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '14px' }}>
          Discover, track and explore movies you love.
        </p>

        <div style={{ marginTop: '20px' }}>
          <a href="/Explore" style={linkStyle}>Explore</a>
          <a href="/Watchlist" style={linkStyle}>Watchlist</a>
          <a href="/About" style={linkStyle}>About</a>
        </div>

        <p style={{ marginTop: '25px', fontSize: '13px' }}>
          © {new Date().getFullYear()} Your Personal Cinema. All rights reserved.
        </p>
      </footer>
    </div>
  )
  
}

export default Home
