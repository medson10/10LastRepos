import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import styled from 'styled-components/native';
import { compose, pure } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Container = styled.View`
  margin-top: 20px;
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemList = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  color: #006;
  text-align: center;
`;

const Repositories = ({data: { loading, repositoryOwner, refetch }}, props) =>
    <View>
      {
        !loading && repositoryOwner ?
          <Container>
            <FlatList keyExtractor={(item, index) => index} data={repositoryOwner.repositories.nodes} renderItem={({item}) => <ItemList>{item.name}</ItemList>}></FlatList>
          </Container>
          :
          <Text>{loading ? 'Loading...' : 'Github user not found'}</Text>
      }
    </View>

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
  options: (props) => ({variables: { username: props.username }, errorPolicy: 'all'}),
});

export default compose(
  data,
  pure
)(Repositories);
