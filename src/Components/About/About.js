import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './About.css';

import TitleComponent from './Title/Title'
import ContactComponent from './Contact/Contact'
import SkillsComponent from './Skills/Skills'

class About extends Component{
   render() {
     return (
         <div className="container">
           <TitleComponent className="titleGrid"/>
           <SkillsComponent className="skillsGrid"/>
           <ContactComponent className="contactGrid"/>
         </div>
     )
   }
}

export default About;
