import React, { Component } from 'react';
import './Education.css';
import FaDatabase from 'react-icons/lib/fa/database';

const myEducations = [
  {school: 'ABC', startDate: 'Feb 2018', endDate: 'June 2019', description: 'inter purslane courgette pumpkin quandong komatsuna fenne'},
  {school: 'EDF', startDate: 'Feb 2018', endDate: 'June 2019', description: 'inter purslane courgette pumpkin quandong komatsuna fenne'}
];

class Education extends Component{
  render() {
    return (
      <div className="educationContainer">
        <div className="headerContainer">
          <p className="headerStyle">Education</p>
          <p className="quotesStyle">
            <span>Pen is mightier than the sword</span>
          </p>
        </div>
      <div className="main">
        <ul className="education_tmtimeline">
        {myEducations.map((myEducation) => (
          <li>
            <time className="education_tmtime"><span>{myEducation.startDate}</span> <span>to</span><span>{myEducation.endDate}</span></time>
            <div className="education_tmicon"><FaDatabase /></div>
            <div className="education_tmlabel">
              <h2>{myEducation.school}</h2>
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
