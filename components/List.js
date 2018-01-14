import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { compose, pure, branch, renderComponent, shouldUpdate } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Container = styled.View`
  background-color: #EFEFEF;
  border: .6px solid #333;
  margin-top: 20px;
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Page = () =>
  <View></View>

const List = ({data: { loading, repositoryOwner}}) =>
    <View>
      {
        !loading && repositoryOwner ?
          <Container>
            <FlatList keyExtractor={(item, index) => index} data={repositoryOwner.repositories.nodes} renderItem={({item}) => <Text>{item.name}</Text>}></FlatList>
          </Container>
          :
          <Text>Loading...</Text>
      }
    </View>

const About = () =>
  <View>
    <Text>Put a github username and press search</Text>
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
  options: (props) => ({variables: { username: props.username }, errorPolicy: 'all' }),
});

const ListComponent = compose(
  shouldUpdate(
    (props) => !props.search
  ),
  data,
  pure
)(List);

export default branch(
  props => props.search,
  renderComponent(ListComponent),
  renderComponent(About),
)(Page);
