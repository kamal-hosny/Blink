import React from 'react'

export default function ContactUs() {
  return (
    <div className='contact-us'>
        <div className="container">
            <div className="contact">
                <div className="name">
                    <label>Your name</label>
                    <input type="text" placeholder='Enter Your Name'/>
                </div>
                <div className="subject">
                    <label>Your Subject</label>
                    <input type="text" placeholder='Enter Your Subject'/>
                </div>
                <div className="address">
                    <label>Email address</label>
                    <input type="text" placeholder='Enter Your Email'/>
                </div>
                <div className="message">
                    <label>Email address</label>
                    <textarea name="" id="" placeholder='Write Your Message Here'></textarea>
                </div>
                <button>Submit Ticket</button>
            </div>









            <div className="info-contact">
                <h1>We are always openfor help you.</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                <ul className='call-us'>
                    <h3>Call us</h3>
                    <li>+1-492-4918-395</li>
                    <li>+14-394-409-591</li>
                </ul>
                <ul className='email-us'>
                    <h3>Email us</h3>
                    <li>info@mail.com</li>
                    <li>support@mail.com</li>
                </ul>
                <ul className='our-address'>
                    <h3>Our Address</h3>
                    <li>34 Madison Street,</li>
                    <li>NY, USA 10005</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
