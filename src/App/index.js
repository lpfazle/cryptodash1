import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import styled, {css} from "styled-components";

const MyButton = styled.button`
  color: green;
  border: 2px solid blue;
  border-radius: 2px;
  margin: 5px;
  ${props => props.primary && css`
    color: palevioletred;
  `}
`;

const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;

class App extends React.Component {
  render() {
    return (
        <div>
          <WelcomeMessage/>
          <MyButton>Hello</MyButton>
          <MyButton primary>Hello</MyButton>
          <TomatoButton>Hello</TomatoButton>
        </div>
    );
  }
}

export default App;
