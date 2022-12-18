import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HerosImage2 from '../components/HerosImage2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';
const project = () => {
  return (
    <div>
      <Navbar/>
      <HerosImage2 heading = "PROJECTS." para = "Some of my most recent works!!"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default project
