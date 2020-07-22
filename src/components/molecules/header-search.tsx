import React, { FC } from 'react';
import styled from 'styled-components';
import InputSearch from '@/components/atoms/inputs/input-search';
import SearchSvgIcon from '@/components/atoms/icons/search-svg-icon';

type Props = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 8px 8px 4px;
  border-radius: 4px;
  background-color: #efefef;
`;

const IconWrap = styled.span`
  display: inline-block;
  padding: 5px 10px 0 10px;
  color: ${props => props.theme.borderColors.primary};
`;

const HeaderSearch: FC<Props> = props => {
  return (
    <Root>
      <IconWrap>
        <SearchSvgIcon />
      </IconWrap>
      <InputSearch value={props.value} handleChange={props.handleChange} placeholder={props.placeholder} />
    </Root>
  );
};

export default HeaderSearch;
