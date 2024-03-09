import React from 'react';
import './ContactInfoCard.css';

const ContactInfoCard = ({ link, icon, text }) => {
  return (
    <a
      href={link}
      className="contact-details-link"
      target="_blank"
      rel="noreferrer"
    >
      <div className="contact-details-card">
        <div className="icon">{icon}</div>
        <p>{text}</p>
      </div>
    </a>
  );
};

export default ContactInfoCard;
