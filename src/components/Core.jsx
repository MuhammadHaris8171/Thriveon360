import React from 'react'
import Card from './Card'
import '../assets/styles/Core.css'
import { cores } from '../utils/data';

function Core() {
  return (
    <div className='core'>
      <h2 className='coreHeading'>Our Core Values</h2>
      <p className='coreParagraph'>The principles that guide our work and define our culture.</p>
      <div className="coreCardContainer">
        <div className="ExpertiseCard">
        {cores.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            heading={service.heading}
            paragraph={service.paragraph}
          />
        ))}
      </div>
      </div>
    </div>
  )
}

export default Core