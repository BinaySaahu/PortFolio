import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import '../components/Footerstyle.css'
const footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <div><FaHome size={20} style={{color:"white",marginRight:"2rem"}}/></div>
                    <div>
                        <p>123 Housing society</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
                        8018290546
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <div><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/></div>
                        <div>binaysahu364@gmail.com.</div>
                    </h4>

                </div>
            </div>
            <div className="right">
                <h4>About this company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa explicabo vel quisquam voluptatum quaerat, beatae perspiciatis voluptas deleniti reiciendis illo?</p>
                <div className="social">
                    <FaFacebook size={20} style={{color:"white",marginRight:"2rem"}}/>
                    <FaInstagram size={20} style={{color:"white",marginRight:"2rem"}}/>
                    <FaGithub size={20} style={{color:"white",marginRight:"2rem"}}/>
                    <FaLinkedin size={20} style={{color:"white",marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer
