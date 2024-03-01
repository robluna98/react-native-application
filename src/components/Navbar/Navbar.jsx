import React from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img
            className="logo"
            src="./assets/images/logo_placeholder_image.png"
            alt="Logo Placeholder"
          />

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

          <button class="menu-btn" onClick={toggleMenu}>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <span
              class={'material-symbols-outlined'}
              style={{ fontSize: '1.8rem' }}
            >
              {openMenu ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
