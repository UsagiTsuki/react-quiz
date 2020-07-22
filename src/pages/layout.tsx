import { FC } from 'react';
import styled from 'styled-components';
import LeftSideNavigation from '@/components/organisms/left-side-navigation';

type Props = {};

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 65px 1fr;
  column-gap: 16px;
  row-gap: 16px;
  @media screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
    grid-template-columns: 220px 1fr;
    grid-template-rows: 93px 1fr;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    grid-template-columns: 220px 1fr 300px;
    grid-template-rows: 93px 1fr;
  }
`;

const SideWrap = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 1;
  @media screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

const HeaderWrap = styled.div`
  padding: 16px 24px 10px 0;
  @media screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
    padding: 24px 24px 24px 0;
  }
`;

const MainContents = styled.div`
  /* allheight - header - gap*2 */
  height: calc(100vh - 93px - 32px);
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: 1fr 300px;
`;

const LayoutPage: FC<Props> = props => {
  return (
    <Root>
      <SideWrap>
        <LeftSideNavigation />
      </SideWrap>
      {props.children}
    </Root>
  );
};

export default LayoutPage;
