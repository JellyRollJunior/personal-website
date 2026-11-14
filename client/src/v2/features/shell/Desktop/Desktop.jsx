import { useRef } from 'react';
import { GroupManager } from '../../groups/GroupManager.jsx';
import { IntroGroup } from '../../groups/IntroGroup.jsx';
import { WorksGroup } from '../../groups/WorksGroup.jsx';
import { SkillsAndToolsGroup } from '../../groups/SkillsAndToolsGroup.jsx';
import { AboutMeGroup } from '../../groups/AboutMeGroup.jsx';
import { ContactGroup } from '../../groups/ContactGroup.jsx';
import { useDesktopContext } from './useDesktopContext.js';
import { BACKGROUNDS } from '../../../data/backgrounds.js';

const Desktop = () => {
  const containerRef = useRef(null);
  const { backgroundId } = useDesktopContext();
  const background =
    BACKGROUNDS.find((bg) => bg.id === backgroundId) ?? BACKGROUNDS[0];

  return (
    <main
      className="site-bg relative h-full w-full"
      style={{
        '--site-bg-image': `url(${background.src})`,
      }}
      ref={containerRef}
    >
      <GroupManager dragConstraintsRef={containerRef} />
      <IntroGroup dragConstraintsRef={containerRef} />
      <WorksGroup dragConstraintsRef={containerRef} />
      <SkillsAndToolsGroup dragConstraintsRef={containerRef} />
      <AboutMeGroup dragConstraintsRef={containerRef} />
      <ContactGroup dragConstraintsRef={containerRef} />
    </main>
  );
};

export { Desktop };
