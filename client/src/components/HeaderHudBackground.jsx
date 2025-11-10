// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { Fragment } from 'react';

const HudLine = ({
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
      <div className="border-yellow w-20 border-b-4 bg-black/0" />
      {/* Animated health squares */}
      <div className="border-yellow/60 border-t-yellow/70 flex w-fit gap-1 border-t-2 border-r-4 border-b-2 bg-black pt-1 pr-2 pb-1">
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

const Marquee = ({
  className,
  textArray = [],
  leftToRight = true,
  duration = 30,
}) => {
  return (
    <div className={`isolate w-max overflow-hidden ${className}`}>
      {/* translate 25% to reset animation when 1st set of text is translated! */}
      <motion.ul
        className={`flex gap-5 ${leftToRight ? 'justify-end' : 'justify-start'}`}
        animate={{
          translateX: leftToRight ? '25%' : '-25%',
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...Array(4)].map((item, index) => (
          <Fragment key={index + Date.now()}>
            {textArray.map((text, index) => (
              <li
                key={index + Date.now()}
                className="border-red/60 text-red/60 rounded-md border-2 px-3 py-1"
              >
                {text}
              </li>
            ))}
          </Fragment>
        ))}
      </motion.ul>
    </div>
  );
};

const HeaderBackground = () => {
  return (
    <div className="absolute -z-1 grid h-full w-full grid-cols-[1fr_240px_1fr] grid-rows-[1fr_120px_120px_1fr]">
      <div className="col-span-3 flex flex-col items-center justify-center">
        <Marquee
          className="-z-10 mt-auto"
          textArray={['Javascript', 'React', 'HTML', 'JSX', 'TailwindCSS', 'CSS', 'EJS']}
          leftToRight={true}
        />
        <Marquee
          className="-z-50 mt-auto translate-y-[50%]"
          textArray={['Javascript', 'React', 'HTML', 'JSX', 'TailwindCSS', 'CSS', 'EJS']}
          leftToRight={false}
        />
      </div>
      {/* top left */}
      <div className="relative h-full w-full">
        <HudLine className="absolute top-0 right-0 -translate-y-3/1 -scale-x-100 rotate-22" />
      </div>
      {/* Center view finder */}
      <div className="relative isolate row-span-2 flex items-center justify-center rounded-full bg-black">
        <HudViewFinder />
      </div>
      {/* top right */}
      <div className="relative h-full w-full">
        <HudLine className="absolute top-0 left-0 -translate-y-3/1 -rotate-22" />
      </div>
      {/* bottom left */}
      <div className="relative h-full w-full">
        <HudLine className="absolute right-0 bottom-0 translate-y-3/1 -scale-x-100 -scale-y-100 -rotate-22" />
      </div>
      {/* bottom right */}
      <div className="relative h-full w-full">
        <HudLine className="absolute bottom-0 left-0 translate-y-3/1 -scale-y-100 rotate-22" />
      </div>
      <div className="col-span-3 flex flex-col items-center justify-center">
        <Marquee
          className="-z-10 mb-auto -translate-y-[50%]"
          textArray={['Passport.js', 'Socket.IO', 'PrismaORM', 'PostgreSQL', 'Express', 'Node', 'Javascript']}
          leftToRight={true}
        />
        <Marquee
          className="-z-50 mb-auto"
          textArray={['Passport.js', 'Socket.IO', 'PrismaORM', 'PostgreSQL', 'Express', 'Node', 'Javascript']}
          leftToRight={false}
        />
      </div>
    </div>
  );
};

export { HeaderBackground };
