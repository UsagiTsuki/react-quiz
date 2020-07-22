import { motion } from 'framer-motion';
import { FC } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  initial: boolean;
};

const LeftTransition: FC<Props> = props => {
  const style = css`
    width: 100px;
    width: 100px;
    height: 100px;
    background: #ddd;
  `;

  const lists = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -300 }
  };

  return (
    <div style={style}>
      <motion.ul initial="hidden" animate="visible" variants={lists}>
        <motion.li variants={item}>aaa</motion.li>
        <motion.li variants={item}>bbb</motion.li>
        <motion.li variants={item}>ccc</motion.li>
      </motion.ul>
    </div>
  );
};

LeftTransition.defaultProps = {
  initial: true
};

export default LeftTransition;
