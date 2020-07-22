import { motion } from 'framer-motion';
import { FC } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  initial?: boolean;
};

const LeftTransition: FC<Props> = props => {
  const variants = {
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.3
      }
    }),
    hidden: { opacity: 0 }
  };

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  const items = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'apple2' },
    { id: 3, name: 'apple3' }
  ];

  return (
    <motion.ul initial="hidden" animate="visible" variants={list}>
      {items.map((item, i) => (
        <motion.li custom={i} animate="visible" variants={variants}>
          {item.name}
        </motion.li>
      ))}
    </motion.ul>
  );
};

LeftTransition.defaultProps = {
  initial: true
};

export default LeftTransition;
