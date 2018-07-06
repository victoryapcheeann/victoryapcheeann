import React, { Component } from 'react';
import './Achievement.css';
import FaDatabase from 'react-icons/lib/fa/database';

const myAchievements = [
  {company: 'ABC', startDate: 'Feb 2018', endDate: 'June 2019', description: 'inter purslane courgette pumpkin quandong komatsuna fenne'},
  {company: 'EDF', startDate: 'Feb 2018', endDate: 'June 2019', description: 'inter purslane courgette pumpkin quandong komatsuna fenne'}
];

class Achievement extends Component{
  render() {
    return (
      <div className="achievementContainer">
        <div className="headerContainer">
          <p className="h1Style">Achievement</p>
          <p className="quotesStyle">
            <span>Pen is mightier than the sword</span>
          </p>
        </div>
      <div className="main">
        <ul className="achievement_tmtimeline">
        {myAchievements.map((myAchievement) => (
          <li>
            <time className="achievement_tmtime"><span>{myAchievement.startDate}</span> <span>to</span><span>{myAchievement.endDate}</span></time>
            <div className="achievement_tmicon"><FaDatabase /></div>
            <div className="achievement_tmlabel">
              <h2>{myAchievement.company}</h2>
              <p>{myAchievement.description}</p>
            </div>
          </li>
        ))}
        </ul>
        </div>
      </div>
    );
  }
}

export default Achievement;
