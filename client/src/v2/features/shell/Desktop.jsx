import { useRef } from 'react';
import { HomeGroup } from '../groups/HomeGroup/HomeGroup.jsx';

const Desktop = () => {
  const containerRef = useRef(null);

  return (
    <main className="site-bg relative h-full w-full" ref={containerRef}>
      <HomeGroup />
    </main>
  );
};

export { Desktop };
