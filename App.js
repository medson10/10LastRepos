import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Home from './components/Home';

const Container = styled.View `
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export default class App extends React.Component {

  render() {
    return (
        <Container>
          <StatusBar />
          <Home />
        </Container>
    );
  }
}
