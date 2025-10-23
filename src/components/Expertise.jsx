import React from 'react'
import Card from './Card'
import { services } from '../utils/data';
import "../assets/styles/Expertise.css"

function Expertise() {
return (
    <div className="Expertise">
      <div className="Expertise1">
        <h2>Our Development Expertise</h2>
        <p>
          We offer a wide range of development services to bring your ideas to life,
          from custom software to engaging web experiences.
        </p>
      </div>

      <div className="ExpertiseCard">
        {services.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            heading={service.heading}
            paragraph={service.paragraph}
          />
        ))}
      </div>
    </div>
)
}

export default Expertise



