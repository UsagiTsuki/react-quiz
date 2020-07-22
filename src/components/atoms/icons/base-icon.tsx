import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  width: number;
  IconComponent: any;
};

const Root = styled.span`
  width: ${props => props.width}px;
  display: inline-block;
  vertical-align: middle;
`;

const BaseIcon: FC<Props> = props => {
  const { IconComponent } = props;
  return (
    <Root width={props.width}>
      <IconComponent />
    </Root>
  );
};

export default BaseIcon;
