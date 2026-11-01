// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const TAB_STYLE = Object.freeze({
  BORDERLESS: 'BORDERLESS',
  BORDERED: 'BORDERED',
});

const Tab = ({
  title,
  tabStyle = TAB_STYLE.BORDERLESS,
  defaultPosition = { x: 0, y: 0 },
  isHidden = false,
  zIndex = 0,
  dragConstraintsRef,
  children,
}) => {
  return (
    <motion.article
      className={[
        'tab absolute h-fit w-fit',
        tabStyle === TAB_STYLE.BORDERED && 'tab-bordered',
        isHidden && 'hidden',
      ].join(' ')}
      style={{
        x: defaultPosition.x,
        y: defaultPosition.y,
        zIndex,
      }}
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
