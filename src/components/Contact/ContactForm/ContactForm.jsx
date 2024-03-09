import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
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
