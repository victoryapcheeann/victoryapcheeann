import React, { Component } from 'react';
import './Portfolio.css';
import ImageComponent from './ImageComponent/Image'

class Portfolio extends Component{
  render() {
    return (
      <div className="portfolioBackground">
        <div className="portfolioContainer">
          <div className="portfolioHeaderStyle">
            <p className="portfolioHeader">My Works</p>
            <p className="quotesStyle">
              <span>Show, Don't tell</span> <br />
              <span>A picture paints a thousand words</span>
            </p>
          </div>
          <ImageComponent />
        </div>
        </div>
    );
  }
}

export default Portfolio;
