import React from 'react'
import MainTitle from './MainTitle'

import img1 from '../images/team1.jpg'
import img2 from '../images/team2.jpg'
import img3 from '../images/team3.jpg'

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Team() {
    const teamCards = [
        {
            id: 1 ,
            name: "Liza Marko" ,
            job: "Graphics Designer",
            img: img1
        },
        {
            id: 2 ,
            name: "John Smith" ,
            job: "Digital Marketer",
            img: img2
        },
        {
            id: 3 ,
            name: "Amion Doe" ,
            job: "Web Developer",
            img: img3
        }
    ]
    let teamCardsList = teamCards.map((card)=>{
        return (
            <div className="card" key={card.id}>
            <div className="image">
                <img src={card.img} alt="" />
            </div>
            <div className="info">
                <div className="name">
                    <h3>{card.name}</h3>
                    <p>{card.job}</p>
                </div>
                <div className="social">
                    <span className='icon'><FaFacebook/></span>
                    <span className='icon'><FaXTwitter/></span>
                    <span className='icon'><FaLinkedin/></span>
                </div>
            </div>
        </div>
        )
    })
  return (
    <div className='team'>
        <MainTitle span="Team" h1="Meet Our Team" p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."/>
        <div className="container">
            <div className="cards">
                {teamCardsList}
            </div>
        </div>
    </div>
  )
}
