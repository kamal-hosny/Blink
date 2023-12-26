import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav2(props) {
return (
    <div className= {props.how === true ? 'nav-2' : 'nav-2 nav-2-out'}>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/services"><li>Services</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <li className='btu-mega-menu'>Pages
                <ul className='mega-menu'>
                    <Link to="/pricing"><li>Pricing</li></Link>
                    <Link to="/sign-in"><li>Sign In</li></Link>
                    <Link to="/sign-up"><li>Sign Up</li></Link>
                    <Link to="/blog-grid"><li>Blog Grid</li></Link>
                    <Link to="/mail-success"><li>Mail Success</li></Link>
                    <Link to="/error-page"><li>404 Error</li></Link>
                </ul>
            </li>
        </ul>
    </div>
)
}
