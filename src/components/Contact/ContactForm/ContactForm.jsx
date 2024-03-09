import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_MAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-form-content">
      <form ref={form}>
        <div className="name-container">
          <input type="text" name="user_name" placeholder="Name" />
        </div>

        <input type="text" name="user_email" placeholder="Email" />
        <textarea type="text" name="message" placeholder="Message" rows={3} />

        <button onClick={sendEmail}>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
