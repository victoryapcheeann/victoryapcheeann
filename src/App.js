
import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import styled, {keyframes} from "styled-components";
import './App.css'

import About from './Components/About/About';
import Career from './Components/Career/Career';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Portfolio from './Components/Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <div className = 'MainStyle'>
      <nav class="nav">
        <input type="checkbox" class="nav__cb" id="menu-cb"/>
        <div class="nav__content">
          <ul class="nav__items">
            <li class="nav__item">
              <span class="nav__item-text" key = 'AboutKey'
              onClick={() => {scrollToComponent(
              this.about,
              { offset: 0, align: 'top', duration: 300, ease:'inExpo'});
            }}>
                About Me
              </span>
            </li>
            <li class="nav__item">
              <span class="nav__item-text" key = 'ProjectKey'
              onClick={() => {scrollToComponent(
              this.portfolio,
              { offset: 0, align: 'top', duration: 300, ease:'inExpo'});
            }}>
                Portfolio
              </span>
            </li>
            <li class="nav__item">
              <span class="nav__item-text" key = 'CareerKey'
              onClick={() => {scrollToComponent(
              this.career,
              { offset: 0, align: 'top', duration: 300, ease:'inExpo'});
            }}>
                Career
              </span>
            </li>
            <li class="nav__item">
              <span class="nav__item-text" key = 'EducationKey'
              onClick={() => {scrollToComponent(
              this.education,
              { offset: 0, align: 'top', duration: 300, ease:'inExpo'});
            }}>
                Education
              </span>
            </li>
          </ul>
        </div>
        <label class="nav__btn" for="menu-cb"></label>
      </nav>
        <div>
            <About className ='about' ref={(div) => { this.about = div;}}/>
            <Portfolio className ='portfolio' ref={(div) => { this.portfolio = div;}}/>
            <Career className ='career' ref={(div) => { this.career = div;}}/>
            <Education className ='education' ref={(div) => { this.education = div;}}/>
        </div>
      </div>
    );
  }
}

export default App;
