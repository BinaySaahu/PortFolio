import React from 'react'
import '../components/HeroImagestyles2.css';
const HerosImage2 = (props) => {
  return (
    <div className='hero-img'>
        <div className="heading">
            <h4>{props.heading}</h4>
            <p>{props.para}</p>
        </div>
    </div>
  )
}

export default HerosImage2
