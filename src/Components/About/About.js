import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './About.css';
import './Queries.css';

import TitleComponent from './Title/Title'
import SkillsComponent from './Skills/Skills'
import Social from './Social/Social'

class About extends Component{
   render() {
     return (
         <div className="aboutContainer">
            <div className="columnStyle">
              <TitleComponent />
              <Social />
            </div>
            <div>
              <SkillsComponent />
            </div>
         </div>
     )
   }
}

export default About;
