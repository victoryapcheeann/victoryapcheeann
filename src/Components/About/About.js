import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './About.css';
import ParticleAnimation from 'react-particle-animation'
import profilePicture from '../../image/profilePicture.png'

import TitleComponent from './Title/Title'
import ContactComponent from './Contact/Contact'
import SkillsComponent from './Skills/Skills'

const IntroPage = () => (
    <div>
      <ParticleAnimation
        numParticles={400}
        interactive={true}
        color={{r: 30, g: 217, b: 255, a: 255}}>
        <div className="slopeBegin" />
      </ParticleAnimation>
      <div className="slopeEnd aboutGradient"/>
      <TitleComponent />
      <ContactComponent />
      <SkillsComponent />
    </div>
)

class About extends Component{
   render() {
     return (
         <div className="container">
            <IntroPage/>
         </div>
     )
   }
}

export default About;
