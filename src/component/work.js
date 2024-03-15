import React from 'react'

import "./workcard.css";
import Workcard from './workcard'
import WorkCardData from './workcarddata'

const Work = () => {
  return (
    <div className='work-container'>
    <h1 className='project-heading'>Projects</h1>
    <div className='project-container'>
      {WorkCardData.map((val,ind)=> {
        return(
          <Workcard 
          key={ind}
          imagesource={val.imagesource}
          title={val.title}
          text={val.text}
          view={val.view}
          />
        )
      })}
       
            </div>
        </div>
   
  )
}

export default Work;