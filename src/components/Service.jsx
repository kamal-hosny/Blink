import React from 'react'
import MainTitle from './MainTitle'

import { TfiApple } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { PiHandPointing } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";

export default function Service() {
  const serviceCards= [
  {
    id: 1 , 
    icon: <TfiApple className='card-icon' style={{background: "#3080e3"}}/> ,
    title: "Mobile auto layout",
    description: "We have auto mobile layout that help you faster UI and wireframe design.",
    color: "#3080e3"
  },
  {
    id: 2, 
    icon: <CiHeart className='card-icon' style={{background: "#fd723b"}}/> ,
    title: "2500+ Free icons",
    description: "2500+ free vector svg icon for mobile & desktop, every icon resized 24*24.",
    color: "#fd723b"
  },
  {
    id: 3, 
    icon: <PiHandPointing className='card-icon' style={{background: "#ffa842"}}/> ,
    title: "Easy to use components",
    description: "Hundreds of vector cards, arrows and elements for creating quick sitemaps.",
    color: "#ffa842"
  }
]
  const myserviceCardsList = serviceCards.map((card)=>{
    return (
      <div className="card" key={card.id}>
      {card.icon}
      <h2>{card.title}</h2>
      <h5>{card.description}</h5>
      <p style={{color: card.color}}>Learn More <span> <FaArrowRight/> </span> </p>
    </div>
    )
  })


  return (
    <>
    <div className="service">
        <MainTitle span="Service We Provide" h1="Mix & Match Our Tools Plan That Fits" p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."/>
        <div className="container">
            <div className="cards">
              {myserviceCardsList}
            </div>

        </div>
    </div>
    </>
  )
}
