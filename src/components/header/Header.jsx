import styled from 'styled-components';
import React from 'react';
import logoImg from '../../assets/images/logo.png';

const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: sticky;
  background: white;
  top: 0;
  width: 100%;
  height: 60px;
  box-shadow: 0 0 4px 0 black;
  padding: 0 40px;
`;

const Logo = styled.img`
  height: 30px;
`;

const Header = () => (
  <HeaderWrapper>
    <Logo src={logoImg} />
  </HeaderWrapper>
);

export default Header;
