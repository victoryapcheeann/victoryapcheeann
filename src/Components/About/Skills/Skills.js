import React, { Component } from 'react';
import './Skills.css';

import GoPaintcan from 'react-icons/lib/go/paintcan';
import MdWeb from 'react-icons/lib/md/web';
import FaDatabase from 'react-icons/lib/fa/database';

const mySkills = [
  {skill: 'HTML'},
  {skill: 'CSS'},
  {skill: 'Javascript'},
  {skill: 'ReactJS'},
  {skill: 'React Native'},
  {skill: 'C#'},
  {skill: 'SQL'}
];

const myLearns = [
  {learn: 'Go'},
  {learn: 'Jest & Jamine'},
  {learn: 'MERN Stack'},
  {learn: 'MongoDB'},
  {learn: 'Vue JS'},
];

class Skills extends Component{
  render() {
    return (
        <div className="skillsContainer">
          <div className="skillsDetailContainer">
            <div className="skillsDetailStyle">
            <div className="headerLoaderStyle">
              <div class="loader-item">
                <div class="loader loader-1"></div>
              </div>
                <p className="skillsHeader">My Skills</p>
            </div>
              <div>
                {mySkills.map((mySkill) => (
                  <span class="skillBtn">{mySkill.skill}</span>
                ))}
              </div>
            </div>
            <br />
            <div className="skillsDetailStyle">
            <div className="headerLoaderStyle">
              <div class="loader-item">

                  <div class="loader loader-2"></div>
                </div>
                <p className="skillsHeader">To Learn List</p>
              </div>
              <div>
                {myLearns.map((myLearn) => (
                  <span class="learnBtn">{myLearn.learn}</span>
                ))}
              </div>
            </div>
            <br />
            <div className="skillsDetailStyle">
            <div className="headerLoaderStyle">
              <div class="loader-item">
                <div class="loader loader-3"></div>
              </div>
              <p className="skillsHeader">My Interest</p>
            </div>
              <div>
                <GoPaintcan size={30} color="DodgerBlue"/>
                <span class="interestBtn">UI/UX Design</span> <br />
                <MdWeb size={30} color="DodgerBlue"/>
                <span class="interestBtn">Web & Mobile Development</span> <br />
                <FaDatabase size={30} color="DodgerBlue"/>
                <span class="interestBtn">Backend Development</span>
              </div>
            </div>
          </div>
        </div>
    );
  }
}


export default Skills;
