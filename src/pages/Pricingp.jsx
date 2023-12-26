import React, { useEffect } from 'react'
import Pricing from "../components/Pricing";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Pricingp() {
  useEffect(() => {
    document.title ='Pricing'
  }, [])
  return (
    <>
    <Header/>
    <Pricing/>
    <Footer/>
    </>
)}
