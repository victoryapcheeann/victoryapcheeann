import React, { Component } from 'react';
import './Work.css';
import './Queries.css';
import Zoom from 'react-reveal/Zoom';
import { myWorksStyle1 } from '../../../Constants';

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
