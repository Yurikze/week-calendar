import styled from 'styled-components';
import DayItem from './DayItem';

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0 0 15px;
`;

const List = ({ calendar }) => {
  console.log(calendar)
  return (
    <StyledList>
      {calendar.map(date => <DayItem key={date.id} date={date} />)}
    </StyledList>
  );
};

export default List;
