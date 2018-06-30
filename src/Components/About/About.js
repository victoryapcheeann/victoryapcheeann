import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './About.css';
import ParticleAnimation from 'react-particle-animation'

const IntroPage = ({ offset, caption, first, second, third, gradient, image, onClick }) => (
    <div>
      <ParticleAnimation>
        <div className="slopeBegin" />
      </ParticleAnimation>
      <div className="slopeEnd firstGradient" />
      <div className="text header textContainer">
        <div>
          <p>{caption}</p>
            <div className="stripe firstGradient"/>
              <div className="description">
                <p>{first}</p>
                <p>{second}</p>
                <p className ="rw-words rw-words-1">
                  <span>elegant products</span>
                  <span>beautiful interfaces</span>
                  <span>easily digestible form</span>
                </p>
            </div>
        </div>
      </div>
    </div>
)

class About extends Component{
   render() {
     return (
         <div className="container">
            <IntroPage offset={0} caption="Hi, I'm Victor Yap" first="I'm a software engineer" second="I turn complex idea into"/>
         </div>
     )
   }
}

export default About;
