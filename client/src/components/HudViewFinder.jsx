// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const HudViewFinderCircle = ({
  className,
  markingOffsetDegree = 5,
  markingWidth = 9,
  style = {},
  animate = {
    rotate: 720,
  },
  transition = {
    duration: 60,
    ease: 'linear',
    repeat: Infinity,
  },
  children,
}) => {
  const numRods =
    markingOffsetDegree == 0 || markingOffsetDegree >= 360
      ? 0
      : Math.floor(360 / markingOffsetDegree);

  return (
    <div className="flex size-full items-center justify-center overflow-hidden rounded-full">
      <motion.div
        style={{ ...style }}
        className={`isolate flex items-center justify-center rounded-full ${className}`}
        animate={animate}
        transition={transition}
      >
        {[...Array(numRods)].map((item, index) => (
          <div
            key={index}
            style={{
              width: markingWidth,
              transform: `rotate(${index * markingOffsetDegree}deg)`,
            }}
            className="absolute top-1/2 left-1/2 z-1 h-full origin-top -translate-x-1/2 bg-black"
          />
        ))}
        {children}
      </motion.div>
    </div>
  );
};

const HudViewFinder = () => {
  return (
    <HudViewFinderCircle
      className="border-red size-full rounded-full border-5"
      markingOffsetDegree={45}
      markingWidth={35}
    >
      <HudViewFinderCircle
        className="bg-yellow z-1 size-full p-[2.5px] opacity-80"
        markingOffsetDegree={0}
        markingWidth={0}
        animate={{}}
      >
        <HudViewFinderCircle
          className="z-2 size-full p-[10px]"
          markingOffsetDegree={0}
          markingWidth={0}
          style={{
            background: 'radial-gradient(circle, #000000 70px, #ffcc77 140px)',
          }}
          animate={{}}
        >
          <HudViewFinderCircle
            className="border-green z-3 size-full border-5 bg-black"
            markingOffsetDegree={20}
            markingWidth={8}
            animate={{
              rotate: -720,
            }}
            transition={{
              duration: 100,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            <HudViewFinderCircle
              className="to-red z-10 size-full bg-radial from-black p-[20px]"
              markingOffsetDegree={4}
              markingWidth={5}
              animate={{
                rotate: -1080,
              }}
              transition={{
                duration: 100,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              <motion.div
                className="z-5 size-full rounded-full"
                style={{
                  background: 'radial-gradient(#000000, #000000)',
                }}
                animate={{
                  background: [
                    'radial-gradient(#000000 0px, #000000 0px)',
                    'radial-gradient(#ffcc77 -200px, #000000 130px)',
                    'radial-gradient(#000000 0px , #000000 0px)',
                  ],
                }}
                transition={{
                  duration: 3,
                  times: [0, 0.5, 1],
                  ease: 'easeIn',
                  repeat: Infinity,
                }}
              />
            </HudViewFinderCircle>
          </HudViewFinderCircle>
        </HudViewFinderCircle>
      </HudViewFinderCircle>
    </HudViewFinderCircle>
  );
};

export { HudViewFinder };
