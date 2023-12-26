import React from 'react'
import MainTitle from './MainTitle'


import { IoGridOutline } from "react-icons/io5";
import { BsEnvelopeFill } from "react-icons/bs";
import { MdHeadsetMic } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { BsCodeSlash } from "react-icons/bs";
export default function OurServices() {
  const ServicesCards = [
    {
      id: 1 ,
      icon: <IoGridOutline/> ,
      title:"Design & Vreatives"
    },
    {
      id: 2 ,
      icon: <BsEnvelopeFill/> ,
      title:"Email Marketing"
    },
    {
      id: 3 ,
      icon: <MdHeadsetMic/> ,
      title:"Customer Support"
    },
    {
      id: 4 ,
      icon: <IoPeople/> ,
      title:"Digital Marketing"
    },
    {
      id: 5 ,
      icon: <IoGridOutline/> ,
      title:"Graphics Design"
    },
    {
      id: 6 ,
      icon: <BsCodeSlash/> ,
      title:"Web Development"
    }
  ]
  const myServicesCardsList = ServicesCards.map((card)=>{
    return(
      <div className="card" key={card.id}>
      <div className="icon">
        {card.icon}
      </div>
      <h3>{card.title}</h3>
      <p>There are many variations passages of Lorem lpsum majority, some words don’t look believable.</p>
    </div>
    )
  })
  return (
    <div className='our-services'>
      <MainTitle span="Service We Provide" h1="Mix & Match Our Tools Plan That Fits" p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."/>
      <div className="container">
        <div className="cards">
          {myServicesCardsList}
        </div>
      </div>
    </div>
  )
}
