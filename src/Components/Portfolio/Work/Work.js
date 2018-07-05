import React, { Component } from 'react';
import './Work.css';
import pizzaPicture from '../../../image/pizza.png'

const myWorksStyle1 = [
  {title: 'ABC', description1: 'EFG', description2: 'WEEE', description3: 'ecc'},
  {title: 'ABC', description1: 'EFG', description2: 'WEEE', description3: 'ecc'}
];

const myWorksStyle2 = [
  {title: 'ABC', description1: 'Julia dances in the deep dark', description2: 'She loves the smell of the ocean', description3: 'And dives into the morning light'},
  {title: 'ABC', description1: 'EFG', description2: 'WEEE', description3: 'ecc'}
];

class work extends Component{
  render() {
    return (
        <div class="workContainer">
                  <div class="grid">
                  {myWorksStyle1.map((myWork) => (
                    <figure class="effect-julia">
                      <img src={pizzaPicture} alt="img21"/>
                      <figcaption>
                        <h2>{myWork.title}</h2>
                        <div>
                          <p>{myWork.description1}</p> <br />
                          <p>{myWork.description2}</p> <br />
                          <p>{myWork.description3}</p>
                        </div>
                        <a href="#">View more</a>
                      </figcaption>
                    </figure>
                  ))}
                  </div>
                  <div class="grid">
                  {myWorksStyle2.map((myWork) => (
                    <figure class="effect-apollo">
                      <img src={pizzaPicture} alt="img21"/>
                      <figcaption>
                        <h2>{myWork.title}</h2>
                        <div className = "workDescriptionContainer">
                          <p>{myWork.description1}</p> <br />
                          <p>{myWork.description2}</p> <br />
                          <p>{myWork.description3}</p>
                        </div>
                        <a href="#">View more</a>
                      </figcaption>
                    </figure>
                  ))}
                </div>
        </div>
    );
  }
}

export default work;
