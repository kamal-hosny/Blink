import React from 'react'
import { Link } from 'react-router-dom'
import iconImg from '../images/logo.png' 
export default function Icon() {
  return (
    <Link to="/">
      <div className="iconLogo">
        <img src={iconImg} alt="" />
        <p>Blink</p>
      </div>
    </Link>
  )
}
