import React, { Component } from 'react';
import SurveyComponent from './Survey/Survey'

import './Footer.css';
import './Jedi.css';

class Footer extends Component{
  render() {
    return (
      <div className = "footerContainer">
        <div>
          <div className="blinker blinker-style">
            <div className="element"></div>
            <div className="element"></div>
            <div className="spark"></div>
          </div>
        </div>
        <SurveyComponent />
        <div className="footerDescription">
          <p>If you have any colloboration opportunities, hit me up!</p>
          <p>Just drop me a message or email at</p>
          <p>victoryapcheeann@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Footer;
