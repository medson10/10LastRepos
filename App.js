import React from 'react';
import { StatusBar, Text } from 'react-native';
import styled from 'styled-components/native';
import { ApolloProvider, graphql } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { compose } from 'recompose';

import Home from './components/Home';

const Container = styled.View `
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const client = new ApolloClient({
  link: new HttpLink(
    { uri: 'https://api.github.com/graphql',
      headers: {'Authorization': 'Bearer <put your token here>'}
    }),
  cache: new InMemoryCache()
});

const Page = () =>
  <ApolloProvider client={client}>
    <Container>
      <Home />
    </Container>
  </ApolloProvider>

export default compose()(Page);
