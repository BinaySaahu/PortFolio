import "../components/HeroImageStyles.css";
import React from 'react'
import introImg from '../assets/intro-bg.jpg';
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="introImg" />
      </div>
      <div className="contents">
        <p>Hi,I am a freelancer</p>
        <h1>React Developer</h1>
        <div>
            <Link to="/Project" className="btn">Projects</Link>
            <Link to="/Contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
