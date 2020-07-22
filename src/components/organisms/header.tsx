/**
 * ヘッダー
 *
 * - どのメニューがアクティブかを管理
 * - 初期値はURIから参照したほうがいい（直接「/html」にアクセスされる場合などを考慮
 */
import React, { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import HeaderSearch from '@/components/molecules/header-search';

type Props = {
  inputText: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Root = styled.div``;

const LeftSideNavigation: FC<Props> = props => {
  return (
    <Root>
      <HeaderSearch value={props.inputText} handleChange={props.handleChange} placeholder={`クイズの題名で検索してね`} />
    </Root>
  );
};

export default LeftSideNavigation;
