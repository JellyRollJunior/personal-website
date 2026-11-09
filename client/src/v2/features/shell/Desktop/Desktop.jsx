import { useRef } from 'react';
import { DesktopContextProvider } from './DesktopContext.jsx';
import { GroupManager } from '../../groups/GroupManager.jsx';
import { HomeGroup, HomeGroupData } from '../../groups/HomeGroup/HomeGroup.jsx';
import { ProjectGroup, ProjectGroupData } from '../../groups/ProjectGroup/ProjectGroup.jsx';

const Desktop = () => {
  return (
    <DesktopContextProvider>
      <DesktopContent />
    </DesktopContextProvider>
  );
};

const DesktopContent = () => {
  const containerRef = useRef(null);
  const groups = [HomeGroupData, ProjectGroupData];

  return (
    <main className="site-bg relative h-full w-full" ref={containerRef}>
      <GroupManager groups={groups} dragConstraintsRef={containerRef} />
      <HomeGroup dragConstraintsRef={containerRef} />
      <ProjectGroup dragConstraintsRef={containerRef} />
    </main>
  );
};

export { Desktop };
