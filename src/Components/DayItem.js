import styled from 'styled-components';

const StyledDayItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledDay = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

const StyledDate = styled.span`
  font-size: 20px;
`;

const DayItem = ({ date }) => {
  console.log(date)
  return (
    <StyledDayItem>
      <StyledDay>{date.designation}</StyledDay>
      <StyledDate>{date.day}</StyledDate>
    </StyledDayItem>
  );
};

export default DayItem;
