// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const HeaderHudLine = ({
  className,
  skewX = -60,
  boxes = 14,
  duration = 1.1,
  initialColor = '#88a688',
  transitionColor = '#ffcc77',
}) => {
  return (
    <div
      className={`flex w-120 ${className}`}
      style={{
        transform: `skew(${skewX}deg, 0)`,
      }}
    >
      {/* Left extended bit */}
      <div className="border-yellow w-20 border-b-4" />
      {/* Animated health squares */}
      <div className="border-yellow/60 border-t-yellow/70 flex w-fit gap-1 border-t-2 border-r-4 border-b-2 pt-1 pr-2 pb-1">
        {[...Array(boxes)].map((item, index) => (
          <motion.div
            key={index}
            animate={{
              backgroundColor: [
                initialColor,
                transitionColor,
                transitionColor,
                initialColor,
              ],
            }}
            transition={{
              ease: 'easeOut',
              times: [0, duration / 2, duration - 0.1, duration],
              duration: duration,
              repeat: Infinity,
              delay: index * 1,
              repeatDelay: boxes / duration,
            }}
            className="h-3 w-2.5"
          />
        ))}
      </div>
      {/* Right HUD lines */}
      <div className="border-t-yellow/70 relative w-full border-t-2">
        {/* Dashed line accent */}
        <div className="border-yellow/70 mt-1 ml-2 w-3/4 border-t-2 border-dashed" />
        {/* Raised box */}
        <div className="absolute top-0 left-6 grid size-full -translate-y-1/2 grid-rows-2">
          <div className="border-yellow/70 relative size-full border-t border-r border-l-2">
            <div
              className="bg-yellow absolute bottom-0 left-0 size-1 -translate-x-4/5 translate-y-1/5 rounded-full"
              style={{
                transform: `skew(${-1 * skewX}deg, 0)`,
              }}
            />
            {/* Moving ring dot */}
            <motion.div
              className={`border-yellow/50 absolute top-0 left-0 flex size-3.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border`}
              animate={{
                skewX: [-1 * skewX, -1 * skewX, -1 * skewX],
                opacity: [100, 100, 0],
                translateX: [0, 165, 0],
              }}
              transition={{
                ease: 'easeOut',
                times: [0, 0.9, 1],
                repeat: Infinity,
                duration: 7,
              }}
            >
              <div className="bg-yellow size-1 rounded-full" />
            </motion.div>
          </div>
          <div className="border-r-yellow border-b-yellow/60 relative ml-auto h-3.5 w-8 border-r-3 border-b-2">
            {/* Ring Dot */}
            <div
              className="border-yellow/50 absolute right-0 bottom-0 flex size-3.5 translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border"
              style={{
                transform: `skew(${-1 * skewX}deg, 0)`,
              }}
            >
              <div className="bg-yellow size-1 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderBackground = () => {
  return (
    <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-5 -z-1">
      <div className="border-yellow size-55 rounded-full border-2">
        {/* top right */}
        <HeaderHudLine className="absolute top-0 left-1/2 h-fit shrink-0 translate-x-30 -translate-y-15 -rotate-20" />
        {/* top left */}
        <HeaderHudLine className="absolute top-0 right-1/2 h-fit shrink-0 -translate-x-30 -translate-y-15 -scale-x-100 rotate-20" />
        {/* bottom right */}
        <HeaderHudLine className="absolute bottom-0 left-1/2 h-fit shrink-0 translate-x-30 translate-y-15 -scale-y-100 rotate-20" />
        {/* bottom left */}
        <HeaderHudLine className="absolute right-1/2 bottom-0 h-fit shrink-0 -translate-x-30 translate-y-15 -scale-x-100 -scale-y-100 -rotate-20" />
      </div>
    </div>
  );
};

export { HeaderBackground };
