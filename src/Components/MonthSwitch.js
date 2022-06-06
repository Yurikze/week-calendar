import styled from 'styled-components';
import { ReactComponent as ArrowRight } from '../images/arrow-right-3098.svg';
import { ReactComponent as ArrowLeft } from '../images/arrow-left-3099.svg';

const StyledMonthSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  color: ${(props) => props.theme.red};
  height: 17px;
  width: 17px;
  border: none;
  background-color: transparent;
  padding: 0;
`;

const defaultAttributes = {
  width: '100%',
  preserveAspectRatio: 'xMidYMid meet',
  style: { maxWidth: 'inherit', maxHeight: 'inherit', height: 'inherit' },
  fill: 'currentColor',
};

const MonthSwitch = () => {
  return (
    <StyledMonthSwitch>
      <Button>
        <ArrowLeft {...defaultAttributes} />
      </Button>
      MonthSwitch
      <Button>
        <ArrowRight {...defaultAttributes} />
      </Button>
    </StyledMonthSwitch>
  );
};

export default MonthSwitch;
