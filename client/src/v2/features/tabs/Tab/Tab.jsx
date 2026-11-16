// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue } from 'motion/react';

import hide from '../../../assets/icons/minimize.svg';

import { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTaskbarSlot } from '../../shell/Taskbar/useTaskbarSlot.js';
import { TaskbarButton } from '../../shell/Taskbar/TaskbarButton.jsx';
import { useTab } from './useTab.js';

const TAB_STYLE = Object.freeze({
  BORDERLESS: 'BORDERLESS',
  BORDERED: 'BORDERED',
});

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
  icon = null,
  title,
  tabStyle = TAB_STYLE.BORDERLESS,
  defaultPosition = { x: 0, y: 0 },
  isInActiveGroup = false,
  dragConstraintsRef,
  state,
  dispatch,
  children,
}) => {
  const {
    isTabHidden,
    isTabFocused,
    zIndex,
    handleTabFocus,
    handleTabHide,
    handleTaskbarButtonClick,
  } = useTab({ id, state, dispatch });
  const { slot } = useTaskbarSlot();

  // Hide/Show tab animation origin
  const originX = useMotionValue(0);
  const originY = useMotionValue(0);
  const ref = useRef(null);
  const buttonRef = useRef(null);

  // Calculate Hide/Show tab animation origin
  useLayoutEffect(() => {
    if (!isTabHidden) return;
    const taskbarButton = buttonRef.current;
    const tab = ref.current;
    if (!taskbarButton || !tab) return;

    const b = taskbarButton.getBoundingClientRect();
    const t = tab.getBoundingClientRect();
    // Set center of tab button as scale origin
    // Tranform origin sets element top left as origin (0, 0)
    //    Therefore values need to be relative to tabs top left corner
    originX.set(`${b.left + b.width / 2 - t.left}px`);
    originY.set(`${b.top + b.height / 2 - t.top}px`);
  }, [id, isTabHidden, originX, originY]);

  return (
    <>
      {/* Tab */}
      <motion.article
        className={['tab absolute h-fit w-fit'].join(' ')}
        style={{
          left: defaultPosition.x,
          top: defaultPosition.y,
          zIndex: zIndex ?? 0,
          originX,
          originY,
          pointerEvents: isTabHidden ? 'none' : 'auto',
        }}
        variants={VARIANTS}
        initial={false}
        animate={
          !isInActiveGroup ? 'inactive' : isTabHidden ? 'hidden' : 'visible'
        }
        drag
        dragConstraints={dragConstraintsRef}
        dragMomentum={false}
        onPointerDown={handleTabFocus}
        ref={ref}
      >
        {/* Title bar */}
        <header className="tab-header-gradient tab-header flex min-w-2xs items-center gap-1.5 px-3 pt-2 pb-1.5">
          {icon && <img className="size-5" src={icon} aria-hidden={true} />}
          <span className="flex flex-1 items-center">{title}</span>
          <button
            className="ml-5 rounded-full hover:bg-gray-600"
            aria-label="minimize tab button"
            onClick={handleTabHide}
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

      {/* Taskbar Tab Button */}
      {slot &&
        state &&
        createPortal(
          <TaskbarButton
            ref={buttonRef}
            isFocused={isTabFocused}
            isHidden={!isInActiveGroup}
            isPressed={isTabHidden}
            onClick={handleTaskbarButtonClick}
            children={title}
          />,
          slot
        )}
    </>
  );
};

export { Tab, TAB_STYLE };
