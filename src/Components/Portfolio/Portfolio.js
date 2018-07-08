import React, { Component } from 'react';
import './Portfolio.css';
import WorkComponent from './Work/Work'
import Fade from 'react-reveal/Fade';

class Portfolio extends Component{
  render() {
    return (
        <div className="portfolioContainer">
          <Fade top delay={100}>
            <div className="columnStyle">
              <p className="h1Style">Portfolio</p>
              <p className="quotesStyle">
                <span>Show, Dont tell, Seeing is believing</span> <br />
                <span>A picture paints a thousand words</span>
              </p>
            </div>
          </Fade>
          <WorkComponent />
        </div>
    );
  }
}

export default Portfolio;
