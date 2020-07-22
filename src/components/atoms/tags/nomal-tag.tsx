import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  color: string;
};

const Root = styled.span`
  font-size: 0.6rem;
  color: ${props => props.theme.textColors.white};
  background: ${props => props.theme.colors[props.color]};
  padding: 2px 16px;
  border-radius: 4px;
  letter-spacing: 2px;
`;

const NomalTag: FC<Props> = props => {
  return <Root color={props.color}>{props.text}</Root>;
};

export default NomalTag;
