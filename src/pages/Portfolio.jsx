import React from 'react'
import CardPortfolio from '../components/CardPortfolio'
import '../assets/styles/Portfolio.css'
import { healthWellnessProducts, clientProjects } from '../utils/data'

function Portfolio() {
  return (
    <div className='Portfolio'>
      <div className="Portfolio1">
        <h1>Our Portfolio</h1>
        <p>
          Explore our diverse range of projects, from health and wellness products 
          to innovative solutions for various industries. Each project showcases 
          our commitment to quality and client success.
        </p>
      </div>

      <h2 className='PortfolioHeading'>Health & Wellness Products</h2>
      <div className="HealthCard">
        {healthWellnessProducts.map((item, index) => (
          <CardPortfolio
            key={index}
            image={item.image}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>

      {/* <h2 className='ClientHeading'>Client Projects</h2>
      <div className="ClientCard">
        {clientProjects.map((item, index) => (
          <CardPortfolio
            key={index}
            image={item.image}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div> */}
    </div>
  )
}

export default Portfolio
