import React, { Component } from 'react';
import './Skills.css';
import './Effects.css';
import './Scroll.css'
import ParticleEffect from 'react-particle-effect-button'

import GoPaintcan from 'react-icons/lib/go/paintcan';
import MdWeb from 'react-icons/lib/md/web';
import FaDatabase from 'react-icons/lib/fa/database';

import {mySkills, myInterests, myServices} from '../../../Constants';

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
        <div className="skillsContainer columnStyle">
          <div className="approachAlignmentStyle">
            <div className="approachContainer columnStyle">
              <p className="h2Style">About Me</p>
              <div className="textStyle">
              I enjoy software engineering because this field is in a constant state of flux.
              Change brings opportunities, hence I enjoy keeping up with the developments. <br/> <br/>
              When I am free, I explore new framework, libraries and language
              to improve myself. Feel free to drop me an email
              if you have any collaboration opportunities!
              </div>
            </div>
            <div className="approachContainer columnStyle">
              <p className="h2Style">My Approach</p>
              <div className="quotesStyle">
               Discipline is the best tool, <br/>
               Design first, then code <br/>
               Don’t patch bugs out, rewrite them out<br/>
               Don’t test bugs out, design them out.
              </div>
            </div>
          </div>
          <div className="skillsAlignmentStyle">
            <div className="skillsDetailContainer columnStyle">
              <div className="rowStyle iconTitleStyle">
              <div className="effects-item">
                <div className="effects effects-1"></div>
              </div>
                <p className="h2Style">Skills</p>
              </div>
              <div>
                {mySkills.map((mySkill) => (
                  <span className="skillGradient skillBtnStyle">{mySkill.skill}</span>
                ))}
              </div>
            </div>
            <br />
            <div className="skillsDetailContainer columnStyle">
              <div className="rowStyle iconTitleStyle">
                <div className="effects-item">
                    <div className="effects effects-2"></div>
                  </div>
                  <p className="h2Style">Interests</p>
                </div>
              <div>
                  {myInterests.map((myInterest) => (
                    <span className="learnGradient skillBtnStyle">{myInterest.interest}</span>
                  ))}
                </div>
              </div>
            <br />
            <div className="skillsDetailContainer columnStyle">
              <div className="rowStyle iconTitleStyle">
                <div className="effects-item">
                    <div className="effects effects-3"></div>
                  </div>
                  <p className="h2Style">Services</p>
                </div>
                <div>
                  {myServices.map((myService) => (
                    <span className="interestGradient skillBtnStyle">{myService.service}</span>
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
    );
  }
}


export default Skills;
