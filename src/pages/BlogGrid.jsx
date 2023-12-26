import React, { useEffect } from 'react'

import BlogGridsC from '../components/BlogGridsC';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import Header from '../components/Header';



export default function BlogGrid() {
  useEffect(() => {
    document.title = 'Blog Grids'
  }, [])
  return (
    <>
    <Header/>
    <Breadcrumbs name="Our Services"/>
    <BlogGridsC/>
    <Footer/>
    </>
  )
}
