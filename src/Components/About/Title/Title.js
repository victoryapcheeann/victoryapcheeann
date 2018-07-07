import React, { Component } from 'react';
import ContactComponent from './Contact/Contact'
import './Title.css';

class Title extends Component{
  render() {
    return (
        <div className="titleText titleHeader titleContainer">
          <div className="titleTextContainer">
            <div className="rowStyle">
              <img src="/profilePicture.png" className="profilePic" alt="Avatar"/>
              <div>
                <p className="h1Style">Victor Yap</p>
                <p className="h2Style">Software Engineer</p>
              </div>
            </div>
            <div className="stripe titleGradient"/>
              <div className="titleDescription">
                  <p>I turn complex idea into
                  <p className ="rw-words rw-words-1 rowStyle">
                      <span>elegant products</span>
                      <span>  beautiful interfaces</span>
                      <span>simple concepts</span>
                  </p>
                  </p>
              </div>
            <ContactComponent />
          </div>
        </div>

    );
  }
}


export default Title;
