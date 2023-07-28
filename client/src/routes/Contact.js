import React from 'react'
import '../styles/Contact.css'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
    
    
    <div className="row contact-section">
        <div className=" col-md-6 col-12 contact-info">
        <h1 className='contacthead mb-3'>CONTACT US</h1>
            <div> <i className="fa-solid fa-location-dot"></i> Teliarganj, Prayagraj, Uttar Pradesh</div>
            <div> <i className="fa-solid fa-envelope"></i> curestreet@gmail.com</div>
            <div> <i className="fa-solid fa-phone"></i> +91-9732157821</div>
            <div> <i className="fa-solid fa-clock"></i> Mon - Sat 10:00 AM to 8:00PM</div>
        </div>

        <div className=" col-md-6 col-12 contact-form mt-5 mx-4 p-4">
        
        <form className="contact" action="" method="post">
            <input type="text" name="name" className="text-box" placeholder="Your name" required/>
            <input type="email" name="email" className="text-box" placeholder="Your email" required/>
            <textarea name="message" rows="5" placeholder="Your message" required></textarea>
            <input type="submit" name="submit" className="send-btn mt-2 mb-3 px-4 py-2" value="Send"/>
        </form>
        </div>

    </div>

    <Footer/>
    
    </>
  )
}
