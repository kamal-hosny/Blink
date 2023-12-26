import React, { useEffect } from 'react'
import About from "../components/About";
import Blog from "../components/Blog";
import Pricing from "../components/Pricing";
import Customization from "../components/Customization";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Management from "../components/Management";
import Service from "../components/Service";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";


export default function Home() {
  useEffect(() => {
    document.title ='Blink'
  }, [])
  return (
    <>
    <Header/>
    <Landing/>
    <Service/>
    <Management/>
    <Customization/>
    <Pricing/>
    <About/>
    <Testimonials/>
    <Blog/>
    <Footer/>
    </>
)}
