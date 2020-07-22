import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  value: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  name?: number | string;
  placeholder?: string;
};

const Root = styled.input`
  width: 100%;
  font-size: 1rem;
  color: ${props => props.theme.textColors.black};
  ::placeholder {
    color: #ccc;
  }
`;

const InputSearch: FC<Props> = props => {
  return (
    <Root
      type={`text`}
      name={props.name}
      value={props.value}
      onBlur={props.handleBlur}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  );
};

export default InputSearch;
