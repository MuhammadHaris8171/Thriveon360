import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
// import { faUikit, faWebflow } from "@fortawesome/free-brands-svg-icons";
import "../assets/styles/Card.css"

function Card({icon,heading,paragraph}) {
  return (
    <div className='Card'>
        <FontAwesomeIcon icon={icon} className='Card_Icon'/>
        <h3 >{heading}</h3>
        <p>{paragraph}</p>
    </div>
  )
}

export default Card