// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

import { useEffect, useState } from 'react';
import { Loading } from './Loading.jsx';

const PHASE = {
  BLOCKING: 'blocking',
  FADING: 'fading',
  DONE: 'done',
};

const LoadingMask = ({ animationLength = 1, fadeDuration = 0.7 }) => {
  const [phase, setPhase] = useState(PHASE.BLOCKING);

  useEffect(() => {
    const fadeTimeout = setTimeout(
      () => setPhase(PHASE.FADING),
      animationLength * 1000
    );
    const doneTimeout = setTimeout(
      () => setPhase(PHASE.DONE),
      (animationLength + fadeDuration) * 1000
    );

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(doneTimeout);
    };
  }, [animationLength, fadeDuration]);

  if (phase === PHASE.DONE) return null;

  const isBlocking = phase === PHASE.BLOCKING;

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-busy
      className={[
        'v2-base terminal-text-content fixed inset-0 z-9999 flex h-dvh w-screen flex-col items-center justify-center bg-black',
        isBlocking ? 'pointer-events-auto' : 'pointer-events-none',
      ].join(' ')}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: animationLength,
        duration: fadeDuration,
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
