import React from 'react'
import "../assets/styles/Meet.css"
import Ceo from "../assets/images/Ceo.jpg"

function Meet() {
  return (
    <div className='meet'>
        <h2>Meet Our Ceo</h2>
        <div className="meet2">
            <img src={Ceo} alt="loading" />
            <div className="meet22">
                <h3>Muhammad Talha Taj</h3>
                <sup>Founder & CEO</sup>
                <p>With a passion for wellness and innovation,Dr.Finch leads Thriveon 360 with a vision to empower individuals on their health journey.His expertise in both technology and health sciences is this driving force behind our success</p>
                <a href="">Read Full Bio &#8594;</a>
            </div>
        </div>
    </div>
  )
}

export default Meet