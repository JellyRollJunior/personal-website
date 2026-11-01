// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

import hide from '../../assets/v2/icons/minimize.svg';

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
  handleFocus,
  handleHide,
  dragConstraintsRef,
  children,
}) => {
  return (
    <motion.article
      className={[
        'tab absolute h-fit w-fit',
        tabStyle === TAB_STYLE.BORDERED && 'tab-bordered',
        isHidden && 'pointer-events-none invisible',
      ].join(' ')}
      style={{
        x: defaultPosition.x,
        y: defaultPosition.y,
        zIndex,
      }}
      drag
      dragConstraints={dragConstraintsRef}
      dragMomentum={false}
      onPointerDown={handleFocus}
    >
      {/* Title bar */}
      <header className="tab-header-gradient flex items-center px-3 pt-1.5 pb-1 text-xs">
        <span className="block flex-1">{title}</span>
        <button
          className="rounded-full hover:bg-gray-600"
          aria-label="minimize tab button"
          onClick={handleHide}
        >
          <img className="size-4.5" src={hide} aria-hidden={true} />
        </button>
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
