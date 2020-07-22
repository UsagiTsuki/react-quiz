import { motion, AnimatePresence } from 'framer-motion';
import { FC } from 'react';

type Props = {};

const easing = [0.6, -0.05, 0.01, 0.99];

export const FadeInUp: FC<Props> = props => {
  const animation = {
    animate: { y: 0, opacity: 1 },
    initial: { y: -10, opacity: 0, width: '100%', height: '100%' },
    exit: { y: 10, opacity: 0 },
    transition: { ease: easing, duration: 1 },
    key: 'left-transition'
  };
  return <motion.div {...animation}>{props.children}</motion.div>;
};

FadeInUp.defaultProps = {};

export const WrapFadeInUp: FC<Props> = props => {
  return <AnimatePresence exitBeforeEnter>{props.children}</AnimatePresence>;
};
