// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const HeaderHudRingDot = ({ className, skewX }) => {
  return (
    <div
      className={`border-yellow/50 absolute flex size-3.5 items-center justify-center rounded-full border ${className}`}
      style={{
        transform: `skew(${-1 * skewX}deg, 0)`,
      }}
    >
      <div className="bg-yellow size-1 rounded-full" />
    </div>
  );
};

const HeaderHudLine = ({
  skewX = -60,
  boxes = 14,
  duration = 1.1,
  initialColor = '#88a688',
  transitionColor = '#ffcc77',
}) => {
  return (
    <div
      className="flex max-w-120"
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
            <HeaderHudRingDot
              className="top-0 right-0 translate-x-1/2 -translate-y-1/2"
              skewX={skewX}
            />
          </div>
          <div className="border-r-yellow border-b-yellow/60 relative ml-auto h-3.5 w-8 border-r-3 border-b-2">
            <HeaderHudRingDot
              className="right-0 bottom-0 translate-x-1/2 translate-y-1/2"
              skewX={skewX}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderHudLine}