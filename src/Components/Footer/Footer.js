import React, { Component } from 'react';
import SurveyComponent from './Survey/Survey'
import Shake from 'react-reveal/Shake';
import Jump from 'react-reveal/Jump';
import HeadShake from 'react-reveal/HeadShake';
import Wobble from 'react-reveal/Wobble';
import Tada from 'react-reveal/Tada';

import './Footer.css';
import './Jedi.css';

class Footer extends Component{
  render() {
    return (
      <div className = "footerContainer">
        <div>
        <Wobble duration={2000} forever>
          <HeadShake duration={2000} forever>
            <Jump duration={2000} forever>
              <Shake duration={2000} forever>
              <div className="blinker blinker-style">
                <div className="element"></div>
                <div className="element"></div>
                <div className="spark"></div>
              </div>
              </Shake>
            </Jump>
          </HeadShake>
        </Wobble>
        </div>
        <Tada duration={1000} delay={200} count={3}>
          <SurveyComponent />
        </Tada>
        <Jump duration={2000} delay={2000} forever>
          <div className="footerDescription">
            <p>Interested in working together?</p>
            <p>Drop me an email</p>
            <p>victoryapcheeann@gmail.com</p>
            <br />
          </div>
        </Jump>
        <p className="side-lines--snake">© Victor Yap 2018 / No rights reserved</p>
      </div>
    );
  }
}

export default Footer;
