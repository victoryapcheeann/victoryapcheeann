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
        <div className="footerDescription">
          <p>Caulie dandelion maize lentil collard greens radish arugula sweet pepper water spinach kombu courgette lettuce. Celery coriander bitterleaf epazote radicchio shallot winter purslane collard greens spring onion squash lentil. Artichoke salad bamboo shoot black-eyed pea brussels sprout garlic kohlrabi.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
