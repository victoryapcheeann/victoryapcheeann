import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './About.css';
import './Queries.css';

import Slide from 'react-reveal/Slide';

import TitleComponent from './Title/Title'
import SkillsComponent from './Skills/Skills'
import Social from './Social/Social'

class About extends Component{
   render() {
     return (
         <div className="aboutContainer">
              <Slide left duration={1000}>
                <div className="columnStyle">
                  <TitleComponent />
                  <Social />
                </div>
              </Slide>
              <Slide right duration={1000}>
                <div>
                    <SkillsComponent />
                </div>
              </Slide>
         </div>
     )
   }
}

export default About;
