import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='error-page'>
      <span className="left"></span>
      <span className="righ"></span>
      <span>4<span>0</span>4</span>
      <h2>The page you were looking for doesn't exist anymore.</h2>
      <p>It might have been moved or deleted.</p>
      <Link to="/"><button>Back To Home</button></Link>
    </div>
  )
}
