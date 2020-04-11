import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../util/constants';
import Icon from './Icon';

type Props = {
  title: string;
  color?: string;
  disabled?: boolean;
  background?: string;
  icon?: string;
  onClick?: () => void;
  bordered?: boolean;
};

const ButtonRoot = styled.button<Props>`
  display: flex;
  align-items: center;
  text-align: center;
  background: ${(props: Props) =>
    props.bordered ? 'white' : props.background || COLORS.PRIMARY};
  color: ${(props: Props) =>
    props.bordered
      ? props.background || COLORS.PRIMARY
      : props.color || 'white'};
  font-weight: 600;
  font-size: 13px;
  height: 30px;
  cursor: pointer;
  border-radius: 4px;
  outline: 0;
  & + & {
    margin-left: 10px;
  }
`;

const IconRoot = styled(Icon)`
  margin-left: 10px;
  margin-right: 10px;
`;

const Button: React.FC<Props> = (props: Props) => {
  return (
    <ButtonRoot {...props}>
      {props.icon && <IconRoot name={props.icon} size={30} />}
      {props.title}
    </ButtonRoot>
  );
};

export default Button;
