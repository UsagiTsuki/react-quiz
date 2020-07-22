import { FC } from 'react';
import styled from 'styled-components';
import MultiLink from '@/components/atoms/links/multi-link';

type Props = {
  text: string;
  updownPadding?: number;
  sidePadding?: number;
};

const Root = styled.div`
  color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all 0.1s ease-in;
  padding: ${props => props.updownPadding || 3}px ${props => props.sidePadding || 5}px;
  &:hover {
    background-color: ${props => props.theme.linkHover.primary};
    transition: all 0.1s ease-out;
    border-radius: 4px;
  }
`;

const IconLink: FC<Props> = props => {
  return (
    <MultiLink href={`/`}>
      <Root sidePadding={props.sidePadding} updownPadding={props.updownPadding}>
        <div>{props.text}</div>
        {props.children}
      </Root>
    </MultiLink>
  );
};

export default IconLink;
