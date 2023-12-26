import React, { useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import OurServices from '../components/OurServices'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Services() {
    useEffect(() => {
      document.title = 'Services'
    }, [])
  return (
    <>
    <Header/>
    <Breadcrumbs name="Our Services"/>
    <OurServices/>
    <Footer/>
    </>
  )
}
