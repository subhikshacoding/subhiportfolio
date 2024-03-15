import React from 'react'
import './intro.css'
import portfolioimg from "../assets/portfolio.jpg"
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src="https://plus.unsplash.com/premium_photo-1664301969414-d8435c2b91bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image"></img>
     </div>
     <div className='content'>
        <p> HI, I'M SUBHIKSHA.</p>
        <h1>FRONTEND DEVELOPER.</h1>
        <div>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn-light'>Contact</Link>

        </div>
     </div>
    </div>
  )
}

export default Intro