import React from 'react';
import { Fragment } from 'react';
import './SkillsInfoCard.css';

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>

      <div className="skills-info-content">
        {skills.map((item, index) => (
          <Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <p>{item.skill}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
