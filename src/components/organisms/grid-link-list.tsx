/**
 * グリッドリスト（リンク付）
 *
 */
import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import clsx from 'clsx';
import GridList from '@/components/molecules/grid-list';

type Props = {
  title: string;
  tagName: string;
  isActive: boolean;
  handleClick: (event: React.MouseEvent<HTMLInputElement>) => void;
};

const Root = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  background: #fff;
  border-radius: 4px;
  transition: all 0.1s ease-out;
`;

const GridLinkList: FC<Props> = props => {
  return (
    <Root onClick={props.handleClick} isActive={props.isActive} className={clsx({ 'list-active': props.isActive })}>
      <GridList text={props.title} tagText={props.tagName} tagColor={`secondary`} />
    </Root>
  );
};

export default GridLinkList;
