import React, { Component } from 'react';
import './Skills.css';
import './Effects.css';
import './Scroll.css'

import ParticleEffect from 'react-particle-effect-button'
import GoPaintcan from 'react-icons/lib/go/paintcan';
import MdWeb from 'react-icons/lib/md/web';
import FaDatabase from 'react-icons/lib/fa/database';

const mySkills = [
  {skill: 'HTML'}, {skill: 'CSS'}, {skill: 'Javascript'}, {skill: 'ReactJS'},
  {skill: 'React Native'}, {skill: 'C#'}, {skill: 'SQL'}, {skill: 'MongoDB'}
];

const myLearns = [
  {learn: 'Go'}, {learn: 'Jest & Jasmine'}, {learn: 'MERN Stack'},
  {learn: 'Dart & Flutter'},
];

const myInterests = [
  {interest: 'UI/UX Design'}, {interest: 'Web & Mobile Development'}, {interest: 'Backend Development'}
];

const myInterestsIcon = [
  GoPaintcan, MdWeb, FaDatabase
];

class Skills extends Component{
  constructor(props) {
    super(props)
    this.state = {
        expanded: false,
        hidden: false,
        animating: false
    };
  }

  expandToggle = () => {
    if (this.state.animating) return

     this.setState({
       expanded: !this.state.expanded,
       hidden: !this.state.hidden,
       animating: true
     })
   }

  _onAnimationComplete = () => {
      this.setState({
        animating: false
      })
    }

  render() {
    const { hidden, animating } = this.state;

    return (
        <div className="skillsContainer">
            <div className="columnStyle">
            <div className="rowStyle">
              <div className="effects-item">
                <div className="effects effects-1"></div>
              </div>
                <p className="h2Style">My Skills</p>
              </div>
              <div className>
                {mySkills.map((mySkill) => (
                  <span className="skillGradient skillBtnStyle">{mySkill.skill}</span>
                ))}
              </div>
            </div>
            <br />
            <div className="columnStyle">
            <div className="rowStyle">
              <div className="effects-item">
                  <div className="effects effects-2"></div>
                </div>
                <p className="h2Style">To Learn List</p>
              </div>
              <div className>
                {myLearns.map((myLearn) => (
                  <span className="learnGradient skillBtnStyle">{myLearn.learn}</span>
                ))}
              </div>
            </div>
            <br />
            <div className="columnStyle">
              <div className="rowStyle">
                <div className="effects-item">
                  <div className="effects effects-3"></div>
                </div>
                <p className="h2Style">My Interest</p>
              </div>
              <div className="rowStyle">
                <div className="columnStyle">
                  {myInterestsIcon.map((Component) => (
                      <Component size={30} color="DodgerBlue" className="iconMarginStyle"/>
                  ))}
                </div>
                <div className="columnLeftStyle">
                  {myInterests.map((myInterest) => (
                    <span className="interestGradient skillBtnStyle">{myInterest.interest}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className ="columnStyle">
              <a href="/resume.doc" download>
                <div className="rowStyle" onClick={ this.expandToggle }>
                  <p className="fancy-button bg-gradient1">
                    <span>Download Resume </span>
                  </p>
                  <ParticleEffect
                    hidden={hidden}
                    onComplete={this._onAnimationComplete}
                    style={'fill'}
                    color={'DarkTurquoise'}
                    type={'triangle'}
                    duration={1000}
                    direction={'top'}
                    particlesAmountCoefficient={6}
                    oscillationCoefficient={30}>
                     <div>
                     <div class="scrolldown-container">
                       <div class="scrolldown-btn">
                         <svg version="1.1" id="Слой_1" x="0px" y="0px" width="50px" height="80px" viewbox="0 0 50 80" enable-background="new 0 0 50 80">
                           <path class="first-path" fill="#00000"d="M0 10 L10 21 L20 10"></path>
                           <path class="second-path" fill="#00000"d="M0 20 L10 31 L20 20"></path>
                         </svg>
                       </div>
                     </div>
                   </div>
                 </ParticleEffect>
                </div>
              </a>

            </div>
        </div>
    );
  }
}


export default Skills;
