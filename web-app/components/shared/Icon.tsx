import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  size?: number;
};

const IconRoot = styled.img<Props>`
  display: flex;
  height: ${(props: Props) => props.size || 40}px;
  width: ${(props: Props) => props.size || 40}px;
`;

const Icon: React.FC<Props> = (props: Props) => {
  const path: string = `/icons/${props.name}.svg`;
  return <IconRoot src={path} {...props} />;
};

export default Icon;
