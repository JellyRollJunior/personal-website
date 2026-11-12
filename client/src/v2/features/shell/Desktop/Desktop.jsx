import { useRef } from 'react';
import { DesktopContextProvider } from './DesktopContext.jsx';
import { GroupManager } from '../../groups/GroupManager.jsx';
import { IntroGroup } from '../../groups/IntroGroup.jsx';
import { WorksGroup } from '../../groups/WorksGroup/WorksGroup.jsx'
import { ContactGroup } from '../../groups/ContactGroup.jsx';
import { SkillsAndToolsGroup } from '../../groups/SkillsAndToolsGroup.jsx';

const Desktop = () => {
  return (
    <DesktopContextProvider>
      <DesktopContent />
    </DesktopContextProvider>
  );
};

const DesktopContent = () => {
  const containerRef = useRef(null);

  return (
    <main className="site-bg relative h-full w-full" ref={containerRef}>
      <GroupManager dragConstraintsRef={containerRef} />
      <IntroGroup dragConstraintsRef={containerRef} />
      <WorksGroup dragConstraintsRef={containerRef} />
      <SkillsAndToolsGroup dragConstraintsRef={containerRef} />
      <ContactGroup dragConstraintsRef={containerRef} />
    </main>
  );
};

export { Desktop };
