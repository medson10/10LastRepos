import React from 'react';
import styled from 'styled-components/native';
import { compose, pure } from 'recompose';

const Container = styled.View`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #49F;
  border-radius: 60;
  padding: 10px 10px;
`;

const Item = styled.Text`
  color: #FFF;
  text-align: center;
  font-size: 14px;
  margin-top: 8px;
  line-height: 25px;
  font-weight: bold;
`;

const Page = (props) =>
    <Container>
      <Item>{props.item.name ? props.item.name.toString() : ''}</Item>
      <Item>{props.item.description ? props.item.description.toString() : ''}</Item>
      <Item>{props.item.forkCount ? props.item.forkCount.toString() : '0'} Forks</Item>
      <Item>{props.item.isPrivate ? 'Private' : 'Not Private'}</Item>
    </Container>

export default compose(
  pure
)(Page);
