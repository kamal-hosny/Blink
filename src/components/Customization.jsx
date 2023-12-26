import React from 'react'
import customizationImg from '../images/app-ss2.svg'
import { BsLightningCharge } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

export default function Customization() {
  return (
    <div className='customization'>
        <span className="left"></span>
        <span className="right"></span>
        <div className="container">
            <div className="info">
                    <h4>Use & Customization</h4>
                    <h1>Getting better way to Saas uses</h1>
                    <p>Sed ut perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam.</p>
                    <div className="box">
                        <div className="icon"><BsLightningCharge/></div>
                        <div className="text">
                            <h2>lightning-charge</h2>
                            <p>Learn More <span><FaArrowRight/></span> </p>
                        </div>
                    </div>
            </div>
            <div className="image">
                <img src={customizationImg} alt="" />
            </div>
        </div>
    </div>
  )
}
