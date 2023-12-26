import React from 'react'

export default function MainTitle(props) {
  return (
    <div className='main-title'>
        <span>{props.span}</span>
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
    </div>
  )
}
