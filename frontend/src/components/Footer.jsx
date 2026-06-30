import React from 'react'
import { assets } from '../assets/assets'
import './Footer.css'
function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="logo"src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, perferendis ut impedit quaerat sit quam, consectetur modi doloremque optio, fugiat veritatis. Similique, nam?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h3>COLLEGE_CAMPUS</h3>
            <ul><li>HOME</li>
            <li>ABOUT US</li>
            <li>PRIVACY POLICY</li></ul>
        </div>
        <div className="footer-content-right">
            <h3>GET IN TOUCH</h3>
            <ul>
                <li>+91-999-232-3443</li>
                <li>contact@college.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @college.com - All Right reserved.</p>
    </div>
  )
}

export default Footer
