import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './About.css';
import ParticleAnimation from 'react-particle-animation'
import profilePicture from '../../image/profilePicture.png'

const IntroPage = () => (
    <div>
      <ParticleAnimation
        numParticles={200}
        interactive={true}
        color={{r: 48, g: 140, b: 232, a: 255}}>
        <div className="slopeBegin" />
      </ParticleAnimation>
      <div className="slopeEnd aboutGradient"/>
        <div className="aboutText aboutHeader containerStyle aboutContainer">
          <div className="aboutTextContainer">
            <div className="meContainer">
              <img src={profilePicture} className="profilePic" alt="Avatar"/>
              <div className="titleContainer">
                <p className="myName">Victor Yap</p>
                <p className="jobTitle">Software Engineer</p>
              </div>
            </div>
            <div className="stripe aboutGradient"/>
              <div className="aboutDescription">
                  <p>I turn complex idea into
                  <p className ="rw-words rw-words-1">
                      <span>elegant products</span>
                      <span>beautiful interfaces</span>
                      <span>simple concepts</span>
                  </p>
                  </p>
              </div>
          </div>
        </div>
        <div className="contactContainer containerStyle">
        2
        </div>
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
