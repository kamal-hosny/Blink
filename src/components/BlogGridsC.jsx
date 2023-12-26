import React from 'react'

import { FaArrowRight } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import blogCard1 from '../images/blog-1.jpg'
import blogCard2 from '../images/blog-2.jpg'
import blogCard3 from '../images/blog-3.jpg'
import blogCard4 from '../images/blog-4.jpg'
import blogCard5 from '../images/blog-5.jpg'
import blogCard6 from '../images/blog-6.jpg'

import sidebar1 from '../images/blog-sidebar-1.jpg'
import sidebar2 from '../images/blog-sidebar-2.jpg'
import sidebar3 from '../images/blog-sidebar-3.jpg'

import { FaCalendar } from "react-icons/fa";

export default function BlogGridsC() {
    const blogCards = [
        {
            id: 1,
            title: "Web Solution" ,
            p: "Make a better website solution for your product." ,
            img: blogCard1 ,
        },
        {
            id: 2,
            title: "UI Interface" ,
            p: "The Science of Color Contrast — An Expert Designer’s Guide" ,
            img: blogCard2 ,
        },
        {
            id: 3,
            title: "Web Interface" ,
            p: "SEO Made Simple: A Step by Step Guide for 2020." ,
            img: blogCard3 ,
        },
        {
            id: 4,
            title: "Web Interface" ,
            p: "SEO Made Simple: A Step by Step Guide for 2020." ,
            img: blogCard4 ,
        },
        {
            id: 5,
            title: "UI Interface" ,
            p: "The Science of Color Contrast — An Expert Designer’s Guide" ,
            img: blogCard5 ,
        },
        {
            id: 6,
            title: "Web Solution" ,
            p: "Make a better website solution for your product." ,
            img: blogCard6 ,
        },
    ]

    let blogCardsList = blogCards.map((card)=> {
        return(
            <div className="card" key={card.id}>
            <div className="image">
                <img src={card.img} alt="" />
            </div>
            <div className="info">
                <h4>{card.title}</h4>
                <h1>{card.p}</h1>
                <p>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</p>
                <div className="info-end">
                    <p>Read Blog</p>
                    <span className="icon"><FaArrowRight/></span>
                </div>
            </div>
        </div>
        )
    })

    const FeaturedCards =[
        {
            id: 1 ,
            title: "What information is needed for shipping?" ,
            date: "05th Nov 2023", 
            img: sidebar1
        },
        {
            id: 2 ,
            title: "Interesting fact about gaming consoles" ,
            date: "24th March 2023", 
            img: sidebar2
        },
        {
            id: 3 ,
            title: "Electronics, instrumentation & control engineering" ,
            date: "30th Jan 2023", 
            img: sidebar3
        },
]

    let FeaturedCardsList = FeaturedCards.map((card)=>{
        return (
            <div className="card" key={card.id}>
            <div className="image">
                <img src={card.img} alt="" />
            </div>
            <div className="info">
                <h5>{card.title}</h5>
                <p>
                    <div className="icon">
                    <FaCalendar/>
                    </div>
                    <span>{card.date}</span>
                </p>
            </div>
        </div>
        )
    })

    return (
    <div className='blog-grid'>
    <div className="container">
        <div className="blog-grid-c1">
            <div className="left">
                <div className="cards">
                    {blogCardsList}
                </div>
            </div>
            <div className="right">

                <div className="search">
                    <h1>Search This Site</h1>
                    <form>
                        <input type="text" placeholder='Search Here...' />
                        <div className="icon"><FaMagnifyingGlass/></div>
                    </form>
                </div>


                <div className="featured">
                    <h1>Featured Posts</h1>
                    <div className="cards">
                        {FeaturedCardsList}
                    </div>
                </div>
                <div className="categories">
                    <h1>Top Categories</h1>
                    <ul>
                        <li>
                            <span>Editor's Choice</span> <span>(24)</span>
                        </li>
                        <li>
                            <span>Electronics</span> <span>(12)</span>
                        </li>
                        <li>
                            <span>Industrial Design</span> <span>(5)</span>
                        </li>
                        <li>
                            <span>Secure Payments Online</span> <span>(15)</span>
                        </li>
                        <li>
                            <span>Online Shopping</span> <span>(7)</span>
                        </li>
                    </ul>
                </div>
                <div className="popular">
                    <h1>Popular Tags</h1>
                    <ul>
                        <li>#Electronics</li>
                        <li>#Cpu</li>
                        <li>#Gadgets</li>
                        <li>#Wearables</li>
                        <li>#Wearables</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="blog-grid-c2">
            <ul>
                <li>Prev</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>Next</li>
            </ul>
        </div>
    </div>
</div>
  )
}
