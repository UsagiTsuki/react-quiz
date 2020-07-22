import { FC } from 'react';
// import { Css3 } from '@styled-icons/fa-brands/Css3';
import { Cube } from '@styled-icons/boxicons-regular/Cube';
import BaseIcon from '@/components/atoms/icons/base-icon';

type Props = {
  width: number;
};

const CssIcon: FC<Props> = props => {
  return <BaseIcon width={props.width} IconComponent={Cube} />;
};

export default CssIcon;
