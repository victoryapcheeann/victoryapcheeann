import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './About.css';
import ParticleAnimation from 'react-particle-animation'
import profilePicture from '../../image/profilePicture.png'
import TitleComponent from './Title/Title'

const IntroPage = () => (
    <div>
      <ParticleAnimation
        numParticles={200}
        interactive={true}
        color={{r: 48, g: 140, b: 232, a: 255}}>
        <div className="slopeBegin" />
      </ParticleAnimation>
      <div className="slopeEnd aboutGradient"/>
      <TitleComponent />
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
