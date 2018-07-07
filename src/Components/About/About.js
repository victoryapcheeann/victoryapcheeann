import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './About.css';
import './Queries.css';

import TitleComponent from './Title/Title'
import SkillsComponent from './Skills/Skills'

class About extends Component{
   render() {
     return (
         <div className="container">
            <TitleComponent />
            <SkillsComponent />
         </div>
     )
   }
}

export default About;
