import React, { Component } from 'react';
import './Achievement.css';
import './Queries.css';
import FaTrophy from 'react-icons/lib/fa/trophy';
import {myAchievements} from '../../Constants';
import Bounce from 'react-reveal/Bounce';

class Achievement extends Component{
  render() {
    return (
      <div className="achievementContainer">
      <Bounce top delay={100}>
        <div className="columnStyle">
          <p className="h1Style">Achievement</p>
          <p className="quotesStyle">
            <span>A dream becomes a goal when action is taken toward its achievement.</span>
          </p>
        </div>
      </Bounce>
      <div className="main">
        <ul className="achievement_tmtimeline">
        <Bounce left duration={500} delay={100}>
        {myAchievements.map((myAchievement) => (
          <li>
            <time className="achievement_tmtime"><span>{myAchievement.startDate}</span> <span>to</span><span>{myAchievement.endDate}</span></time>
            <div className="achievement_tmicon"><FaTrophy /></div>
              <div className="achievement_tmlabel">
              <Bounce left duration={1000} delay={200}>
                <h2>{myAchievement.title}</h2>
              </Bounce>
              <Bounce left duration={1000} delay={400}>
                {myAchievement.description.map((description) => (
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

export default Achievement;
