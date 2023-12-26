import React from 'react'
import MainTitle from './MainTitle'

export default function About() {
  const aboutCards = [
    {
      id: 1 ,
      number:"100",
      sign:"%",
      title: "Satisfaction",
      color: "#fb6a82"
    },
    {
      id: 2 ,
      number:"120",
      sign:"K",
      title: "Happy Users",
      color: "#fd723b"
    },
    {
      id: 3 ,
      number:"135",
      sign:"K+",
      title: "Downloads",
      color: "#ffa842"
    },
    {
      id: 4 ,
      number:"165",
      sign:"$",
      title: "Buying Process",
      color: "#a074ff"
    },
  ]
  let aboutCardsList = aboutCards.map((card)=>{
    return(
      <div className="card" key={card.id}>
              <div>
              <span style={{background:card.color}}></span>
              <h5>{card.number}</h5>
              <h5>{card.sign}</h5>
              </div>
              <p>{card.title}</p>
            </div>
    )
  })
  return (
    <div className='about'>
        <MainTitle span="About" h1="6000+ Ratings Across Software Review" p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."/>
        <div className="container">
          <div className="cards">
              {aboutCardsList}
          </div>
        </div>
    </div>
  )
}
