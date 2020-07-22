import { motion, AnimatePresence } from 'framer-motion';
import { FC } from 'react';

type Props = {};

export const LeftTransition: FC<Props> = props => {
  const animation = {
    animate: { x: 0, opacity: 1 },
    initial: { x: 100, opacity: 0, width: '100%', height: '100%' },
    exit: { x: -30, opacity: 0 },
    transition: { ease: 'easeOut', duration: 0.2 },
    key: 'left-transition'
  };
  return <motion.div {...animation}>{props.children}</motion.div>;
};

LeftTransition.defaultProps = {};

export const WrapLeftTransition: FC<Props> = props => {
  return <AnimatePresence exitBeforeEnter>{props.children}</AnimatePresence>;
};
