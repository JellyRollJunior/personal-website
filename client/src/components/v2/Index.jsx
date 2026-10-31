// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

/* Tab Strip colors
  - text color de-selected
  - text color
  - border TL
  - border BL
  - selected strip color
*/
const Index = () => {
  return (
    <div className="flex h-dvh w-dvw flex-col bg-black px-8 pt-8">
      {/* Content */}
      <div className="site-bg flex-1 border border-black"></div>

      {/* Tab container */}
      <div className="flex gap-1 border border-black p-1 text-[#fcfcfc]">
        <div className="relative border border-t border-l border-gray-600 border-t-gray-300 border-l-gray-300 px-8">
          hi
          <motion.div
            className="absolute bottom-0 left-0 h-[1.5px] w-full bg-blue-400"
            style={{ originX: 0.5 }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
};

export { Index };
