import React from 'react'
import '../styles/about.css'

function About() {
  return (
   <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About</h1>

        <p className="about-block1">
          Your Personal Cinema is a simple space for people who love movies.
          It’s built to help you keep track of what you’ve watched, organize
          what you want to see next, and explore films without distractions.
        </p>

        <p className="about-block2">
          Unlike traditional movie platforms, this app focuses on personal
          discovery rather than recommendations driven by trends. Your lists,
          your pace, your taste.
        </p>

        <p className="about-block2">
          Movie data and images are sourced from reliable providers to ensure
          accurate, up-to-date information while keeping the experience clean
          and minimal.
        </p>

        <p className="about-block3">
          Built for movie lovers who prefer simplicity over noise.
        </p>
      </div>
    </div>
  )
}

export default About
