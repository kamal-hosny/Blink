import React from 'react'
import shape from "../images/bg-shape.svg"
export default function Started() {
  return (
    <div className='started'>
        <div className="container">
            <img src={shape} alt="" />
            <h1>Ready to dive in?
                <br />
                Start your free trial today.
            </h1>
            <button>Get Started</button>
        </div>
    </div>
  )
}
