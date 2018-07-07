import React, { Component } from 'react';
import './Contact.css';

import IoMail from 'react-icons/lib/io/email';
import IoIphone from 'react-icons/lib/io/iphone';
import FaHome from 'react-icons/lib/fa/home';

class Contact extends Component{
  render() {
    return (
        <div className="contactContainer">
            <div className="columnStyle">
              <div className="contactText textStyle columnLeftStyle">
                <span><IoMail size={30} color="CornflowerBlue"/> victoryapcheeann@gmail.com</span>
                <br />
                <span><IoIphone size={30} color="CornflowerBlue"/> 90025405</span>
                <br />
                <span><FaHome size={30} color="CornflowerBlue"/> Singaporean</span>
              </div>
            </div>
        </div>
    );
  }
}


export default Contact;
