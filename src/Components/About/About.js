import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './About.css';
import './Queries.css';

import Bounce from 'react-reveal/Bounce';

import TitleComponent from './Title/Title'
import SkillsComponent from './Skills/Skills'
import Social from './Social/Social'

class About extends Component{
   render() {
     return (
         <div className="aboutContainer">
              <Bounce left duration={2000} delay={100}>
                <div className="columnStyle">
                  <TitleComponent />
                  <Social />
                </div>
              </Bounce>
              <Bounce right duration={2000} delay={300}>
                <div>
                    <SkillsComponent />
                </div>
              </Bounce>
         </div>
     )
   }
}

export default About;
