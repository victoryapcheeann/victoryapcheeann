import React, { Component } from 'react';
import './Social.css';
import './Queries.css';

import Bounce from 'react-reveal/Bounce';

import FaPinterestSquare from 'react-icons/lib/fa/pinterest-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithubSquare from 'react-icons/lib/fa/github-square';

class Contact extends Component{
  render() {
    return (
        <div className="socialContainer">
              <div className="socialIconStyle">
                <a href="https://www.linkedin.com/in/victor-yap-49b713b9/">
                  <FaLinkedinSquare size={40} color="DodgerBlue"/>
                </a>
                <a href="https://github.com/victoryapcheeann">
                  <FaGithubSquare size={40} color="LightSlateGrey"/>
                </a>
                <a href="https://www.pinterest.com/cheeann14/pins/">
                  <FaPinterestSquare size={40} color="#C92228"/>
                </a>
              </div>
        </div>
    );
  }
}


export default Contact;
