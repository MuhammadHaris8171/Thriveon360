import React from 'react'
import "../assets/styles/CardServices.css"

function CardServices({ heading, paragraph, listItems = [] }) {
  return (
    <div className='CardServices'>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CardServices
