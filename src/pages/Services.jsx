import React from 'react'
import CardServices from '../components/CardServices'
import '../assets/styles/Services.css'
import { servicesData } from '../utils/data'

function Services() {
  return (
    <div className='p-12 pl-7'>
      <div className="Services">
        <h2>Our Services</h2>
        <p>
          At Thriveon 360, we offer a range of services to help you achieve your health and wellness goals.
          Our team of experts is dedicated to providing innovative solutions tailored to your needs.
        </p>
      </div>

      <div className="ServicesCards">
        {servicesData.map((service, index) => (
          <CardServices
            key={index}
            heading={service.heading}
            paragraph={service.paragraph}
            listItems={service.listItems}
          />
        ))}
      </div>
    </div>
  )
}

export default Services
