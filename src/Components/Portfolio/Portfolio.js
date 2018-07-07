import React, { Component } from 'react';
import './Portfolio.css';
import WorkComponent from './Work/Work'

class Portfolio extends Component{
  render() {
    return (
        <div className="portfolioContainer">
          <div className="columnStyle">
            <p className="h1Style">Portfolio</p>
            <p className="quotesStyle">
              <span>Show, Dont tell, Seeing is believing</span> <br />
              <span>A picture paints a thousand words</span>
            </p>
          </div>
          <WorkComponent />
        </div>
    );
  }
}

export default Portfolio;
