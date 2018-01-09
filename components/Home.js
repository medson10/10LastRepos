import React from 'react';
import styled from 'styled-components/native';
import {FlatList, Text} from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import {compose, withStateHandlers} from 'recompose';
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
`;

const Button = styled.Button `
  background: #006;
  height: 100%;
  margin-left: 10px;
`;

const query = gql`
  query LastRepositories {
    repositoryOwner (login: "medson104827394287") {
      repositories(last: 10) {
        nodes {
          name
          description
          forkCount
          isPrivate
        }
      }
    }
  }
`;

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.github.com/graphql', headers: {'Authorization': 'Bearer d35b03175b5a4f09ffa861167fa1666935c7bd40'} }),
  cache: new InMemoryCache()
});

const Page = ({username, search}) =>
    <ApolloProvider client={client}>
      <Container>
        <Title>Astrohub</Title>
        <InputForm>
          <Username placeholder="Github Username" underlineColorAndroid={'#006'} clearButtonMode={'unless-editing'}/>
          <Button title="Search" onPress={this.search} color="#006"></Button>
        </InputForm>
        <List />
      </Container>
    </ApolloProvider>

export default compose(

)(Page);
