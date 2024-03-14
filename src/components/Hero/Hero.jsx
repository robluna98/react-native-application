import './Hero.css';
import TypeWriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Robert Luna</h2>
        <TypeWriter
          className="text"
          options={{
            autoStart: true,
            loop: true,
            strings: ['Site Reliability Engineer', 'Full Stack Developer'],
          }}
          onInit={(typewriter) => {
            typewriter.pauseFor(2500).deleteAll().start();
          }}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
          tellus at risus hendrerit mollis. Morbi ac mollis nibh, facilisis
          aliquet sapien. Aliquam eleifend at orci sed sodales.
        </p>
      </div>

      <div className="hero-image">
        <div>
          <img src="./assets/images/profile.png" alt="hero" />
        </div>
        <div>
          <div className="tech-icon">
            <a href="https://www.ansible.com/" target="_blank" rel="noreferrer">
              <img
                src="./assets/images/ansible_logo.png"
                alt="Red Hat Ansible Logo"
              />
            </a>
          </div>
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
