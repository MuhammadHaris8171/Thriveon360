import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../assets/styles/Button.css'
function Button({text,route}) {
  const navigate=useNavigate()
  return (
    <button className='custom-button' onClick={()=>navigate(`${route}`)}>
        {text}
    </button>
  )
}

export default Button