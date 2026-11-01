import { useRef } from 'react';
import { Tab } from './Tab.jsx';

const Desktop = ({ tabData, hiddenTabs }) => {
  const containerRef = useRef(null);

  return (
    <main className="site-bg relative h-full w-full" ref={containerRef}>
      {tabData &&
        tabData.map(({ id, title, tabStyle, defaultPosition, Content }) => (
          <Tab
            title={title}
            tabStyle={tabStyle}
            defaultPosition={defaultPosition}
            isHidden={hiddenTabs.includes(id)}
            dragConstraintsRef={containerRef}
          >
            <Content />
          </Tab>
        ))}
    </main>
  );
};

export { Desktop };
