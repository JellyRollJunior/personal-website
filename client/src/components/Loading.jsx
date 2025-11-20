import { HudViewFinder } from './HudViewFinder.jsx';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const LoadingMask = ({ delay }) => {
  return (
    <motion.div
      className="fixed flex h-screen w-screen items-center justify-center bg-black isolate z-2"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: delay,
        duration: 2,
      }}
    >
      <div className="relative h-[240px] w-[240px]">
        <HudViewFinder />
      </div>
    </motion.div>
  );
};

export { LoadingMask };
