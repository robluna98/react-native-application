import React, { useRef } from 'react';
import './Project.css';
import ProjectCard from './ProjectCard/ProjectCard';
import { PROJECT_EXPERIENCE } from '../../utils/data';
import Slider from 'react-slick';

const ProjectExperience = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id="projects" className="project-container">
      <h5>Projects</h5>

      <div className="project-content">
        <div className="project-arrow-right" onClick={slideRight}>
          <span class="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="project-arrow-left" onClick={slideLeft}>
          <span class="material-symbols-outlined">chevron_left</span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {PROJECT_EXPERIENCE.map((item) => (
            <div>
              <ProjectCard key={item.title} details={item} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectExperience;
