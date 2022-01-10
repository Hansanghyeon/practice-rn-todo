import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styled from 'styled-components';
import type { Todo } from '../App'

const TodoInput = styled(TextInput)`
  padding: 8px;
  background-color: #e7e7e7;
  border-radius: 4px;
`;

const Create = ({ addItem }: {
  addItem: (todo: Todo) => void,
}) => {
  const [text, setText] = useState('');

  const onSubmit = () => {
    if (text !== '') { 
      const todo: Todo = {
        content: text,
        done: false,
        date: new Date(),
      }
      addItem(todo);
      setText('');
    }
  }

  return (
    <View>
      <TodoInput
        placeholder="+ 기본함에 작업을 추가하십시오. 저장하려면 enter를 누르십시오."
        onChangeText={text => setText(text)}
        defaultValue={text}
        returnKeyType="done"
        onEndEditing={() => console.log("onEndEditing")}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
}

export default Create
