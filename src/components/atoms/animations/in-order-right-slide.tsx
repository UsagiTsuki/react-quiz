import { motion, AnimatePresence } from 'framer-motion';
import { FC } from 'react';

type Props = {
  number: number;
};

export const InOrderRightSlide: FC = props => {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <motion.ul initial="hidden" animate="visible" variants={list}>
      {props.children}
    </motion.ul>
  );
};

export const InOrderRightSlideChildren: FC<Props> = props => {
  const variants = {
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.1
      }
    }),
    hidden: { opacity: 0 }
  };
  return (
    <motion.li custom={props.number} animate="visible" variants={variants}>
      {props.children}
    </motion.li>
  );
};

export const WrapInOrderRightSlide: FC<Props> = props => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {props.children}
    </AnimatePresence>
  );
};
