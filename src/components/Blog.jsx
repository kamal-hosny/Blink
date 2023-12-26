import React from 'react'
import MainTitle from './MainTitle'

import blogImg1 from '../images/blog-1.jpg'
import blogImg2 from '../images/blog-3.jpg'
import blogImg3 from '../images/blog-2.jpg'

import { FaArrowRight } from "react-icons/fa6";
import Started from './Started'
export default function Blog() {

  const blogCards = [
    {
      id: 1 ,
      title: "Web Solution" ,
      info: "Make a better website solution for your product.",
      img : blogImg1
    },
    {
      id: 2 ,
      title: "UI Interface" ,
      info: "The Science of Color Contrast — An Expert Designer’s Guide",
      img : blogImg2
    },
    {
      id: 3 ,
      title: "Web Interface" ,
      info: "SEO Made Simple: A Step by Step Guide for 2020.",
      img : blogImg3
    },
    {
      id: 4 ,
      title: "Web Solution" ,
      info: "Make a better website solution for your product.",
      img : blogImg1
    },
    {
      id: 5 ,
      title: "UI Interface" ,
      info: "The Science of Color Contrast — An Expert Designer’s Guide",
      img : blogImg2
    },
    {
      id: 6 ,
      title: "Web Interface" ,
      info: "SEO Made Simple: A Step by Step Guide for 2020.",
      img : blogImg3
    },
  ]

  let blogCardsList = blogCards.map((card)=>{
    return(
      <div className="card" key={card.id}>
              <div className="image">
                <img src={card.img} alt="" />
              </div>
              <div className="info">
                <h5>{card.title}</h5>
                <h1>{card.info}</h1>
                <p>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</p>
                <h6>Read Blog<span><FaArrowRight/></span></h6>
              </div>
            </div>
    )
  })
  return (
    <div className='blog'>
        <MainTitle span="Blogs" h1="Our Latest News" p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."/>
        <div className="container">
          <div className="cards">
            {blogCardsList}
          </div>
        </div>
        <Started/>
    </div>
  )
}


