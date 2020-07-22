import { FC } from 'react';
import { Home } from '@styled-icons/boxicons-regular/Home';

import BaseIcon from '@/components/atoms/icons/base-icon';
type Props = {
  width: number;
};

const Html5Icon: FC<Props> = props => {
  return <BaseIcon width={props.width} IconComponent={Home} />;
};

export default Html5Icon;
