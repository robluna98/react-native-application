import React from 'react';
import './Contact.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';
// import { CiLinkedin } from 'react-icons/ci';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            link="https://www.linkedin.com/in/robert-luna-279982151/"
            icon={<FaLinkedin />}
            text="LinkedIn: Robert Luna"
          />
          <ContactInfoCard
            link="https://github.com/robluna98"
            icon={<FaGithub />}
            text="GitHub: Robert.Dev"
          />
        </div>

        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
