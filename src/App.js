
import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Zoom from 'react-reveal/Zoom';
import './App.css'

import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Achievement from './Components/Achievement/Achievement';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className = "appContainer">
        <Zoom delay={1400} duration={1000}>
          <nav className="nav rowLeftStyle">
            <input type="checkbox" className="nav__cb" id="menu-cb"/>
            <label className="nav__btn" for="menu-cb"></label>
            <div className="nav__content">
              <ul className="nav__items">
                <li className="nav__item">
                  <span className="nav__item-text" key = 'AboutKey' onClick={() => {scrollToComponent(this.about,{ offset: 0, align: 'top', duration: 300, ease:'inExpo'});}}>
                    About
                  </span>
                </li>
                <li className="nav__item">
                  <span className="nav__item-text" key = 'ProjectKey' onClick={() => {scrollToComponent(this.portfolio, { offset: 0, align: 'top', duration: 300, ease:'inExpo'});}}>
                    Portfolio
                  </span>
                </li>
                <li className="nav__item">
                  <span className="nav__item-text" key = 'ExperienceKey' onClick={() => {scrollToComponent(this.experience,{ offset: 0, align: 'top', duration: 300, ease:'inExpo'});}}>
                    Experience
                  </span>
                </li>
                <li className="nav__item">
                  <span className="nav__item-text" key = 'EducationKey'onClick={() => {scrollToComponent(this.education, { offset: 0, align: 'top', duration: 300, ease:'inExpo'});}}>
                    Education
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </Zoom>
        <div>
            <About className ='about' ref={(div) => { this.about = div;}}/>
            <Portfolio className ='portfolio' ref={(div) => { this.portfolio = div;}}/>
            <Experience className ='experience' ref={(div) => { this.experience = div;}}/>
            <Education className ='education' ref={(div) => { this.education = div;}}/>
            <Achievement />
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;
