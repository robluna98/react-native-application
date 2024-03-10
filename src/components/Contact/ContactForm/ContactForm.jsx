import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const notify = (message, isError = false) => {
    if (isError) {
      toast.error(message, {
        draggable: true,
        theme: 'colored',
      });
    } else {
      toast.success(message, {
        draggable: true,
        theme: 'colored',
      });
    }
  };

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
          notify('Email sent successfully.');
          form.current.reset();
        },
        (error) => {
          console.log(error);
          notify(`Failed to send email: ' ${error}`, true);
          form.current.reset();
        },
      );
  };

  return (
    <div className="contact-form-content">
      <ToastContainer position="top-right" autoClose={5000} />
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
