import React, { Component } from 'react';
import './Achievement.css';
import FaTrophy from 'react-icons/lib/fa/trophy';
import {myAchievements} from '../../Constants';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';

class Achievement extends Component{
  render() {
    return (
      <div className="achievementContainer">
      <Fade top delay={100}>
        <div className="columnStyle">
          <p className="h1Style">Achievement</p>
          <p className="quotesStyle">
            <span>A dream becomes a goal when action is taken toward its achievement.</span>
          </p>
        </div>
      </Fade>
      <div className="main">
        <ul className="achievement_tmtimeline">
        <LightSpeed left duration={1000} delay={100}>
        {myAchievements.map((myAchievement) => (
          <li>
            <time className="achievement_tmtime"><span>{myAchievement.startDate}</span> <span>to</span><span>{myAchievement.endDate}</span></time>
            <div className="achievement_tmicon"><FaTrophy /></div>
              <div className="achievement_tmlabel">
              <LightSpeed left duration={1000} delay={1000}>
                <h2>{myAchievement.title}</h2>
              </LightSpeed>
              <LightSpeed left duration={1000} delay={1500}>
                {myAchievement.description.map((description) => (
                  <li className='listStyle'>{description}</li>
                ))}
              </LightSpeed>
              </div>
          </li>
        ))}
        </LightSpeed>
        </ul>
        </div>
      </div>
    );
  }
}

export default Achievement;
