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

const InstructionsText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-top: 30px;
`;

const Page = () =>
  <View></View>

const List = (props) =>
    <View>
      <Repositories username={props.username} />
    </View>

const Instructions = () =>
  <View>
    <InstructionsText>Enter a valid Github username</InstructionsText>
  </View>

export default branch(
  props => props.username,
  renderComponent(List),
  renderComponent(Instructions),
  pure
)(Page);
