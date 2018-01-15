import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { compose, pure, branch, renderComponent } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Repositories from './Repositories';

const InstructionsText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin: 30px 40px;
  line-height: 40px;
  color: #444;
`;

const Page = () =>
  <View></View>

const List = (props) =>
    <View>
      <Repositories username={props.username} />
    </View>

const Instructions = () =>
  <View>
    <InstructionsText>This is Astrohub, an app built with react-native, apollo,
    recompose and styled-components, in which the last 10 repositories of a github user are listed.
    To use it, enter a valid github username in the field above.</InstructionsText>
  </View>

export default branch(
  props => props.username,
  renderComponent(List),
  renderComponent(Instructions),
  pure
)(Page);
