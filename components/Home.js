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
`;

const username = withState('username', 'setUsername', 'medson10');
const search = withState('search', 'setSearch', false);

const Page = ({username, setUsername, search, setSearch}) =>
  <Container>
    <Title>Astrohub</Title>
    <InputForm>
      <Username placeholder="Github Username" underlineColorAndroid={'#006'} clearButtonMode={'unless-editing'} type="text" value={ username } onChange={(e) => setUsername(e.target.value)} disabled={search}/>
      {
        search ?
          <Button title="Clear" onPress={(e) => setSearch(!search)}></Button>
          :
          <Button title="Search" onPress={(e) => setSearch(!search)}></Button>
      }
    </InputForm>
    <View>
      <List username={username} search={search}/>
    </View>
  </Container>

export default compose(
  username,
  search,
  pure
)(Page);
