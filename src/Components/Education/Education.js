import React, { Component } from 'react';
import './Education.css';
import './Queries.css';
import FaBook from 'react-icons/lib/fa/book';
import {myEducations} from '../../Constants';
import Bounce from 'react-reveal/Bounce';

class Education extends Component{
  render() {
    return (
      <div className="educationContainer">
      <Bounce top delay={100}>
        <div className="columnStyle">
          <p className="h1Style">Education</p>
          <p className="quotesStyle">
            <span>Pen is mightier than the sword</span>
          </p>
        </div>
      </Bounce>
      <div className="main">
        <ul className="education_tmtimeline">
        <Bounce left duration={500} delay={100}>
        {myEducations.map((myEducation) => (
          <li>
            <time className="education_tmtime"><span>{myEducation.startDate}</span> <span>to</span><span>{myEducation.endDate}</span></time>
            <div className="education_tmicon"><FaBook /></div>
            <div className="education_tmlabel">
            <Bounce left duration={1000} delay={200}>
              <div className="educationDetailsContainer">
                <img src={`/${myEducation.schoolLogo}.png`} alt="img21" className="education_schoolLogo"/>
                <div className="columnLeftStyle educationDetailsMargin">
                  <h2>{myEducation.school}</h2>
                  <span>{myEducation.score}</span>
                </div>
              </div>
            </Bounce>
            <Bounce left duration={1000} delay={400}>
              <p>{myEducation.description}</p>
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

export default Education;
