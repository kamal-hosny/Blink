import React, { useEffect } from 'react'
import AboutUs from '../components/AboutUs'
import About1 from '../components/About'

import Breadcrumbs from '../components/Breadcrumbs'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import Team from '../components/Team'

export default function About() {
  useEffect(() => {
    document.title = 'About'
  }, [])
  return (
    <>
    <Header/>
    <Breadcrumbs name="About Us"/>
    <AboutUs/>
    <WhyChooseUs/>
    <About1/>
    <Testimonials/>
    <Team/>
    {/* <Footer/> */}
    </>
  )
}
