/**
 * Gridテスト
 */
import { FC } from 'react';
import styled from 'styled-components';

type Props = {};

const Root = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
  }
`;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 93px 1fr;
`;

const Box1 = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 5;
  background-color: red;
`;

const Box2 = styled.div`
  background-color: green;
`;

const Box3 = styled.div`
  background-color: blue;
`;

const HeaderWrap = styled.div``;

const IndexPage: FC<Props> = () => {
  return (
    <Wrap>
      <Box1>One</Box1>
      <Box2>Two</Box2>
      <Box3>Three</Box3>
    </Wrap>
  );
};

export default IndexPage;
