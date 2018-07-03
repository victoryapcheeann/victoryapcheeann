import React, { Component } from 'react';
import './Work.css';
import pizzaPicture from '../../../image/pizza.png'

class work extends Component{
  render() {
    return (
        <div class="workContainer">
                  <div class="grid">
          					<figure class="effect-julia">
          						<img src={pizzaPicture} alt="img21"/>
          						<figcaption>
          							<h2>Passionate <span>Julia</span></h2>
          							<div>
          								<p>Julia dances in the deep dark</p>
          								<p>She loves the smell of the ocean</p>
          								<p>And dives into the morning light</p>
          							</div>
          							<a href="#">View more</a>
          						</figcaption>
          					</figure>
          					<figure class="effect-julia">
          						<img src={pizzaPicture} alt="img22"/>
          						<figcaption>
          							<h2>Passionate <span>Julia</span></h2>
          							<div>
          								<p>Julia dances in the deep dark</p>
          								<p>She loves the smell of the ocean</p>
          								<p>And dives into the morning light</p>
          							</div>
          							<a href="#">View more</a>
          						</figcaption>
          					</figure>
          				</div>
        </div>
    );
  }
}

export default work;
