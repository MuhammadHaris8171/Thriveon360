import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
// import { faUikit, faWebflow } from "@fortawesome/free-brands-svg-icons";
import "../assets/styles/CardPortfolio.css"

function CardPortfolio({image,heading,paragraph}) {
  return (
    <div className='CardPortfolio'>
        <img src={image} alt={image} />
        <h3 >{heading}</h3>
        <p>{paragraph}</p>
        <a href="#">View Details</a>
    </div>
  )
}

export default CardPortfolio