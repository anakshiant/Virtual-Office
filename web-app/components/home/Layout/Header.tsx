import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../util/constants';
import Icon from '../../shared/Icon';
import Button from '../../shared/Button';

const HeaderRoot = styled.header`
  display: flex;
  background: ${COLORS.PRIMARY};
  color: white;
  height: 40px;
  padding: 10px;
  justify-content: space-between;
`;

const HeaderTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 10px;
`;

const HeaderLeftSection = styled.div`
  display: flex;
`;

const HeaderRightSection = styled.div`
  padding: 5px;
  display: flex;
`;


const Header: React.FC = () => {
  return (
    <HeaderRoot>
      <HeaderLeftSection>
        <Icon name="story" size={40} />
        <HeaderTitle>Virtuoso</HeaderTitle>
      </HeaderLeftSection>
      <HeaderRightSection>
        <Button title="Login" onClick={() => {}} bordered />
        <Button title="Sign Up" onClick={() => {}} bordered />
      </HeaderRightSection>
    </HeaderRoot>
  );
};

export default Header;
