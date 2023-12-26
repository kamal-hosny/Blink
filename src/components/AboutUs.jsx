import React from 'react'
import Img1 from '../images/about-image.png'
import { GoGear } from "react-icons/go";
import { BsSliders2 } from "react-icons/bs";

export default function AboutUs() {
  return (
    <div className='about-us'>
        <div className="container">
        <div className="image">
            <img src={Img1} alt="" />
          </div>
            <div className="info">
                <h4>About Us</h4>
                <h1>We Are The Leader in Digital Marketing</h1>
                <p>
                    <span>Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium.</span>
                    <span>
                    If a website accomplishes its goals and works well, then igood web design. This might mean different things for each website, but all good web design will have certain in common.
                    </span>
                  </p>
                <div className="boxs">
                  {/* 1 */}
                  <div className="box">
                    <div className="icon"><GoGear/></div>
                    <div className="text">
                      <h3>Amazing Partners</h3>
                      <p>Quis autem vel eum reprehenderit</p>
                    </div>
                  </div>
                  {/* end 1 */}
                  {/* 2 */}
                  <div className="box">
                    <div className="icon"><BsSliders2/></div>
                    <div className="text">
                      <h3>Finalize & Publish</h3>
                      <p>Quis autem vel eum reprehenderit</p>
                    </div>
                  </div>
                  {/* end 2 */}
                </div>
            </div>
        </div>
    </div>
  )
}
