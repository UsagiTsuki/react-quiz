/**
 * サイドナビゲーション
 *
 * - どのメニューがアクティブかを管理
 * - 初期値はURIから参照したほうがいい（直接「/html」にアクセスされる場合などを考慮
 */
import { FC } from 'react';
import styled from 'styled-components';
import LogoTitle from '@/components/molecules/logo-title';
import IconLink from '@/components/molecules/icon-link';
import HomeIcon from '@/components/atoms/icons/home-icon';
import Html5Icon from '@/components/atoms/icons/html5-icon';
import CssIcon from '@/components/atoms/icons/css-icon';
import JsIcon from '@/components/atoms/icons/js-icon';

type Props = {};

const Root = styled.nav`
  width: 100%;
  height: auto;
  padding-left: 20px;
  position: relative;
  background-color: #fff;
  @media screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
    height: 100vh;
  }
`;

const Menu = styled.nav`
  display: block;
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    display: none;
  }
`;

const LeftSideNavigation: FC<Props> = () => {
  return (
    <Root>
      <LogoTitle title={`Quiz`} path={`/`} />
      <Menu>
        <IconLink text={`ALL`} updownPadding={10} sidePadding={10}>
          <HomeIcon width={20} />
        </IconLink>
        <IconLink text={`HTML`} updownPadding={10} sidePadding={10}>
          <Html5Icon width={20} />
        </IconLink>
        <IconLink text={`CSS`} updownPadding={10} sidePadding={10}>
          <CssIcon width={20} />
        </IconLink>
        <IconLink text={`JavaScript`} updownPadding={10} sidePadding={10}>
          <JsIcon width={20} />
        </IconLink>
      </Menu>
    </Root>
  );
};

export default LeftSideNavigation;
