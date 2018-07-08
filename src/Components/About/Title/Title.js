import React, { Component } from 'react';
import './Title.css';

import ContactComponent from './Contact/Contact'
import CoffeeComponent from './Coffee/Coffee'

class Title extends Component{
  render() {
    return (
        <div className="titleText titleHeader titleContainer">
          <div className="titleTextContainer">
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
            <div className="stripe titleGradient"/>
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
            <ContactComponent />
          </div>
        </div>

    );
  }
}


export default Title;
