import React from 'react'
import Icon from './Icon'

import { GoMail } from "react-icons/go";
import Up from './Up';

export default function Footer() {
  return (
    <>
    <div className='footer'>
        <div className="container">
            <div className="main">
                <Icon/>
                <p>Making the world a better place through constructing elegant hierarchies.</p>
                <div>
                    <span>© 2023 Blink.</span>
                    <span>Designed and Developed by GrayGrids</span>
                </div>
            </div>
            <div className="solutions">
                <p>Solutions</p>
                <ul>
                    <li>Insights</li>
                    <li>Commerce</li>
                    <li>Marketing</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div className="support">
            <p>support</p>
                <ul>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>API Status</li>
                </ul>
            </div>
            <div className="subscribe">
            <p>Subscribe</p>
                <ul>
                    <li>Subscribe to our newsletter for the latest updates</li>
                    <li className='input-li'>
                        <input placeholder="Email address" type="email" name="" id=""  />
                        <button><GoMail/></button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <Up/>
    </>
  )
}
