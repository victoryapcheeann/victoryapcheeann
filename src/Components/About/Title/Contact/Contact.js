import React, { Component } from 'react';
import './Contact.css';

import IoMail from 'react-icons/lib/io/email';
import FaHome from 'react-icons/lib/fa/home';
import FaEnvira from 'react-icons/lib/fa/envira';

class Contact extends Component{
  render() {
    return (
        <div className="contactContainer">
            <div className="columnStyle">
              <div className="contactText textStyle columnLeftStyle">
                <span><IoMail size={30} color="DeepSkyBlue"/> victoryapcheeann@gmail.com</span>
                <br />
                <span><FaHome size={30} color="Orange"/> Singaporean</span>
                <br />
                <span><FaEnvira size={30} color="Green"/> Green Tea Lover</span>
              </div>
            </div>
        </div>
    );
  }
}


export default Contact;
