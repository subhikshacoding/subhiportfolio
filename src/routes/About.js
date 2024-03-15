import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Hero from '../component/hero'

const About = () => {
  return (
    <div>
          <Navbar />
          <Hero  heading="ABOUT"text=" im a friendly Front-End Developer. "/>
          <Footer />
    </div>
  )
}

export default About