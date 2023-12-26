import React from 'react'
import managementImg from '../images/app-ss1.svg'

import { GoGear } from "react-icons/go";
import { BsSliders2 } from "react-icons/bs";
export default function Management() {
  return (
    <div className='management'>
        <div className="container">
          <div className="image">
            <img src={managementImg} alt="" />
          </div>
            <div className="info">
                <h4>Management & Analysis</h4>
                <h1>Solutions for every Single problems</h1>
                <p>Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium.</p>
                <div className="boxs">
                  {/* 1 */}
                  <div className="box">
                    <div className="icon"><GoGear/></div>
                    <div className="text">
                      <h3>Multiple Managers</h3>
                      <p>Quis autem vel eum reprehenderit</p>
                    </div>
                  </div>
                  {/* end 1 */}
                  {/* 2 */}
                  <div className="box">
                    <div className="icon"><BsSliders2/></div>
                    <div className="text">
                      <h3>Easy to Use</h3>
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
