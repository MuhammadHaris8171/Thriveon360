import React from 'react';
import "../assets/styles/CardPortfolio.css";

function CardPortfolio({ image, heading, paragraph, link }) {
  return (
    <div className='CardPortfolio'>
      <img src={image} alt={heading} />
      <h3>{heading}</h3>
      <p>{paragraph}</p>
      <a href={link}>View Details</a>
    </div>
  );
}

export default CardPortfolio;
