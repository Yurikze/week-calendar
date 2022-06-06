import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-size: 22px;
  margin: 0;
  font-weight: normal;
`;

const Logo = () => {
  return <StyledLogo>Interview Calendar</StyledLogo>;
};

export default Logo;
