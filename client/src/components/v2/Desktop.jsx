import { useRef } from 'react';
import { Tab } from './Tab.jsx';

const Desktop = ({ tabData }) => {
  const containerRef = useRef(null);

  return (
    <main className="site-bg h-full w-full" ref={containerRef}>
      {tabData &&
        tabData.map(({ title, tabStyle, Content }) => (
          <Tab
            title={title}
            tabStyle={tabStyle}
            dragConstraintsRef={containerRef}
          >
            <Content />
          </Tab>
        ))}
    </main>
  );
};

export { Desktop };
