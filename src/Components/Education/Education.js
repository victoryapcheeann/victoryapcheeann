import React, { Component } from 'react';
import styled from "styled-components";

const EducationStyle = styled.div`
    height: 100vh;
    width: 100vw;
`;

class Education extends Component{
  render() {
    return (
      <EducationStyle>
        <p>Education</p>
      </EducationStyle>
    );
  }
}

export default Education;
