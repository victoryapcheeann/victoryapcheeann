import React, { Component } from 'react';
import './Contact.css';

import IoMail from 'react-icons/lib/io/email';
import IoIphone from 'react-icons/lib/io/iphone';
import FaHome from 'react-icons/lib/fa/home';

class Contact extends Component{
  render() {
    return (
        <div className="contactContainer">
            <div className="personalInfoContainer">
              <p className="contactHeader">
                Basic Information
              </p>
              <div className="contactText">
                <p>Email <IoMail size={30} color="blue"/></p>
                <span>victoryapcheeann@gmail.com</span>
                <br />
                <p>Phone <IoIphone size={30} color="blue"/></p>
                <span>90025405</span>
                <br />
                <p>Nationality <FaHome size={30} color="blue"/></p>
                <span>Singaporean</span>
              </div>
            </div>
        </div>
    );
  }
}


export default Contact;
