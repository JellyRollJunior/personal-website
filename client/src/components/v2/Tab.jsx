// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const Tab = ({ title, dragConstraintsRef, children }) => {
  return (
    <motion.article
      className="tab tab-bordered h-fit w-fit"
      drag
      dragConstraints={dragConstraintsRef}
      dragMomentum={false}
    >
      {/* Title bar */}
      <header className="tab-header-gradient pt-1.5 pb-1 pl-3 text-xs">
        {title}
      </header>

      {/* Content */}
      <div className="tab-bordered-content">{children}</div>
    </motion.article>
  );
};

export { Tab };
