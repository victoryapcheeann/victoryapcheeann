import React, { Component } from 'react';
import './Skills.css';
import './Effects.css';
import './Scroll.css';
import './Queries.css';
import ParticleEffect from 'react-particle-effect-button'

import GoPaintcan from 'react-icons/lib/go/paintcan';
import MdWeb from 'react-icons/lib/md/web';
import FaDatabase from 'react-icons/lib/fa/database';

import {mySkills, myLearns, myInterests} from '../../../Constants';

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
      <div className="mainSkillContainer">
        <div className="skillsContainer columnStyle">
          <div className="columnStyle">
            <div className="skillsDetailContainer skillsShadowStyle">
                <div className="rowStyle iconTitleStyle">
                  <span className="effects-item">
                      <span className="effects effects-1"></span>
                  </span>
                    <span className="h2Style">Skills</span>
                </div>
                  <div>
                {mySkills.map((mySkill) => (
                  <span className="skillsGradient skillBtnStyle">{mySkill.skill}</span>
                ))}
                </div>
            </div>
            <br />
            <div className="skillsDetailContainer learnsShadowStyle">
                <div className="rowStyle iconTitleStyle">
                  <span className="effects-item">
                      <span className="effects effects-2"></span>
                  </span>
                    <span className="h2Style">Learns</span>
                </div>
                  <div>
                    {myLearns.map((myLearn) => (
                      <span className="learnsGradient skillBtnStyle">{myLearn.learn}</span>
                    ))}
                  </div>
              </div>
            <br />
            <div className="skillsDetailContainer interestsShadowStyle">
                <div className="rowStyle iconTitleStyle">
                  <span className="effects-item">
                      <span className="effects effects-3"></span>
                  </span>
                    <span className="h2Style">Interests</span>
                </div>
                  <div>
                  {myInterests.map((myInterest) => (
                    <span className="interestsGradient skillBtnStyle">{myInterest.interest}</span>
                  ))}
                  </div>
              </div>
          </div>
            <div className ="columnStyle">
              <a href="/resume.pdf" download>
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
      </div>
    );
  }
}


export default Skills;
