import React, { Component } from 'react';
import styled from "styled-components";

const CareerStyle = styled.div`
  height: 100vh;
  width: 100vw;
`;

class Career extends Component{
  render() {
    return (
      <CareerStyle>
        <p>Career</p>
      </CareerStyle>
    );
  }
}


export default Career;
