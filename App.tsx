import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import Theme from './src/Theme';
import { ThemeProvider } from 'styled-components';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const MainText = styled(Text)`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: red;
  background-color: ${({ theme }) => theme.color.white};
`;

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <MainText>Open up App.tsx to start working on your app!</MainText>
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}
