// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

import { useEffect, useState } from 'react';
import { Loading } from './Loading.jsx';

const LoadingMask = ({ delay = 1, duration = 1.5 }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const loadtimeMs = (delay + duration) * 1000;
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, loadtimeMs);

    () => clearTimeout(timeout);
  }, [delay, duration]);

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-busy={isAnimating}
      style={{ display: isAnimating ? 'fixed' : 'none' }}
      className="inset v2-base terminal-text-content pointer-events-none fixed z-9999 flex h-dvh w-screen flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: delay,
        duration: duration,
      }}
    >
      <Loading />
      <span className="terminal-text-green mt-2 text-sm tracking-wide">
        Booting System
      </span>
    </motion.div>
  );
};

export { LoadingMask };
