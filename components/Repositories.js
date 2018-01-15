import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import styled from 'styled-components/native';
import { compose, pure } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Repository from './Repository';

const Container = styled.View`
  margin-top: 10px;
  width: 320px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemList = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  color: #333;
  text-align: center;
`;

const LoadingText = styled.Text`
  font-size: 18px;
  background-color: #070;
  color: #FFF;
  margin: 70px 30px;
  padding: 30px 60px;
  border-radius: 50;
`;

const ErrorText = styled.Text`
  font-size: 18px;
  background-color: #D00;
  color: #FFF;
  margin: 70px 30px;
  padding: 30px 60px;
  border-radius: 50;
  text-align: center;
  line-height: 30px;
`;

const Repositories = ({data: { loading, repositoryOwner, refetch }}, props) =>
    <View>
      {
        !loading && repositoryOwner ?
          <Container>
            <FlatList keyExtractor={(item, index) => index} data={repositoryOwner.repositories.nodes} renderItem={({item}) => <Repository item={item} />}></FlatList>
          </Container>
          :
          <View>
            {
              loading ?
                <LoadingText>Searching...</LoadingText>
                :
                <ErrorText>Sorry, username not found</ErrorText>
            }
          </View>
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
