import React, { Component } from 'react';
import './Achievement.css';
import FaTrophy from 'react-icons/lib/fa/trophy';

const myAchievements = [
  {company: 'Leadership, NUS-ISS Class Representative', startDate: '2016', endDate: '2017',
  description: [
  'Act as a liaison between the students and the lecturers.',
  'Gather and communicate views from my peers on various aspects of your course.',
  'Report back to my classmates on discussions that take place at staff-student liaison and other meetings, and share information about any resultant action.'
  ]},
  {company: 'Fine Wine Rack Project, Champion', startDate: '2013', endDate: '2013',
  description: ['An individual class project competition that had over 500 competitors',
  'Developing an efficient schedule and assigning activities for 4 crew members',
  'Tracked inventory level and kept sufficient materials when needed',
  'Ensured on time shipment for all the orders',
  'Competed in 1 category',
  'Amount of profit earned: 1st (Top 1%)'
  ]},
  {company: 'Native Sun Project, Champion', startDate: '2013', endDate: '2013',
  description: ['An individual class project competition that had over 500 competitors',
  'Utilized Excel spreadsheet to draw up a movie schedule that consisted of 73 tasks, 8 people and 16 locations according to precedence relations',
  'Competed in 3 different category',
  'Least amount of time: 1st (Top 1%)',
  'Least amount of budget: 1st (Top 1%)',
  'Least amount of money including a $75,000 per day charge: 1st (Top 1%)'
  ]}
];

class Achievement extends Component{
  render() {
    return (
      <div className="achievementContainer">
        <div className="columnStyle">
          <p className="h1Style">Achievement</p>
          <p className="quotesStyle">
            <span>A dream becomes a goal when action is taken toward its achievement.</span>
          </p>
        </div>
      <div className="main">
        <ul className="achievement_tmtimeline">
        {myAchievements.map((myAchievement) => (
          <li>
            <time className="achievement_tmtime"><span>{myAchievement.startDate}</span> <span>to</span><span>{myAchievement.endDate}</span></time>
            <div className="achievement_tmicon"><FaTrophy /></div>
            <div className="achievement_tmlabel">
              <h2>{myAchievement.company}</h2>
              {myAchievement.description.map((description) => (
                <li className='listStyle'>{description}</li>
              ))}
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
