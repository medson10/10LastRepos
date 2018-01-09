import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #EFEFEF;
  border: .6px solid #333;
  margin-top: 20px;
  width: 320px;
  height: 400px;
`;

export default class List extends React.Component {

  render() {
    return (
      <Container>
        <FlatList data={this.props.list} renderItem={({item}) => <Text>{item.key}</Text>}></FlatList>
      </Container>
    );
  }
}
