import { FC } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  name: string;
  id: string;
  text: string;
  checked: boolean;
  handleChange: any;
};

const Root = styled.div`
  input + label {
    padding-left: 2rem;
    position: relative;
  }
  input + label::before {
    content: '';
    display: 'block';
    position: absolute;
    top: 3px;
    left: 0px;
    width: 16px;
    height: 16px;
    border: 1px solid ${props => props.theme.colors.pale};
    border-radius: 100vw;
  }
  input:checked + label::after {
    content: '';
    display: block;
    position: absolute;
    top: 6px;
    left: 3px;
    width: 10px;
    height: 10px;
    background: ${props => props.theme.colors.secondary};
    border-radius: 50%;
  }
`;
const Input = styled.input`
  display: none;
`;
const Label = styled.label``;

const NomalRadio: FC<Props> = props => {
  return (
    <Root>
      <Input type="radio" name={props.name} id={props.id} onChange={props.handleChange} checked={props.checked} />
      <Label htmlFor={props.id}>{props.text}</Label>
    </Root>
  );
};

NomalRadio.defaultProps = {};

export default NomalRadio;
