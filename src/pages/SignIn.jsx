import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from "../components/Header";

import { RxEnvelopeClosed } from "react-icons/rx";
import { MdLock } from "react-icons/md";
import Footer from '../components/Footer';



export default function SignIn() {
  return (
    <>
        <Header/>
        <Breadcrumbs name="Contact Us"/>
        <div className="sign-in">
            <div className="container">
                <form>
                    <div className="info">
                        <h2>Sign in Now</h2>
                        <p>Sign in by entering the information below.</p>
                    </div>
                    <div className="data">
                        <div className="email">
                        <div className="icon"><RxEnvelopeClosed/></div>
                        <input type="text" placeholder='Enter Your Email' />
                        </div>
                        <div className="password">
                        <div className="icon"><MdLock/></div>
                        <input type="text" placeholder='Enter Your Password' />
                        </div>
                    </div>
                    <div className="check-forgot">
                        <div className="left">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </div>
                        <p>Forgot password?</p>
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
