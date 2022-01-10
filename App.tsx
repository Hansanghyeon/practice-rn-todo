import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList } from 'react-native';
import styled from 'styled-components/native';
import Theme from './src/Theme';
import { ThemeProvider } from 'styled-components';
import Create from './src/Create';
import TodoItem from './src/TodoItem';

const Container = styled(View)`
  padding-top: 60px;
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
`;

const CreateRow = styled(View)`
  margin-bottom: 16px;
`;

const MainText = styled(Text)`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: ${({ theme }) => theme.color.base};
`;

export interface Todo {
  content: string,
  done: boolean,
  date: Date,
}

export default function App() {
  const [todos, setTodos] = useState<Array<Todo>>();

  function addItem(todo: Todo) {
    if (todos !== undefined) { 
      setTodos([...todos, todo]);
    } else {
      setTodos([todo]);
    }
  }

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <MainText>TODO</MainText>
        <CreateRow>
          <Create addItem={addItem} />
        </CreateRow>
        <FlatList data={todos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <TodoItem content={item.content} />}
        />
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}
