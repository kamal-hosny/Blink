import React from 'react'
import Typed from "react-typed";
import img1 from '../images/app.svg'
export default function Landing() {
  return (
    <div className="landing">
      <span className='blue-circle'></span>
      <span className='oringe-circle'></span>
      <span className='L-circle-3'></span>
        <div className="container">
        <span className='L-circle-1'></span>
      <span className='L-circle-2'></span>
            <div className="info-text">
                <div className="info-text-head">
                  <h3>A Complete Template For SasS And Startup</h3>
                  <h2><Typed 
                  strings={["Websites"]}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                  /></h2>
                </div>
                <p>Improve your daily UX work and create wireframes and diagrams, prototypes, handoff documentation</p>
                <button>Start 7 Day Free Trial</button>
            </div>
            <div className="info-img">
                <img src={img1} alt="" />
            </div>
        </div>
    </div>
  )
}
