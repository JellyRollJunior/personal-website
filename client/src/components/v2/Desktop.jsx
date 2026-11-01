import { useRef } from 'react';
import { Tab } from './Tab.jsx';

const Desktop = ({ tabData }) => {
  const containerRef = useRef(null);

  return (
    <main className="site-bg relative h-full w-full" ref={containerRef}>
      {tabData &&
        tabData.map(({ title, tabStyle, defaultPosition, Content }) => (
          <Tab
            title={title}
            tabStyle={tabStyle}
            defaultPosition={defaultPosition}
            dragConstraintsRef={containerRef}
          >
            <Content />
          </Tab>
        ))}
    </main>
  );
};

export { Desktop };
