import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components/native';
import {compose, pure} from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Container = styled.View`
  background-color: #EFEFEF;
  border: .6px solid #333;
  margin-top: 20px;
  width: 320px;
  height: 400px;
`;

const query = gql`
  query LastRepositories($username: String) {
    repositoryOwner (login: $username) {
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

const data = graphql(query, {
  options: (props) => {
    variables: {username: props.username}
  }
});

const Page = ({data: { loading, repositories}}) =>
    <Container>
      <FlatList data={repositories} renderItem={({item}) => <Text>{item.key}</Text>}></FlatList>
    </Container>

export default compose(
  data,
  pure
)(Page);
