import React, { Component } from 'react';
import './Career.css';
import FaDatabase from 'react-icons/lib/fa/database';

const myCareers = [
  {company: 'ABC', startDate: 'Feb 2018', endDate: 'June 2019', description: 'inter purslane courgette pumpkin quandong komatsuna fenne'},
  {company: 'EDF', startDate: 'Feb 2018', endDate: 'June 2019', description: 'inter purslane courgette pumpkin quandong komatsuna fenne'}
];

class Career extends Component{
  render() {
    return (
      <div className="careerContainer">
        <div className="columnStyle">
          <p className="h1Style">Career</p>
          <p className="quotesStyle">
            <span>Pen is mightier than the sword</span>
          </p>
        </div>
      <div className="main">
        <ul className="career_tmtimeline">
        {myCareers.map((myCareer) => (
          <li>
            <time className="career_tmtime"><span>{myCareer.startDate}</span> <span>to</span><span>{myCareer.endDate}</span></time>
            <div className="career_tmicon"><FaDatabase /></div>
            <div className="career_tmlabel">
              <h2>{myCareer.company}</h2>
              <p>{myCareer.description}</p>
            </div>
          </li>
        ))}
        </ul>
        </div>
      </div>
    );
  }
}

export default Career;
