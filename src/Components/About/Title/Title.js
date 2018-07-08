import React, { Component } from 'react';
import './Title.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';

import ContactComponent from './Contact/Contact'
import CoffeeComponent from './Coffee/Coffee'

class Title extends Component{
  render() {
    return (
        <div className="titleText titleHeader titleContainer">
          <div className="titleTextContainer">
          <Fade top duration={1000} delay={500}>
            <div className="rowLeftStyle profileContainer">
              <div className="pictureStyle">
                <img src="/profilePicture.png" className="profilePic" alt="Avatar"/>
              </div>
              <div className = "columnLeftStyle nameContainer">
                <p className="h2Style nameStyle">Hello !<br/> I am Victor Yap</p>
                <p className="textStyle jobTitle columnStyle">
                  <span>Software Engineer</span> <br />
                  <span>UI/UX Designer</span>
                </p>
              </div>
            </div>
          </Fade>
          <Flip top duration={1000} delay={500}>
            <div className="stripe titleGradient"/>
          </Flip>
          <Zoom left duration={1000} delay={500}>
              <div className="rowStyle">
                <div className="titleDescription rowStyle textStyle">
                    <p>I turn complex idea into
                    <p className ="rw-words rw-words-1 rowStyle">
                        <span>elegant products</span>
                        <span>  beautiful interfaces</span>
                        <span>simple concepts</span>
                    </p>
                    </p>
                </div>
                <CoffeeComponent />
              </div>
          </Zoom>
          <LightSpeed left duration={1000} delay={500}>
            <ContactComponent />
          </LightSpeed>
          </div>
        </div>

    );
  }
}


export default Title;
