import React from 'react';
import './Contact.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assets/images/react_logo.png"
            text="placeholder@example.com"
          />
          <ContactInfoCard
            iconUrl="./assets/images/react_logo.png"
            text="placeholder@example.com"
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
