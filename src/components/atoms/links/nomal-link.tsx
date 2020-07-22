import { FC } from 'react';
import Link from 'next/link';

type Props = {
  href: string;
};

const NomalLink: FC<Props> = props => {
  return (
    <Link {...props}>
      <a className={`open-link`}></a>
    </Link>
  );
};

export default NomalLink;
