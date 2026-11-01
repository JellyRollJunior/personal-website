import { useRef } from 'react';
import { Tab } from './Tab.jsx';
import { ACTION } from './desktopShell/tabManagerReducer.js';

const Desktop = ({ tabData, state, dispatch }) => {
  const containerRef = useRef(null);

  return (
    <main className="site-bg relative h-full w-full" ref={containerRef}>
      {tabData &&
        tabData.map(({ id, title, tabStyle, defaultPosition, Content }) => (
          <Tab
            title={title}
            tabStyle={tabStyle}
            defaultPosition={defaultPosition}
            isHidden={state.hidden.includes(id)}
            zIndex={state.stack.indexOf(id)}
            handleFocus={() => dispatch({ type: ACTION.FOCUS, id })}
            dragConstraintsRef={containerRef}
          >
            <Content />
          </Tab>
        ))}
    </main>
  );
};

export { Desktop };
