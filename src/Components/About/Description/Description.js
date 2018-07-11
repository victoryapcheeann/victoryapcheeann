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
              When I am free, I explore new framework and do side projects to improve myself. <br /> <br/>
              Interested in working together? Drop me an email
              </div>
            </div>
            <div className="descriptionDetailContainer columnStyle">
              <p className="h2Style">My Approach</p>
              <div className="quotesStyle">
                If debugging is the process of removing software bugs,
                then programming must be the process of putting them in. ~Edsger Dijkstra
              </div>
            </div>
        </div>
    );
  }
}


export default Description;
