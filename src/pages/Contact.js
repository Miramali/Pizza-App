import React from 'react';
import Pic from '../assets/pizzaLeft.jpg';
import '../styles/contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${Pic})`}}></div>
        <div className='righttSide'>
            <h1 className='contactTitle'>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name'placeholder='Enter your full name' type='text' />

                <label htmlFor='email'>Email</label>
                <input name='email'placeholder='Enter your Email' type='email' />

                <label htmlFor='message'> Message</label>
                <textarea rows="6" placeholder='Type Your Message here...' name="message" required></textarea>
                <button type='submit'>Send Message</button>



            </form>
        </div>
      
    </div>
  )
}

export default Contact
