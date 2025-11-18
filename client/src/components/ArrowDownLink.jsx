import arrowDown from '../assets/icons/arrow-down.svg';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const ArrowDownLink = ({ className = '', href = '', size = 40 }) => {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <div className={`size-full`} href={href}>
        {[...Array(3)].map((item, index) => (
          <motion.img
            key={index}
            src={arrowDown}
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: size,
            }}
            animate={{
              opacity: [0, 1, 0], // fade in -> visible -> fade out
              translateY: [-40, 0, 0],
            }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.1, 0.25, 1],
              times: [0, 0.6, 1],
              repeat: Infinity,
              repeatDelay: 1,
              delay: 0 + index * 0.25,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { ArrowDownLink };
