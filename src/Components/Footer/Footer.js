import React, { Component } from 'react';
import './Footer.css';

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
        <p>This work is inspired by codepen</p>
      </div>
    );
  }
}

export default Footer;
