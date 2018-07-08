import React, { Component } from 'react';
import './Experience.css';
import FaLaptop from 'react-icons/lib/fa/laptop';

const myExperiences = [
  {company: 'www.victoryap.com', companyLogo: 'victoryap', position: 'Self-taught developer',
  startDate: '2017', endDate: 'Present',
  techStack: ['Reactjs', 'React Native', 'MERN', 'AWS/Firebase', 'Jest & Jamine', 'Go'],
  description: [
  'Keeping up to date with latest technology trend',
  'Inspiration & Knowledge: Udemy, Codepen, Dribble, Pininterest, Youtube',
  'Researched and prepared over 100 types of different UI Component',
  'Prevent reinvent the wheel, build beautiful frontend efficiently',
  'Focusing on web and mobile development at the moment',
  'Open to opportunities such as AI, Data Science, Blockchain'
  ]},
  {company: 'NCS Group', companyLogo: 'ncs', position: 'Application Consultant',
  startDate: 'Apr 2017', endDate: 'Present',
  techStack: ['SQL', 'C#', '.NET Framework'],
  description: [
  'Analyse process specification to program codes, conforming to program guidelines',
  'Make changes to configurable items, which include hardware, software, documentation',
  'Assist in the integration testing, system testing, User Acceptance Test to ensure smooth execution of programs in the production environment',
  'Prepare & maintain up-to-date system documentation',
  'Investigate all reported problems/erros & initiate amendments & testing so that the sytem can operate correctly & efficiently'
  ]},
  {company: 'Island Peak Tech', companyLogo: 'islandpeaktech', position: 'Software Developer Intern (Backend)',
  startDate: 'Oct 2016', endDate: 'Mar 2017',
  techStack: ['SQL', 'C#', '.NET Framework'],
  description: [
  'InHi Travel is a mobile app that provides user with Singapore travel information',
  'Primary job responsibility: Develop the back-end to support the iOS app.',
  'Collaborating with the front-end developers and other team members to establish objectives and design more functional, cohesive codes to enhance the user experience.',
  'Compile and analyze data, processes, and codes to troubleshoot problems and identify areas for improvement.',
  'Developing ideas for new programs, products, or features by monitoring industry developments and trends.'
  ]}
];

class Experience extends Component{
  render() {
    return (
      <div className="experienceContainer">
        <div className="columnStyle">
          <p className="h1Style">Experience</p>
          <p className="quotesStyle">
            <span>Choose a job you love and you will never have to work a day in your life.”</span>
          </p>
        </div>
      <div className="main">
        <ul className="experience_tmtimeline">
        {myExperiences.map((myExperience) => (
          <li>
            <time className="experience_tmtime"><span>{myExperience.startDate}</span> <span>to</span><span>{myExperience.endDate}</span></time>
            <div className="experience_tmicon"><FaLaptop /></div>
            <div className="experience_tmlabel">
              <div className="experienceDetailsContainer">
                <img src={`/${myExperience.companyLogo}.png`} alt="img21" className="experience_companyLogo"/>
                <div className="columnLeftStyle experienceDetailsMargin">
                  <h2>{myExperience.company}</h2>
                  <span>{myExperience.position}</span>
                </div>
              </div>
              <p>
                {myExperience.techStack.map((techStack) => (
                <span className="techStackStyle techStackGradient">{techStack} </span>
                ))}
              </p>
              {myExperience.description.map((description) => (
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

export default Experience;
