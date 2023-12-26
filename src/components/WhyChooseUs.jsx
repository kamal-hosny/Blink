import React from 'react'
import chooseUsImg from '../images/why-choose.png'
import { GoGear } from "react-icons/go";
import { BsLightningCharge } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

export default function WhyChooseUs() {
    const chooseUsCards =[
        {
            id:1 ,
            icon : <BsLightningCharge/>,
            title: "Fast Working Process" ,
        },
        {
            id:2 ,
            icon : <IoMdPerson/>,
            title: "Dedicated Team" ,
        },
        {
            id:3 ,
            icon : <GoGear/>,
            title: "24/7 Hours Support" ,
        },
    ]
    let chooseUsCardsList = chooseUsCards.map((card)=>{
        return(
            <div className="box" key={card.id}>
            <div className="icon">
            {card.icon}
            </div>
            <div className="info">
                <h3>{card.title}</h3>
                <p>Corporate headquarters is the part of a corporate structure that deals with important</p>
            </div>
        </div>
        )
    })
  return (
    <div className='why-choose-us'>
        <span className="left"></span>
        <span className="right"></span>
        <div className="container">
        <div className="info">
                    <h4>Why Choose Us</h4>
                    <h1>We Provide Best Digital Marketing Solutions</h1>
                    <p>Corporate headquarters is the part of a corporate structure that deals with important tasks such as strategic planning.</p>
                    <div className="boxs">
                        {chooseUsCardsList}
                    </div>
            </div>
            <div className="image">
                <img src={chooseUsImg} alt="" />
            </div>
        </div>
    </div>
  )
}
