import { FC } from 'react';
// import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Capsule } from '@styled-icons/boxicons-regular/Capsule';
import BaseIcon from '@/components/atoms/icons/base-icon';
type Props = {
  width: number;
};

const Html5Icon: FC<Props> = props => {
  return <BaseIcon width={props.width} IconComponent={Capsule} />;
};

export default Html5Icon;
