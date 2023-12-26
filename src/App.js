import React from "react";

import Home from "./pages/Home";
import ErrorPage from "./components/ErrorPage";
import MailSuccess from "./components/MailSuccess";

import {Route, Routes} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import Services from "./pages/Services";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BlogGrid from "./pages/BlogGrid";
import Pricingp from "./pages/Pricingp";


function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/blog-grid" element={<BlogGrid/>}/>
      <Route path="/pricing" element={<Pricingp/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/mail-success" element={<MailSuccess/>}/>
      <Route path="/error-page" element={<ErrorPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    

    </>
  );
}

export default App;
