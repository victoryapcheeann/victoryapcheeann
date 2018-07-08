import React, { Component } from 'react';
import './Social.css';
import Bounce from 'react-reveal/Bounce';

import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square';

class Contact extends Component{
  render() {
    return (
        <div className="socialContainer">
              <div className="socialIconStyle">
                <a href="https://www.facebook.com/chee.ann.14">
                  <FaFacebookSquare size={40} color="SteelBlue"/>
                </a>
                <a href="https://www.linkedin.com/in/victor-yap-49b713b9/">
                  <FaLinkedinSquare size={40} color="DodgerBlue"/>
                </a>
                <a href="https://github.com/victoryapcheeann">
                  <FaGithubSquare size={40} color="LightSlateGrey"/>
                </a>
                <a href="https://plus.google.com/u/0/109099092605916033996">
                  <FaGooglePlusSquare size={40} color="IndianRed"/>
                </a>
              </div>
        </div>
    );
  }
}


export default Contact;
