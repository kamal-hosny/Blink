import React from 'react'
import MainTitle from './MainTitle'
import ImgSwiper from '../images/swiper img.png'

import Card1 from '../images/testi-1.png'
import Card2 from '../images/testi-2.png'
import Card3 from '../images/testi-3.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


export default function Testimonials() {
  // 1
  const testimonialCards =[
    {
      id:1 ,
      name: "Jems Gilario" ,
      job: "Graphics Designer" ,
      img: Card1 ,
    },
    {
      id:2 ,
      name: "Somalia D Silva" ,
      job: "Business Manager" ,
      img: Card2 ,
    },
    {
      id:3 ,
      name: "David Warner" ,
      job: "Web Developer" ,
      img: Card3 ,
    },
    {
      id:4 ,
      name: "Jems Gilario" ,
      job: "Graphics Designer" ,
      img: Card1 ,
    },
    {
      id:5 ,
      name: "Somalia D Silva" ,
      job: "Business Manager" ,
      img: Card2 ,
    },
    {
      id:6 ,
      name: "David Warner" ,
      job: "Web Developer" ,
      img: Card3 ,
    },
  ]
  let testimonialCardsList = testimonialCards.map((card)=>{
    return(
      <SwiperSlide className='swiperSlide' key={card.id}>
        <div className="card">
          <span></span>
          <img src={ImgSwiper} alt="" />
          <p>On the other hand denoun with righteous and disliks men who are beguiled demorae momentc blinded by desire that can</p>
          <div className="person">
            <img src={card.img} alt="" />
            <div className="text">
              <h4>{card.name}</h4>
              <p>{card.job}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    )
  })
  // 


  

  return (
    <div className='testimonials'>
        <MainTitle span="Customer Reviews" h1="Our Testimonials" p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."/>
        <div className="container">


        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
          {testimonialCardsList}
        </Swiper> 

          


        </div>
    </div>
  )
}


<Swiper
pagination={{
  dynamicBullets: true,
}}
modules={[Pagination]}
className="mySwiper"
>
<SwiperSlide>Slide 1</SwiperSlide>
<SwiperSlide>Slide 2</SwiperSlide>
<SwiperSlide>Slide 3</SwiperSlide>
<SwiperSlide>Slide 4</SwiperSlide>
<SwiperSlide>Slide 5</SwiperSlide>
<SwiperSlide>Slide 6</SwiperSlide>
<SwiperSlide>Slide 7</SwiperSlide>
<SwiperSlide>Slide 8</SwiperSlide>
<SwiperSlide>Slide 9</SwiperSlide>
</Swiper> 