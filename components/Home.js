import React from 'react';
import styled from 'styled-components/native';
import {FlatList, Text} from 'react-native';
import { setContext } from 'apollo-link-context';
import {compose, withStateHandlers, withState, pure} from 'recompose';
import List from './List';

const Container = styled.View `
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 30px;
`;

const Title = styled.Text `
  color: #FFF;
  background-color: #006;
  font-size: 40px;
  padding: 0 95px;
`;

const InputForm = styled.View`
  display: flex;
  flex-direction: row;
  height: 20px;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
`;

const Username = styled.TextInput `
  margin: 40px 0px;
  width: 250px;
  height: 50px;
  color: #006;
  padding-left: 10px;
  text-align: center;
`;

const Page = ({username, setUsername}) =>
  <Container>
    <Title>Astrohub</Title>
    <InputForm>
      <Username placeholder="Github Username" underlineColorAndroid={'#006'} clearButtonMode={'unless-editing'} type="text" value={ username } onChange={(e) => setUsername(e.target.value)}/>
    </InputForm>
    <List username={username}/>
  </Container>

const username = withState('username', 'setUsername', 'medson10');


export default compose(
  username,
  pure
)(Page);
