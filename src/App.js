
import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import styled, {keyframes} from "styled-components";
import './App.css'

import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Career from './Components/Career/Career';
import Education from './Components/Education/Education';
import Achievement from './Components/Achievement/Achievement';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className = 'MainStyle'>
      <nav className="nav">
        <input type="checkbox" className="nav__cb" id="menu-cb"/>
        <div className="nav__content">
          <ul className="nav__items">
            <li className="nav__item">
              <span className="nav__item-text" key = 'AboutKey' onClick={() => {scrollToComponent(this.about,{ offset: 0, align: 'top', duration: 300, ease:'inExpo'});}}>
                About Me
              </span>
            </li>
            <li className="nav__item">
              <span className="nav__item-text" key = 'ProjectKey' onClick={() => {scrollToComponent(this.portfolio, { offset: 0, align: 'top', duration: 300, ease:'inExpo'});}}>
                Portfolio
              </span>
            </li>
            <li className="nav__item">
              <span className="nav__item-text" key = 'CareerKey' onClick={() => {scrollToComponent(this.career,{ offset: 0, align: 'top', duration: 300, ease:'inExpo'});}}>
                Career
              </span>
            </li>
            <li className="nav__item">
              <span className="nav__item-text" key = 'EducationKey'onClick={() => {scrollToComponent(this.education, { offset: 0, align: 'top', duration: 300, ease:'inExpo'});}}>
                Education
              </span>
            </li>
          </ul>
        </div>
        <label className="nav__btn" for="menu-cb"></label>
      </nav>
        <div>
            <About className ='about' ref={(div) => { this.about = div;}}/>
            <Portfolio className ='portfolio' ref={(div) => { this.portfolio = div;}}/>
            <Career className ='career' ref={(div) => { this.career = div;}}/>
            <Education className ='education' ref={(div) => { this.education = div;}}/>
            <Achievement />
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;
