// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const TAB_STYLE = Object.freeze({
  BORDERLESS: 'BORDERLESS',
  BORDERED: 'BORDERED',
});

const Tab = ({
  title,
  tabStyle = TAB_STYLE.BORDERLESS,
  dragConstraintsRef,
  children,
}) => {
  return (
    <motion.article
      className={[
        'tab h-fit w-fit',
        tabStyle === TAB_STYLE.BORDERED && 'tab-bordered',
      ].join(' ')}
      drag
      dragConstraints={dragConstraintsRef}
      dragMomentum={false}
    >
      {/* Title bar */}
      <header className="tab-header-gradient pt-1.5 pb-1 pl-3 text-xs">
        {title}
      </header>

      {/* Content */}
      <div
        className={[
          '',
          tabStyle === TAB_STYLE.BORDERED && 'tab-bordered-content',
        ].join(' ')}
      >
        {children}
      </div>
    </motion.article>
  );
};

export { Tab, TAB_STYLE };
