import React, { Component } from 'react';
import './Portfolio.css';
import scrollToComponent from 'react-scroll-to-component';
import WorkComponent from './Work/Work'
import SurveyComponent from './Survey/Survey'
import AnimakitExpander from 'animakit-expander';
import ParticleEffect from 'react-particle-effect-button'

class Portfolio extends Component{
  constructor(props) {
    super(props)
    this.state = {
        expanded: false,
        hidden: false,
        animating: false
    };
  }

  expandToggle = () => {
    if (this.state.animating) return

     this.setState({
       expanded: !this.state.expanded,
       hidden: !this.state.hidden,
       animating: true
     })
   }

  _onAnimationComplete = () => {
      this.setState({
        animating: false
      })
    }

  render() {
    const { hidden, animating } = this.state;

    return (
        <div className="portfolioContainer">
          <div className="headerContainer">
            <p className="headerStyle">Portfolio</p>
            <p className="quotesStyle">
              <span>Show, Dont tell, Seeing is believing</span> <br />
              <span>A picture paints a thousand words</span>
            </p>
          </div>
          <WorkComponent />
          <div onClick={ this.expandToggle }
           className="viewMoreContainer">
            	<p className="fancy-button bg-gradient1">
                <span>
                  {this.state.expanded ? 'View Less' : 'View More'}
                </span>
              </p>
            <div>
              <ParticleEffect
                hidden={hidden}
                onComplete={this._onAnimationComplete}
                style={'fill'}
                color={'DarkTurquoise'}
                type={'triangle'}
                duration={1000}
                direction={'top'}
                particlesAmountCoefficient={1}
                oscillationCoefficient={5}>
                 <div>
                 <div class="scrolldown-container">
                   <div class="scrolldown-btn">
                     <svg version="1.1" id="Слой_1" x="0px" y="0px" width="50px" height="80px" viewbox="0 0 50 80" enable-background="new 0 0 50 80">
                       <path class="first-path" fill="#00000"d="M0 10 L10 21 L20 10"></path>
                       <path class="second-path" fill="#00000"d="M0 20 L10 31 L20 20"></path>
                     </svg>
                   </div>
                 </div>
               </div>
             </ParticleEffect>
            </div>
         </div>
          <AnimakitExpander expanded={this.state.expanded} ref={(div) => { this.moreProjectContainer = div;}}>
            <div className = "moreProjectContainer">
              <SurveyComponent />
            </div>
          </AnimakitExpander>
        </div>
    );
  }
}

export default Portfolio;
