import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  href: any;
  as?: string;
};

const Text = styled.a`
  color: inherit;
  cursor: pointer;
  font-weight: bold;
`;

const MultiLink: FC<Props> = props => {
  const { children, ...rest } = props;
  return (
    <Link {...rest}>
      <Text>{children}</Text>
    </Link>
  );
};

export default MultiLink;
