import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
          tellus at risus hendrerit mollis. Morbi ac mollis nibh, facilisis
          aliquet sapien. Aliquam eleifend at orci sed sodales.
        </p>
      </div>

      <div className="hero-image">
        <div>
          <div className="tech-icon">
            <a href="https://www.ansible.com/" target="_blank" rel="noreferrer">
              <img
                src="./assets/images/ansible_logo.png"
                alt="Red Hat Ansible Logo"
              />
            </a>
          </div>
          <img src="./assets/images/profile.png" alt="hero" />
        </div>

        <div>
          <div className="tech-icon">
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <img src="./assets/images/react_logo.png" alt="React Logo" />
            </a>
          </div>
          <div className="tech-icon">
            <a
              href="https://www.javascript.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./assets/images/javascript_logo.png"
                alt="JavaScript Logo"
              />
            </a>
          </div>
          <div className="tech-icon">
            <a href="https://www.python.org/" target="_blank" rel="noreferrer">
              <img src="./assets/images/python_logo.png" alt="Python Logo" />
            </a>
          </div>
          <div className="tech-icon">
            <a
              href="https://dotnet.microsoft.com/en-us/languages/csharp"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./assets/images/csharp_logo.png" alt="C# Logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
