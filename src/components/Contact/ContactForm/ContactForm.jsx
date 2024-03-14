import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0 && buttonDisabled) {
        setTimer((prevTimer) => prevTimer - 1);
      } else {
        setButtonDisabled(false);
        setTimer(30);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, buttonDisabled]);

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

  const validateInputs = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Provide a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!message.trim()) {
      setMessageError('Message is required');
      isValid = false;
    } else {
      setMessageError('');
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      setButtonDisabled(true);
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
    }
  };

  return (
    <div className="contact-form-content">
      <ToastContainer position="top-right" autoClose={5000} />
      <form id="form" ref={form}>
        <div className={`input-control ${nameError ? 'error' : 'success'}`}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="error">{nameError}</div>
        </div>

        <div className={`input-control ${emailError ? 'error' : 'success'}`}>
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="error">{emailError}</div>
        </div>

        <div className={`input-control ${messageError ? 'error' : 'success'}`}>
          <input
            type="text"
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="error">{messageError}</div>
        </div>
        <button type="submit" onClick={sendEmail} disabled={buttonDisabled}>
          {buttonDisabled ? `Please wait ${timer} seconds` : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
