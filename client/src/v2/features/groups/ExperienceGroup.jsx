import windowIcon from './../../assets/icons/window.svg';
import codeIcon from './../../assets/icons/code.svg';

import { experienceGroupData } from './data/groups.js';
import { Tab, TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { useTabManager } from './TabManager/useTabManager.js';
import { useDesktopContext } from '../shell/Desktop/useDesktopContext.js';
import { ResumeContent } from '../content/ResumeContent.jsx';
import { FortinetExperienceContent } from '../content/FortinetExperienceContent.jsx';
import { SeeMoreExperienceContent } from '../content/SeeMoreExperienceContent.jsx';

const ExperienceGroup = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <ExperienceGroupContent dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const ExperienceGroupContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const { activeGroupId } = useDesktopContext();

  const isActiveGroup = activeGroupId === experienceGroupData.id;

  return (
    <>
      {/* Fortinet */}
      <Tab
        id={'experience:fortinet'}
        icon={windowIcon}
        title={'Work History - Fortinet'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: '2%', y: '40%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <FortinetExperienceContent />
      </Tab>

      {/* Resume */}
      <Tab
        id={'experience:resume'}
        icon={windowIcon}
        title={'Resume'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: '45%', y: '3%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <ResumeContent />
      </Tab>

      {/* See my other works! */}
      <Tab
        id={'experience:see-more'}
        icon={codeIcon}
        title={'"Extra Curriculars"'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: '60%', y: '30%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
<SeeMoreExperienceContent/>
      </Tab>
    </>
  );
};

export { ExperienceGroup };
