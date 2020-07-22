import { FC } from 'react';
// import { NodeJs } from '@styled-icons/fa-brands/NodeJs';
import { Droplet } from '@styled-icons/boxicons-regular/Droplet';
import BaseIcon from '@/components/atoms/icons/base-icon';

type Props = {
  width: number;
};

const JsIcon: FC<Props> = props => {
  return <BaseIcon width={props.width} IconComponent={Droplet} />;
};

export default JsIcon;
