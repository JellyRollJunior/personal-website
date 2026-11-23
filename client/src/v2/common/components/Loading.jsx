// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.39,
      delayChildren: -3,
    },
  },
};

const createItemVariants = (
  phase,
  translateDistance,
  duration,
  color1,
  color2
) => {
  const isMiddle = phase === 'middle';

  return {
    initial: {
      x: 0,
      y: 0,
      ...(isMiddle && { backgroundColor: color2 }),
    },

    animate: {
      y: isMiddle
        ? [translateDistance, 0, translateDistance]
        : [0, translateDistance, 0],

      opacity: isMiddle ? [1, 0, 1, 1, 1] : [1, 1, 1, 0, 1],

      scale: isMiddle ? [1, 0.7, 1, 1.4, 1] : [1, 1.4, 1, 0.7, 1],

      backgroundColor: isMiddle
        ? [color2, color1, color1, color1, color2]
        : [color1, color1, color2, color1, color1],

      transition: {
        y: {
          duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        },
        opacity: {
          duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
        scale: {
          duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
        backgroundColor: {
          duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
      },
    },
  };
};

const TRANSLATE_DISTANCE = 35;
const DURATION = 3;
const COLOR_1 = '#ff7627';
const COLOR_2 = '#03ca03';

const itemVariants = createItemVariants(
  'start',
  TRANSLATE_DISTANCE,
  DURATION,
  COLOR_1,
  COLOR_2
);

const itemVariantsMiddle = createItemVariants(
  'middle',
  TRANSLATE_DISTANCE,
  DURATION,
  COLOR_1,
  COLOR_2
);

const BallArray = ({ containerVariants, itemVariants, numBalls = 5 }) => {
  return (
    <motion.div
      className="absolute inset-x-0 top-0 flex justify-center gap-1.5"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {[...Array(numBalls)].map((_value, index) => (
        <motion.div
          key={index}
          className="size-2 rounded-full"
          variants={itemVariants}
        />
      ))}
    </motion.div>
  );
};

const Loading = ({ className = '', numBalls = 9 }) => {
  return (
    <motion.div
      className={`relative h-12 w-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <BallArray
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        numBalls={numBalls}
      />
      <BallArray
        containerVariants={containerVariants}
        itemVariants={itemVariantsMiddle}
        numBalls={numBalls}
      />
    </motion.div>
  );
};

export { Loading };
