import React from 'react'
import { Link } from 'react-router-dom'
import DarkMode from './DarkMode'
export default function Sign() {
  return (
    <div className="sign">
      <DarkMode/>
        <Link to="/sign-in"><p className='sign-in'>sign In</p></Link>
        <Link to="/sign-up"><p className='sign-up'> sign Up</p></Link>
    </div>
  )
}
