import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './About.css';
import './Queries.css';

import Bounce from 'react-reveal/Bounce';

import TitleComponent from './Title/Title'
import DescriptionComponent from './Description/Description'
import SkillsComponent from './Skills/Skills'
import Social from './Social/Social'

class About extends Component{
   render() {
     return (
         <div className="aboutContainer">
            <div className="aboutSubContainer">
              <Bounce left duration={2000} delay={100}>
                <div className="titleSocialStyle">
                  <TitleComponent />
                  <Social />
                </div>
              </Bounce>
              <Bounce bottom duration={2000} delay={100}>
                <div>
                    <DescriptionComponent />
                </div>
              </Bounce>
            </div>
              <Bounce right duration={2000} delay={100}>
                <div>
                    <SkillsComponent />
                </div>
              </Bounce>
         </div>
     )
   }
}

export default About;
