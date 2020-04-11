import React from 'react';
import styled from 'styled-components';
import Header from './Header';

type Props = {
  children: React.ReactChild | React.ReactChild[];
};

const LayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const LayoutSection = styled.div`
  display: flex;
`;

const Layout: React.FC<Props> = (props) => {
  return (
    <LayoutRoot>
      <Header />
      <LayoutSection>{props.children}</LayoutSection>
    </LayoutRoot>
  );
};

export default Layout;
