import { FC, useState, useCallback } from 'react';

import PageTitle from '@/components/atoms/titles/page-title';
import SectionTitle from '@/components/atoms/titles/section-title';
import NomalLink from '@/components/atoms/links/nomal-link';
import MultiLink from '@/components/atoms/links/multi-link';
import HomeIcon from '@/components/atoms/icons/home-icon';
import Html5Icon from '@/components/atoms/icons/html5-icon';
import CssIcon from '@/components/atoms/icons/css-icon';
import JsIcon from '@/components/atoms/icons/js-icon';
import SearchIcon from '@/components/atoms/icons/search-svg-icon';
import InputSearch from '@/components/atoms/inputs/input-search';
import GridList from '@/components/molecules/grid-list';
import NomalTag from '@/components/atoms/tags/nomal-tag';
import NomalButton from '@/components/atoms/buttons/nomal-button';

/* animation */
import { LeftTransition } from '@/components/atoms/animations/left-transition';
import TestCustomAnimation from '@/components/atoms/animations/tests/test-custom-animation';
import TestDynamicVariant from '@/components/atoms/animations/tests/test-dynamic-variant';

import IconLink from '@/components/molecules/icon-link';
import LogoTitle from '@/components/molecules/logo-title';
import HeaderSearch from '@/components/molecules/header-search';

const StoryPage: FC = () => {
  const [inputSearchText, setInputSearchText] = useState('入力内容');

  const handleChange = useCallback(
    e => {
      setInputSearchText(e.target.value);
    },
    [inputSearchText]
  );

  return (
    <>
      <PageTitle title={`PageTitle`} />
      <SectionTitle title={`セクションタイトル`} />
      <div style={{ position: 'relative' }}>
        <p>aaa</p>
        <NomalLink href={`/`} />
      </div>
      <MultiLink href={`/`}>CSS</MultiLink>
      <Html5Icon width={32} />
      <CssIcon width={32} />
      <JsIcon width={32} />
      <HomeIcon width={32} />
      <SearchIcon />
      <br />
      <div style={{ padding: '10px' }}>
        <InputSearch value={inputSearchText} handleChange={handleChange} />
      </div>
      <NomalTag text={`HTML`} color={`secondary`} />
      <div style={{ margin: '10px' }}>
        <GridList text={`基礎知識問題`} tagText={`HTML`} tagColor={`secondary`} />
      </div>
      <NomalButton color={`primary`} text={`aaa`} />
      <hr />
      <div style={{ width: '220px' }}>
        <LogoTitle title={`Quiz`} path={`/`} />
        <IconLink text={`TOP`} updownPadding={10} sidePadding={10}>
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
        <HeaderSearch value={inputSearchText} handleChange={handleChange} />
      </div>
      <hr />
      <LeftTransition>aaa</LeftTransition>
      <TestCustomAnimation>aaa</TestCustomAnimation>
      <TestDynamicVariant>aaa</TestDynamicVariant>
    </>
  );
};

export default StoryPage;
