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
  width: 340px;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Page = ({data: { loading, repositoryOwner}}) =>
    <Container>
      <View>
        {
          !loading && repositoryOwner ?
            <FlatList data={repositoryOwner.repositories.nodes} renderItem={({item}) => <Text>{item.name}</Text>}></FlatList>
            :
            <Text>Carregando!</Text>
        }
      </View>
    </Container>

const query = gql`
  query LastRepositories($username: String!) {
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
  options: (props) => ({variables: { username: props.username } }),
});

export default compose(
  data,
  pure
)(Page);
