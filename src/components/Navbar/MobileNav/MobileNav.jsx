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

            <a
              href="https://docs.google.com/document/d/1d65U6SAihLcH5hOH9ucrjU8FyVF-ozXI/edit?usp=sharing&ouid=115219327091758170934&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              <button className="resume-btn">Resume</button>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
