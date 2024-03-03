import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img
            className="logo"
            src="./assets/images/logo_placeholder_image.png"
            alt="Logo Placeholder"
          />

          <ul>
            <li>
              <a
                href="#skills"
                onClick={(event) => scrollToSection(event, 'skills')}
                className="menu-item"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#skils"
                onClick={(event) => scrollToSection(event, 'skills')}
                className="menu-item"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(event) => scrollToSection(event, 'experience')}
                className="menu-item"
              >
                Work Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(event) => scrollToSection(event, 'contact')}
                className="menu-item"
              >
                Contact
              </a>
            </li>

            <button className="resume-btn" onClick={() => {}}>
              Resume
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
