import React from "react";
import emailjs from '@emailjs/browser';
import './Contact.css'
import { useRef } from 'react';



function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_9vv00dm', 'template_xh8bbrf', form.current, 'PMOhg-FNFQLZkVJC4')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    };

  return (
    <div id="contact-me">
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <h1 id="contact-me-h1">Contact Me</h1>
            {/* <label class="label">Name</label> */}
            <input required placeholder="Your name" class="input" type="text" name="user_name" />
            {/* <label  class="label">Email</label> */}
            <input required placeholder="Your email" class="input" type="email" name="user_email" />
            {/* <label  class="label">Message</label> */}
            <textarea required placeholder="Your Message..." id="text-area" name="message" />
            <input id="button-send" type="submit" value="Send" />
        </form>
    </div>
  )
}

export default Contact