import { useRef } from 'react';
import { HomeGroup, HomeGroupData } from '../../groups/HomeGroup/HomeGroup.jsx';
import { GroupManager } from '../../groups/GroupManager.jsx';
import { DesktopContextProvider } from './DesktopContext.jsx';

const Desktop = () => {
  return (
    <DesktopContextProvider>
      <DesktopContent />
    </DesktopContextProvider>
  );
};

const DesktopContent = () => {
  const containerRef = useRef(null);
  const groups = [HomeGroupData];

  return (
    <main className="site-bg relative h-full w-full" ref={containerRef}>
      <GroupManager groups={groups} dragConstraintsRef={containerRef} />
      <HomeGroup dragConstraintsRef={containerRef} />
    </main>
  );
};

export { Desktop };
