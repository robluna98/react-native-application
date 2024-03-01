import React from 'react';
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
            {/* Insert Tech Icon Here */}
            <img src="./assets/images/react.png" alt="tech icon" />
          </div>
          {/* Insert Hero Image Here (Profile picture most likely) */}
          <img src="./assets/images/profile.png" alt="hero" />
        </div>

        <div>
          <div className="tech-icon">
            {/* Insert Tech Icon Here */}
            <img src="./assets/images/react.png" alt="tech icon" />
          </div>
          <div className="tech-icon">
            {/* Insert Tech Icon Here */}
            <img src="./assets/images/react.png" alt="tech icon" />
          </div>
          <div className="tech-icon">
            {/* Insert Tech Icon Here */}
            <img src="./assets/images/react.png" alt="tech icon" />
          </div>
          <div className="tech-icon">
            {/* Insert Tech Icon Here */}
            <img src="./assets/images/react.png" alt="tech icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
