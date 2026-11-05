// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue } from 'motion/react';

import hide from '../../assets/icons/minimize.svg';

import { useLayoutEffect, useRef } from 'react';
import { TAB_STYLE } from './createTab.js';

const VARIANTS = {
  visible: {
    opacity: 1,
    scale: 1,
    visibility: 'visible',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  hidden: {
    opacity: 0,
    scale: 0.15,
    transition: { duration: 0.2, ease: 'easeIn' },
    transitionEnd: { visibility: 'hidden' },
  },
  inactive: {
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' },
    transitionEnd: { visibility: 'hidden' },
  },
};

const Tab = ({
  id,
  title,
  tabStyle = TAB_STYLE.BORDERLESS,
  defaultPosition = { x: 0, y: 0 },
  isInActiveGroup = false,
  isHidden = false,
  zIndex = 0,
  handleFocus,
  handleHide,
  dragConstraintsRef,
  children,
}) => {
  // Hide/Show tab animation origin
  const originX = useMotionValue(0);
  const originY = useMotionValue(0);
  const ref = useRef(null);

  // Calculate Hide/Show tab animation origin
  useLayoutEffect(() => {
    if (!isHidden) return;
    const tabButton = document.querySelector(`[data-tab-button="${id}"]`);
    const tab = ref.current;
    if (!tabButton || !tab) return;

    const b = tabButton.getBoundingClientRect();
    const t = tab.getBoundingClientRect();
    // Set center of tab button as scale origin
    // Tranform origin sets element top left as origin (0, 0)
    //    Therefore values need to be relative to tabs top left corner
    originX.set(`${b.left + b.width / 2 - t.left}px`);
    originY.set(`${b.top + b.height / 2 - t.top}px`);
  }, [id, isHidden, originX, originY]);

  return (
    <motion.article
      className={[
        'tab absolute h-fit w-fit ',
      ].join(' ')}
      style={{
        x: defaultPosition.x,
        y: defaultPosition.y,
        zIndex,
        originX,
        originY,
        pointerEvents: isHidden ? 'none' : 'auto',
      }}
      variants={VARIANTS}
      initial={false}
      animate={!isInActiveGroup ? 'inactive' : isHidden ? 'hidden' : 'visible'}
      drag
      dragConstraints={dragConstraintsRef}
      dragMomentum={false}
      onPointerDown={handleFocus}
      ref={ref}
    >
      {/* Title bar */}
      <header className="tab-header-gradient flex min-w-2xs items-center px-3 pt-1.5 pb-1 text-xs hover:cursor-grab active:cursor-grabbing">
        <span className="block flex-1">{title}</span>
        <button
          className="ml-5 rounded-full hover:bg-gray-600"
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

export { Tab };
