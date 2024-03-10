import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';
import { useState } from 'react';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <h2>Robert.dev</h2>

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
                href="#projects"
                onClick={(event) => scrollToSection(event, 'projects')}
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

          <button className="menu-btn" onClick={toggleMenu}>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <span
              className={'material-symbols-outlined'}
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
