import React, { Component } from 'react';
import './Experience.css';
import FaLaptop from 'react-icons/lib/fa/laptop';
import {myExperiences} from '../../Constants';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

class Experience extends Component{
  render() {
    return (
      <div className="experienceContainer">
      <Fade top delay={100}>
        <div className="columnStyle">
          <p className="h1Style">Experience</p>
          <p className="quotesStyle">
            <span>Choose a job you love and you will never have to work a day in your life.”</span>
          </p>
        </div>
      </Fade>
      <div className="main">
          <ul className="experience_tmtimeline">
        <Bounce left duration={1000} delay={100}>
        {myExperiences.map((myExperience) => (
          <li>
            <time className="experience_tmtime"><span>{myExperience.startDate}</span> <span>to</span><span>{myExperience.endDate}</span></time>
            <div className="experience_tmicon"><FaLaptop /></div>
            <div className="experience_tmlabel">
            <Bounce left duration={1000} delay={1000}>
              <div className="experienceDetailsContainer">
                <img src={`/${myExperience.companyLogo}.png`} alt="img21" className="experience_companyLogo"/>
                <div className="columnLeftStyle experienceDetailsMargin">
                  <h2>{myExperience.company}</h2>
                  <span>{myExperience.position}</span>
                </div>
              </div>
            </Bounce>
            <Bounce left duration={1000} delay={1000}>
              <p>
                {myExperience.techStack.map((techStack) => (
                <span className="techStackStyle techStackGradient">{techStack} </span>
                ))}
              </p>
            </Bounce>
            <Bounce left duration={1000} delay={1000}>
              {myExperience.description.map((description) => (
                <li className='listStyle'>{description}</li>
              ))}
            </Bounce>
            </div>
          </li>
        ))}
        </Bounce>
        </ul>
        </div>
      </div>
    );
  }
}

export default Experience;
