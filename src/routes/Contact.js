import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HerosImage2 from '../components/HerosImage2';
import Form from '../components/Form'
const contact = () => {
  return (
    <div>
      <Navbar/>
      <HerosImage2 heading = "CONTACT." para = "Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default contact
