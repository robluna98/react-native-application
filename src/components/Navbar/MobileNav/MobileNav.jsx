import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/logo.svg" alt="logo" />

          <ul>
            <li>
              {/* <a className="menu-item">Home</a> */}
              <button className="menu-item">Home</button>
            </li>
            <li>
              {/* <a className="menu-item">Skills</a> */}
              <button className="menu-item">Skills</button>
            </li>
            <li>
              {/* <a className="menu-item">Work Experience</a> */}
              <button className="menu-item">Work Experience</button>
            </li>
            <li>
              {/* <a className="menu-item">Contact</a> */}
              <button className="menu-item">Contact</button>
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
