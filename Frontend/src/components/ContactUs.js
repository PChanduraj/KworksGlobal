import React from 'react'
import './Contact.css'
import co from '../image/contact.png'
import { Helmet } from 'react-helmet';
const ContactUs = () => {
  return (
    <>
     <Helmet>
        <title>Finteam - Contact</title>
        <meta name="description" content="Talk to us to see what running a business is like with FinTeam One on your side. Drop us email at : info@finTeam.one" />
        <meta name="robots" content="contact" />
        <link rel="canonical" href="/contact-us" />
    </Helmet>
    <div className='wrapper'>
      <div className='div1'>
        {/* <div className='icon'><img src={co}></img></div> */}
        <h1 className='hero-head'>Book a Free Consultation</h1>
        <p className='hero-para'>Talk to us to see what running a business is like with FinTeam One on your side.</p>
        <p className='drop'>Drop us email at :<b> info@finTeam.one</b></p>
      </div>
      <div className='div2'>
      
        <form action="https://formspree.io/f/mayrqkzz" method="POST">
         
        <input
          type="text"
          id="name"
          placeholder='Name'
          name="name"
          className='nameinput'
          required
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          required
        />

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder='Contact Number'
          required
        />
  <input
          type="text"
          id="compnayname"
          placeholder='Company Name (optional)'
          name="name"
          className=''
          required
        />
       
        <textarea
          id="message"
          name="message"
          placeholder='Message'
          rows="4"
          required
        ></textarea>

        <button type="submit">Submit</button>
            </form>
        </div>
     
    </div>
    </>
  )
}

export default ContactUs
