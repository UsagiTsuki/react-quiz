import { FC } from 'react';
import styled from 'styled-components';
import NomalTag from '@/components/atoms/tags/nomal-tag';

type Props = {
  text: string;
  tagText: string;
  tagColor: string;
};

const Root = styled.div`
  color: inherit;
  padding: 8px 24px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
`;

const Body = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 8px;
`;

const GridList: FC<Props> = props => {
  return (
    <Root>
      <NomalTag text={props.tagText} color={props.tagColor} />
      <Body>{props.text}</Body>
    </Root>
  );
};

export default GridList;
