import React from 'react'
import './aboutcontent.css'
import { Link } from 'react-router-dom';

const Aboutcontent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>
                Who Am I? </h1>
                <p>Im a react front-end developer. i create
                    responsive secure websites.
                </p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src="https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className='img'></img>
                </div>
                <div className='img-stack bottom'>
                    <img src="https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className='img'></img>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Aboutcontent;