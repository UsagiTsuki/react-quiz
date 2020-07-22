import { motion, useAnimation } from 'framer-motion';
import { FC } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  initial: boolean;
};

const LeftTransition: FC<Props> = props => {
  const controls = useAnimation();
  controls.start({
    x: '10%',
    backgroundColor: '#f00',
    transition: { duration: 1 }
  });
  return (
    <div>
      <motion.div animate={controls}>aaa</motion.div>
    </div>
  );
};

LeftTransition.defaultProps = {
  initial: true
};

export default LeftTransition;
