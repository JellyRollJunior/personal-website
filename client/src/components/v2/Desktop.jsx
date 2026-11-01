import erpin from '../../assets/v2/images/background.jpeg';

import { useRef } from 'react';
import { Tab, TAB_STYLE } from './Tab.jsx';

const Desktop = () => {
  const containerRef = useRef(null);

  return (
    <main className="site-bg h-full w-full" ref={containerRef}>
      <Tab title="Erpin Rocks" dragConstraintsRef={containerRef}>
        <img src={erpin} />
      </Tab>
      <Tab
        title="Erpin Rocks"
        tabStyle={TAB_STYLE.BORDERED}
        dragConstraintsRef={containerRef}
      >
        <img src={erpin} />
      </Tab>
    </main>
  );
};

export { Desktop };
