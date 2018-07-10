import React, { Component } from 'react';
import './Description.css';
import './Queries.css';

class Description extends Component{
  render() {
    return (
        <div className="descriptionContainer">
            <div className="descriptionDetailContainer columnStyle">
              <p className="h2Style">About Me</p>
              <div className="textStyle">
              I enjoy software engineering because this field is in a constant state of flux.
              Change brings opportunities, hence I enjoy keeping up with the developments. <br/> <br/>
              When I am free, I explore new framework, libraries and language
              to improve myself. <br /> <br/>
              Interested in working together? <br /> 
              Drop me an email
              </div>
            </div>
            <div className="descriptionDetailContainer columnStyle">
              <p className="h2Style">My Approach</p>
              <div className="quotesStyle">
               Discipline is the best tool, <br/>
               Design first, then code <br/>
               Don’t patch bugs out, code them out<br/>
               Don’t test bugs out, design them out.
              </div>
            </div>
        </div>
    );
  }
}


export default Description;
