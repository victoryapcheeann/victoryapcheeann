import React, { Component } from 'react';
import './Title.css';
import profilePicture from '../../../image/profilePicture.png'

class Title extends Component{
  render() {
    return (
        <div className="aboutText aboutHeader containerStyle aboutContainer">
          <div className="aboutTextContainer">
            <div className="meContainer">
              <img src={profilePicture} className="profilePic" alt="Avatar"/>
              <div className="titleContainer">
                <p className="myName">Victor Yap</p>
                <p className="jobTitle">Software Engineer</p>
              </div>
            </div>
            <div className="stripe aboutGradient"/>
              <div className="aboutDescription">
                  <p>I turn complex idea into
                  <p className ="rw-words rw-words-1">
                      <span>elegant products</span>
                      <span>beautiful interfaces</span>
                      <span>simple concepts</span>
                  </p>
                  </p>
              </div>
          </div>
        </div>
    );
  }
}


export default Title;
