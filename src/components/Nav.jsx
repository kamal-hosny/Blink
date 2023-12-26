import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
  <>
    <div className="nav">
      <ul>
        <Link to="/"><li className='nav-li'>Home</li></Link>
        <Link to="/about"><li className='nav-li'>About</li></Link>
        <Link to="/services"><li className='nav-li'>Services</li></Link>
        <Link to="/contact"><li className='nav-li'>Contact</li></Link>
        <li className=' nav-li btu-mega-menu'>Pages
          <ul className='mega-menu'>
            <Link to="/pricing"><li>Pricing</li></Link>
            <Link to="/sign-up"><li>Sign Up</li></Link>
            <Link to="/blog-grid"><li>Blog Grid</li></Link>
            <Link to="/mail-success"><li>Mail Success</li></Link>
            <Link to="/error-page"><li>404 Error</li></Link>
          </ul>
        </li>
      </ul>
    </div>

  </>
  )
}
