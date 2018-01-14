import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { compose, pure, branch, renderComponent, shouldUpdate } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Repositories from './Repositories';

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

const Page = (props) =>
  <View></View>

const List = (props) =>
    <View>
      <Repositories username={props.username}/>
    </View>

const About = () =>
  <View>
    <Text>Put a github username and press search</Text>
  </View>

export default branch(
  props => props.search,
  renderComponent(List),
  renderComponent(About),
)(Page);
