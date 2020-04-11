import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../util/constants';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const InputRoot = styled.input`
  outline: none;
  width: 200px;
  height: 40px;
  border: 0px;
  border-bottom: 1px solid ${COLORS.PRIMARY};
`;

const TextInput: React.FC<Props> = (props: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <InputRoot
      type="text"
      {...props}
      value={props.value}
      onChange={handleChange}
    />
  );
};

export default TextInput;
