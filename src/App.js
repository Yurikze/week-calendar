import { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Calendar from './Components/Calendar';
import Header from './Components/Header';
import mockCalendar from './mock/mock-calendar.json'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  max-width: 740px;
  width: 100%;
  margin: 0 auto;
  color: ${props => props.theme.dark};
`;

function App() {
  const theme = {
    red: '#FF3131',
    dark: '#030303',
  };

  const [calendar, setCalendar] = useState(mockCalendar)

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <Calendar calendar={calendar} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
