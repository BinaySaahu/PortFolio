import React from 'react';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Work from '../components/Work'

function home() {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default home
