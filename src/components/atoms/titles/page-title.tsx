import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
};

const Root = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'MuseoModerno', cursive;
  color: ${props => props.theme.textColors.black};
`;

const MainTitle: FC<Props> = props => {
  return <Root>{props.title}</Root>;
};

export default MainTitle;
