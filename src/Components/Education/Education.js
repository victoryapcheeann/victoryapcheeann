import React, { Component } from 'react';
import './Education.css';
import FaBook from 'react-icons/lib/fa/book';

const myEducations = [
  {school: 'National University of Singapore', schoolLogo: 'nus', score: 'Honours (Merit), GPA: 3.76/5.00',
  startDate: '2016', endDate: '2017',
  description: 'Graduate Diploma in System Analysis'},
  {school: 'University at Buffalo', schoolLogo: 'ub',
  score: 'Magna Cum Laude, GPA: 3.51/4.0',
  startDate: '2012', endDate: '2015',
  description: 'Major: Business Administration, Concentration: Financial Analysis'}
];

class Education extends Component{
  render() {
    return (
      <div className="educationContainer">
        <div className="columnStyle">
          <p className="h1Style">Education</p>
          <p className="quotesStyle">
            <span>Pen is mightier than the sword</span>
          </p>
        </div>
      <div className="main">
        <ul className="education_tmtimeline">
        {myEducations.map((myEducation) => (
          <li>
            <time className="education_tmtime"><span>{myEducation.startDate}</span> <span>to</span><span>{myEducation.endDate}</span></time>
            <div className="education_tmicon"><FaBook /></div>
            <div className="education_tmlabel">
            <div className="educationDetailsContainer">
              <img src={`/${myEducation.schoolLogo}.png`} alt="img21" className="education_schoolLogo"/>
              <div className="columnLeftStyle educationDetailsMargin">
                <h2>{myEducation.school}</h2>
                <span>{myEducation.score}</span>
              </div>
            </div>
              <p>{myEducation.description}</p>
            </div>
          </li>
        ))}
        </ul>
        </div>
      </div>
    );
  }
}

export default Education;
