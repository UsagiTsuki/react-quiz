import { motion, useAnimation } from 'framer-motion';
import { FC, useEffect } from 'react';
import styled, { css } from 'styled-components';

type Props = {};

const LeftTransition: FC<Props> = props => {
  const controls = useAnimation();
  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.2 }
    }));
  }, []);
  return (
    <ul>
      <motion.li custom={0} animate={controls}>
        aaa
      </motion.li>
      <motion.li custom={1} animate={controls}>
        aaa
      </motion.li>
      <motion.li custom={2} animate={controls}>
        aaa
      </motion.li>
    </ul>
  );
};

LeftTransition.defaultProps = {};

export default LeftTransition;
