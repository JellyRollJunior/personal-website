import { ArrowDownLink } from './ArrowDownLink.jsx';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const HealthBar = ({
  className,
  boxes = 9,
  initialColor = '#88a688',
  transitionColor = '#ffcc77',
}) => {
  const DURATION = 1.1;
  return (
    <div
      className={`border-yellow flex w-fit gap-1 border-r border-b pr-1 pb-1 ${className}`}
    >
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
            times: [0, DURATION / 2, DURATION - 0.1, DURATION],
            duration: DURATION,
            repeat: Infinity,
            delay: index * 1,
            repeatDelay: boxes / DURATION,
          }}
          className="h-5 w-2"
        />
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <>
      <header className="flex h-screen flex-col items-center justify-center">
        <div className="mt-auto flex w-fit flex-col">
          <h2 className="w-fit text-3xl">HELLO I'M</h2>
          <h1 className="text-8xl font-medium">Brandon Lin</h1>
          <h3 className="mt-2 text-end text-2xl">FULL STACK DEVELOPER</h3>
        </div>
        <ArrowDownLink className="mt-auto mb-3 justify-self-end" />
      </header>
      <div className="m-5">
        <HealthBar />
      </div>
    </>
  );
};

export { Header };
