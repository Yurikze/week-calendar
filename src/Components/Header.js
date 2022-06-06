import styled from 'styled-components';
import AddButton from './AddButton';
import Logo from './Logo';

const HeaderStyled = styled.header`
  padding: 50px;
  color: ${(props) => props.theme.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <AddButton />
    </HeaderStyled>
  );
};

export default Header;
