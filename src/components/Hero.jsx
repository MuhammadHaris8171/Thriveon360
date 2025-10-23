import React from 'react'
import Button from './Button'
import '../assets/styles/Hero.css'

function Hero() {
  
  return (
    <section className='Hero'>
        <div className="Hero1">
        <h1>Innovate.Create.Elevate</h1>
        <p>Thriveon 360 is a dynamic technology company that builds powerful soluttions.we also craft our own line of innovative health and wellness products,blending,cutting-edge tech with holistic well-being</p>
        <Button text={"Discover Out Services"} route={"services"} />
        </div>
    </section>
  )
}

export default Hero