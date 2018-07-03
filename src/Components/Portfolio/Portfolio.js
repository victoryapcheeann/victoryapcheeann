import React, { Component } from 'react';
import './Portfolio.css';
import WorkComponent from './Work/Work'
import PostComponent from './Post/Post'
import AnimakitExpander from 'animakit-expander';

class Portfolio extends Component{
  constructor(props) {
    super(props)
    this.state = {
        expanded: 'false'
    };
  }
  componentDidMount() {
    this.setState({
      expanded: 'false'
    })
  }

  expandToggle = () => {
     this.setState({
       expanded: !this.state.expanded
     })
   }

  render() {
    return (
      <div className="portfolioBackground">
        <div className="portfolioContainer">
          <div className="portfolioHeaderStyle">
            <p className="portfolioHeader">My Works</p>
            <p className="quotesStyle">
              <span>Show, Dont tell, Seeing is believing</span> <br />
              <span>A picture paints a thousand words</span>
            </p>
          </div>
          <WorkComponent />
          <WorkComponent />
          <p onClick={this.expandToggle}>View more</p>
          <AnimakitExpander expanded={this.state.expanded}>
            <PostComponent />
          </AnimakitExpander>
        </div>
        </div>
    );
  }
}

export default Portfolio;
