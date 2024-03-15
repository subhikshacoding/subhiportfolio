import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Hero from '../component/hero'
import Form from '../component/form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero  heading = "CONTACT." text = " lets have a chat"/>
      <Form />
      <Footer/>
    </div>
  )
}

export default Contact
