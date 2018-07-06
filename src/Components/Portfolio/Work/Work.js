import React, { Component } from 'react';
import './Work.css';
import './Queries.css';

const myWorksStyle1 = [
  {title: 'ABC', description1: 'EFG', description2: 'WEEE', description3: 'ecc'},
  {title: 'ABC', description1: 'EFG', description2: 'WEEE', description3: 'ecc'},
  {title: 'ABC', description1: 'EFG', description2: 'WEEE', description3: 'ecc'},
  {title: 'ABC', description1: 'EFG', description2: 'WEEE', description3: 'ecc'}
];

class work extends Component{
  render() {
    return (
        <div class="workStyle">
                  {myWorksStyle1.map((myWork) => (
                  <div>
                    <div class="grid">
                      <figure class="effect-julia">
                        <img src="/pizza.png" alt="img21"/>
                        <figcaption>
                          <h2>{myWork.title}</h2>
                          <div>
                            <p>{myWork.description1}</p> <br />
                            <p>{myWork.description2}</p> <br />
                            <p>{myWork.description3}</p> <br /> <br />
                            <p><a href="#">Visit Project</a></p>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  ))}
        </div>
    );
  }
}

export default work;
