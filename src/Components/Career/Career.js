import React, { Component } from 'react';
import './Career.css';
import FaLaptop from 'react-icons/lib/fa/laptop';

const myCareers = [
  {company: 'NCS Group', companyLogo: 'ncs', position: 'Application Consultant',
  startDate: 'Apr 2017', endDate: 'Present',
  description: [
  'Analyse process specification to program codes, conforming to program guidelines',
  'Make changes to configurable items, which include hardware, software, documentation',
  'Assist in the integration testing, system testing, User Acceptance Test to ensure smooth execution of programs in the production environment',
  'Prepare & maintain up-to-date system documentation',
  'Investigate all reported problems/erros & initiate amendments & testing so that the sytem can operate correctly & efficiently'
  ]},
  {company: 'Island Peak Tech', companyLogo: 'islandpeaktech',
  startDate: 'Oct 2016', endDate: 'Mar 2017', position: 'Software Developer Intern (Backend)',
  description: [
  'InHi Travel is a mobile app that provides user with Singapore travel information',
  'Primary job responsibility: Develop the back-end to support the iOS app.',
  'Collaborating with the front-end developers and other team members to establish objectives and design more functional, cohesive codes to enhance the user experience.',
  'Compile and analyze data, processes, and codes to troubleshoot problems and identify areas for improvement.',
  'Developing ideas for new programs, products, or features by monitoring industry developments and trends.'
  ]}
];

class Career extends Component{
  render() {
    return (
      <div className="careerContainer">
        <div className="columnStyle">
          <p className="h1Style">Career</p>
          <p className="quotesStyle">
            <span>Choose a job you love and you will never have to work a day in your life.”</span>
          </p>
        </div>
      <div className="main">
        <ul className="career_tmtimeline">
        {myCareers.map((myCareer) => (
          <li>
            <time className="career_tmtime"><span>{myCareer.startDate}</span> <span>to</span><span>{myCareer.endDate}</span></time>
            <div className="career_tmicon"><FaLaptop /></div>
            <div className="career_tmlabel">
              <div className="careerDetailsContainer">
                <img src={`/${myCareer.companyLogo}.png`} alt="img21" className="career_companyLogo"/>
                <div className="columnLeftStyle careerDetailsMargin">
                  <h2>{myCareer.company}</h2>
                  <span>{myCareer.position}</span>
                </div>
              </div>
              <br />
              {myCareer.description.map((description) => (
                <li className='listStyle'>{description}</li>
              ))}
            </div>
          </li>
        ))}
        </ul>
        </div>
      </div>
    );
  }
}

export default Career;
