import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HerosImage2 from '../components/HerosImage2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HerosImage2 heading = "ABOUT US." para = ""/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
