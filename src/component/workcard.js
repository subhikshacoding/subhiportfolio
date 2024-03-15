import React from 'react'
import './workcard.css'
import { NavLink } from 'react-router-dom';

const Wordcard = (props) => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'></h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={props.imagesource} alt="image"></img>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                    <div className='pro-btns'>
                        <NavLink to={props.view} className="btn"> view</NavLink>
                        <NavLink  to={props.source} className="btn">
                            source
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wordcard