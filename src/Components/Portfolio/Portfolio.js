import React, { Component } from 'react';
import './Portfolio.css';
import WorkComponent from './Work/Work'
import Bounce from 'react-reveal/Bounce';

class Portfolio extends Component{
  render() {
    return (
        <div className="portfolioContainer">
          <Bounce top delay={100}>
            <div className="columnStyle">
              <p className="h1Style side-lines--single">Portfolio</p>
              <p className="quotesStyle">
                <span>Show, Dont tell, Seeing is believing</span> <br />
                <span>A picture paints a thousand words</span>
              </p>
            </div>
          </Bounce>
          <WorkComponent />
        </div>
    );
  }
}

export default Portfolio;
