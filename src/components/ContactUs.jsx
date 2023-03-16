import React, { useRef } from 'react';
import contactlogo from "../images/contact-us.png";
import './contactus.css';
import emailjs from '@emailjs/browser';

const ContactUs = () =>{

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_yyx4xyd', 'template_j5w2m25', form.current, '5V1-1q9JwtLgoNeM_')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div className="contact-main">

            <img src={contactlogo} alt="" />

            <h1>Feel Free To Contact !!</h1>
            
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='set-1' placeholder='Name' />
                <input type="email" name="user_email" className='set-1' placeholder='Email' />
                <textarea name="message" className='set-2' placeholder='Message' />
                <input type="submit" className='set-3' value="Submit" />
                </form>

        </div>
    );
};

export default ContactUs;