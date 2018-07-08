import React, { Component } from 'react';
import './Education.css';
import FaBook from 'react-icons/lib/fa/book';
import {myEducations} from '../../Constants';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

class Education extends Component{
  render() {
    return (
      <div className="educationContainer">
      <Fade top delay={100}>
        <div className="columnStyle">
          <p className="h1Style">Education</p>
          <p className="quotesStyle">
            <span>Pen is mightier than the sword</span>
          </p>
        </div>
      </Fade>
      <div className="main">
        <ul className="education_tmtimeline">
        <Roll left duration={1000} delay={100}>
        {myEducations.map((myEducation) => (
          <li>
            <time className="education_tmtime"><span>{myEducation.startDate}</span> <span>to</span><span>{myEducation.endDate}</span></time>
            <div className="education_tmicon"><FaBook /></div>
            <div className="education_tmlabel">
            <Fade left duration={1000} delay={1000}>
              <div className="educationDetailsContainer">
                <img src={`/${myEducation.schoolLogo}.png`} alt="img21" className="education_schoolLogo"/>
                <div className="columnLeftStyle educationDetailsMargin">
                  <h2>{myEducation.school}</h2>
                  <span>{myEducation.score}</span>
                </div>
              </div>
            </Fade>
            <Fade left duration={1000} delay={1500}>
              <p>{myEducation.description}</p>
            </Fade>
            </div>
          </li>
        ))}
        </Roll>
        </ul>
        </div>
      </div>
    );
  }
}

export default Education;
