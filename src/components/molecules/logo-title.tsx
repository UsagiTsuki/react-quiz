import { FC } from 'react';
import Link from 'next/link';
import PageTitle from '@/components/atoms/titles/page-title';
import styled from 'styled-components';

type Props = {
  title: string;
  path: string;
};

const Root = styled.div`
  padding: 30px 10px 40px 10px;
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    padding: 15px 10px;
  }
`;

const IconLink: FC<Props> = props => {
  return (
    <Root>
      <Link href={props.path}>
        <a>
          <PageTitle title={props.title} />
        </a>
      </Link>
    </Root>
  );
};

export default IconLink;
