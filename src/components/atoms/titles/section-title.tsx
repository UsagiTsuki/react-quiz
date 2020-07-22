import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
};

const Root = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.textColors.black};
`;

const MainTitle: FC<Props> = props => {
  return <Root>{props.title}</Root>;
};

export default MainTitle;
