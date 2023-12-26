import React from 'react'

import Breadcrumbs from '../components/Breadcrumbs'
import Header from "../components/Header";

import { IoPersonOutline } from "react-icons/io5";
import { RxEnvelopeClosed } from "react-icons/rx";
import { MdLock } from "react-icons/md";
import Footer from '../components/Footer';

export default function SignUp() {
  return (
    <>
        <Header/>
        <Breadcrumbs name="Contact Us"/>
        <div className="sign-Up">
            <div className="container">
                <form>
                    <div className="info">
                        <h2>Sign Up Now</h2>
                        <p>Use the form below to create your account.</p>
                    </div>
                    <div className="data">
                        {/*  */}
                        <div className="name-email">
                            <div className="name">
                            <div className="icon"><IoPersonOutline/></div>
                            <input type="text" placeholder='Your name' />
                            </div>

                            <div className="email">
                            <div className="icon"><RxEnvelopeClosed/></div>
                            <input type="email" placeholder='Your Email' />
                            </div>
                        </div>
                        {/*  */}
                        <div className="password">
                        <div className="icon"><MdLock/></div>
                        <input type="text" placeholder='Your Password' />
                        </div>
                        {/*  */}
                        <div className="password">
                        <div className="icon"><MdLock/></div>
                        <input type="text" placeholder='Confirm Password' />
                        </div>
                        {/*  */}
                    </div>
                    <div className="info-btn">
                        <button className='sign'>Sign In Now</button>
                        <button className='create'>Create Acount</button>
                    </div>
                    <div className="sochial">
                        <div className="left">
                            Or Sign In With
                        </div>
                        <ul className="right">
                            <li>facebock</li>
                            <li>Twitter</li>
                            <li>Google</li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
    </>
  )
}
