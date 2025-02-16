import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'


function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis sit nisi aperiam animi enim cumque maiores ducimus repellendus nemo magnam iste aut fugiat possimus, distinctio molestiae dicta reprehenderit voluptatibus dolor consequatur dolore cupiditate inventore? Ducimus odit praesentium eveniet sed dicta.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+880-161-082-1347</li>
                <li>jahidulhassa777@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
