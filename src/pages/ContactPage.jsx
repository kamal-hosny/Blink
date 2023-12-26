import React, { useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact'
  }, [])
  return (
    <>
    <Header/>
    <Breadcrumbs name="Contact Us"/>
    <ContactUs/>
    <Footer/>
    </>
  )
}
