import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Hero from '../component/hero'
import Work from '../component/work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero  heading="PROJECTS." text="Some of my most recent works"/>
      <Work />
      <Footer />
      
    </div>
  )
}

export default Project;
