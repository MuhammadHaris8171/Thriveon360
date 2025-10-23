import React from 'react'
import '../assets/styles/Contact.css'
import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className='Contact'>
      <div className="Contact1">
        <h2>Get In Touch</h2>
        <p className='mb-7'>We are here to help!Reach out with any questions or feedback.Our team will get back to you as soon as possible</p>
        <form action="" method="post" className='flex flex-col gap-5'>
          <input type="text" placeholder='Your Name' />
          <input type="text" placeholder='Your Email' />
          <input type="text" placeholder='Subject' />
          <textarea name="message" id="" placeholder='your Message'></textarea>
          <Button text="Send Message" />
        </form>

      </div>
      <div className="Contact2">
        <h3>Contact Information</h3>
        <ul>
          <li className='flex'><FontAwesomeIcon className='Contact_icon' icon={faEnvelope} /> <h4 className=''>Email<p>support@thriveon360.com</p></h4></li>
          <li><FontAwesomeIcon className='Contact_icon' icon={faPhone} /><h4>Phone<p>+1 (555) 123-4567</p></h4></li>
          <li><FontAwesomeIcon className='Contact_icon' icon={faLocationDot} /><h4>Address<p>123 Wellness way,Healthcare,CA 90210</p></h4></li>
        </ul>
        <h3>Follow</h3>
        <ul className='flex gap-3'>
          <li><FontAwesomeIcon className='Contact_icon' icon={faTwitter} /></li>
          <li><FontAwesomeIcon className='Contact_icon' icon={faFacebook} /></li>
          <li><FontAwesomeIcon className='Contact_icon' icon={faInstagram} /></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact