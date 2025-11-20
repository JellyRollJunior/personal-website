import { useEffect, useState } from 'react';
import { HudViewFinder } from './HudViewFinder.jsx';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const LoadingMask = ({ delay = 2, duration = 2 }) => {
  // Remove loading mask from DOM after fadeout
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const loadtimeMs = (delay + duration) * 1000
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, loadtimeMs );

    () => clearTimeout(timeout);
  }, [delay, duration]);

  return (
    <motion.div
      style={{ display: isAnimating ? "fixed" : "none"}}
      className="fixed isolate z-2 flex h-screen w-screen items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: delay,
        duration: duration,
      }}
    >
      <div className="relative h-[240px] w-[240px]">
        <HudViewFinder />
      </div>
    </motion.div>
  );
};

export { LoadingMask };
