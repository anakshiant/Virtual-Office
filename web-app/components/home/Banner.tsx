import React from 'react';
import styled from 'styled-components';
import Button from '../shared/Button';
import { COLORS } from '../../util/constants';

const BannerRoot = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  justify-content: space-evenly;
`;

const LeftSectionText = styled.h1`
  font-size: 5vw;
  font-weight: bold;
`;

const RightSectionText = styled.div`
  font-weight: bold;
  font-size: 10vw;
  color: white;
  background: ${COLORS.PRIMARY};
`;

const AddSection = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
`;

const JoinUsSection = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const JoinUsButton = styled(Button)`
  height: 40px;
  width: 130px;
  font-size: 15px;
  margin-top: 20px;
`;

const BannerImageSection = styled.div`
  display: flex;
  justify-content: center;
`;

const BannerImage = styled.img`
  width: 60vw;
  height: 400px;
`;

const Banner = () => {
  return (
    <BannerRoot>
      <BannerImageSection>
        <BannerImage src="/images/office.jpg" />
      </BannerImageSection>
      <AddSection>
        <LeftSectionText>Introducing</LeftSectionText>
        <RightSectionText>Virtuoso</RightSectionText>
      </AddSection>
      <JoinUsSection>
        <JoinUsButton title="Join Us" onClick={() => {}} icon="tick" />
      </JoinUsSection>
    </BannerRoot>
  );
};

export default Banner;
