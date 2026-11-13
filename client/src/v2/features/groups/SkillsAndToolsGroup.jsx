import codeIcon from './../../assets/icons/code.svg'

import { useTabManager } from './TabManager/useTabManager.js';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { useDesktopContext } from '../shell/Desktop/useDesktopContext.js';
import { Tab, TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { skillsAndToolsGroupData } from './data/groups.js';
import { SKILLS } from '../../data/skills.jsx';
import { IconGrid } from '../tabs/IconGrid.jsx';

const SkillsAndToolsGroup = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <SkillsAndToolsGroupContent dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const SkillsAndToolsGroupContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const { activeGroupId } = useDesktopContext();

  const isActiveGroup = activeGroupId === skillsAndToolsGroupData.id;

  return (
    <>
      {SKILLS.map((s) => (
        <Tab
          key={s.id}
          icon={codeIcon}
          id={s.id}
          title={s.title}
          tabStyle={TAB_STYLE.BORDERLESS}
          defaultPosition={{ x: 0, y: 0 }}
          isInActiveGroup={isActiveGroup}
          state={state}
          dispatch={dispatch}
          dragConstraintsRef={dragConstraintsRef}
        >
          <div className="terminal terminal-static-line font-kaisei-opti tab-content px-5 py-5">
            <IconGrid gridCols={3} jsxIconArray={s.icons} />
            <h2 className="terminal-text-green mt-3 text-center text-base">
              {s.title}
            </h2>
          </div>
        </Tab>
      ))}
    </>
  );
};

export { SkillsAndToolsGroup };
