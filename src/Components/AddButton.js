import { ReactComponent as Plus } from '../images/172525_plus_icon.svg';
import styled from 'styled-components';

const AddButtonStyled = styled.button`
  color: ${(props) => props.theme.red};
  height: 22px;
  width: 22px;
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

const AddButton = () => {
  return (
    <AddButtonStyled>
      <Plus {...defaultAttributes} />
    </AddButtonStyled>
  );
};

export default AddButton;
