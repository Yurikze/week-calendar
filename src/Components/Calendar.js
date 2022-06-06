import styled from 'styled-components';
import List from './List';
import MonthSwitch from './MonthSwitch';

const StyledCalendar = styled.div`
  background-color: #f6f6f6;
  padding: 20px 30px;
`;

const Calendar = ({ calendar }) => {
  return (
    <StyledCalendar>
      <List calendar={calendar} />
      <MonthSwitch />
    </StyledCalendar>
  );
};

export default Calendar;
