import React from 'react'
import '../assets/styles/Footer.css'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='Footer'>
        <ul>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms of Service</a></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
        <p>© 2024 Thriveon 360.All rights reserved.</p>
    </div>
  )
}

export default Footer