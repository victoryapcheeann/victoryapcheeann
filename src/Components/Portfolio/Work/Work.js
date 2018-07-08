import React, { Component } from 'react';
import './Work.css';
import './Queries.css';
import Zoom from 'react-reveal/Zoom';

const myWorksStyle1 = [
  {title: 'Dasher', picture: 'dashboard', description1: 'Show how much you spend!', description2: 'Control your expenses!', link: '', category: ['UX Design', 'Data Visualisation']},
  {title: 'Pizzy', picture: 'pizza', description1: 'Best pizza in town!', description2: 'Check it out!', link: '', category: ['UX Design', 'HTML', 'CSS']},
  {title: 'Revents', picture: 'events', description1: 'Feeling bored?', description2: 'Come and join our events now!', link: '', category: ['Reactjs', 'Firebase', 'Redux']},
  {title: 'Mr Sunny', picture: 'weather', description1: 'Better to be safe than sorry!', description2: 'Check your weather now!', link: '', category: ['UX Design', 'Reactjs']}
];

class work extends Component{
  render() {
    return (
        <div class="workStyle">
          <Zoom left duration={1000} delay={100}>
                  {myWorksStyle1.map((myWork) => (
                  <div>
                    <div class="grid">
                      <figure class="effect-julia">
                        <img src={`/${myWork.picture}.png`} alt="img21"/>
                        <figcaption>
                          <h2>{myWork.title}</h2>
                          <div>
                            <p>{myWork.description1}</p> <br />
                            <p>{myWork.description2}</p> <br />
                            <p>
                              {myWork.category.map((myCategory) => (
                              <span className="workBtnStyle categoryGradient">{myCategory} </span>
                              ))}
                            </p>
                            <br /> <br />
                            {myWork.link.trim() == ""?
                            <p><a className="workBtnStyle wipGradient">Work in progress</a></p>
                              :
                            <p><a href={`${myWork.link}`} className="workBtnStyle visitGradient">Visit Project</a></p>
                            }
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  ))}
            </Zoom>
        </div>
    );
  }
}

export default work;
