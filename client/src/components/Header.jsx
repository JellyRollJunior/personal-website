import { HeaderBackground } from './HeaderHudBackground.jsx';
// eslint-disable-next-line no-unused-vars
import { easeOut, motion } from 'motion/react';

const Header = () => {
  return (
    <header className="h-screen p-5">
      <div className="border-yellow relative grid h-full grid-cols-3 grid-rows-3 flex-col overflow-clip rounded-md border-2">
        <h1 className="text-blue text-shadow-wrap col-span-3 mt-13 flex justify-center text-center text-3xl lg:text-6xl/17">
          B R A N D O N <br /> L I N
        </h1>
        <div></div>
        <div className="flex items-center justify-center">
          <motion.a
            href=""
            className="border-yellow text-yellow h-fit rounded-lg border-2 px-4 pt-1 pb-2"
            whileHover={{
              background: '#ffcc77',
              color: '#000000',
              transition: { duration: 1, ease: easeOut },
            }}
          >
            LAUNCH
          </motion.a>
        </div>
        <div></div>
        <h2 className="text-blue col-span-3 mb-10 flex items-end justify-center text-center text-2xl lg:mb-13 lg:text-4xl/17">
          <a href="" className="">
            FULL STACK DEVELOPER
          </a>
        </h2>
        {/* Background Decoration */}
        <HeaderBackground />
      </div>
    </header>
  );
};

export { Header };
