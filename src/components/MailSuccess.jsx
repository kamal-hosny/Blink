import React from 'react'

import { GoGear } from "react-icons/go";
import { Link } from 'react-router-dom';

export default function MailSuccess() {
  return (
    <div className='mail-success'>
    <span className="left"></span>
    <span className="righ"></span>
    <div className="icon">
        <GoGear/>
    </div>
    <h2>Congratulations!</h2>
    <p>Your mail sent successfully, We will get back to you asap.</p>
    <Link to="/"><button>Back To Home</button></Link>
  </div>
  )
}
