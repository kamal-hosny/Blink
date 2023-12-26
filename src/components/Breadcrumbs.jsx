import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Breadcrumbs(props) {
  return (
    <div className='breadcrumbs'>
        <div className="container">
            <div className="left">{props.name}</div>
            <div className="right">
                <Link to="/">
                  <div className="home">
                      <FaHome/>
                      Home
                  </div>
                </Link>
                <div className="icon"><FaAngleRight/></div>
                <p>{props.name}</p>
            </div>
        </div>
    </div>
  )
}
