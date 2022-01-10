import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Item = styled(View)`
  padding: 8px;
`;

const TodoItem: React.FC<{content: string}> = (props) => {
  return (
    <Item {...props}>
      <Text>{props.content}</Text>
    </Item>
  )
}

export default TodoItem
