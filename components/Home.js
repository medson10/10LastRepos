import React from 'react';
import styled from 'styled-components/native';
import {FlatList, Text, Button, View} from 'react-native';
import { setContext } from 'apollo-link-context';
import {compose, withStateHandlers, withState, pure, branch} from 'recompose';
import List from './List';

const Container = styled.View `
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Title = styled.Text `
  color: #FFF;
  background-color: #006;
  font-size: 40px;
  padding: 0 95px;
  margin-top: 25px;
  width: 100%;
`;

const InputForm = styled.View`
  display: flex;
  flex-direction: row;
  height: 20px;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 25px;
`;

const Username = styled.TextInput `
  margin: 40px 0px;
  width: 250px;
  height: 50px;
  color: #006;
  padding-left: 10px;
  text-align: center;
  font-size: 15px;
`;

const username = withState('username', 'setUsername', '');

const Page = ({username, setUsername}) =>
  <Container>
    <Title>Astrohub</Title>
    <InputForm>
      <Username placeholder="Github Username" underlineColorAndroid={'#006'} type="text" value={ username } onChangeText={(text) => setUsername(text)}/>
    </InputForm>
    <View>
      <List username={username} />
    </View>
  </Container>

export default compose(
  username,
  pure
)(Page);
