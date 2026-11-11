import { useTabManager } from '../TabManager/useTabManager.js';
import { TabManagerProvider } from '../TabManager/TabManagerContext.jsx';
import { useDesktopContext } from '../../shell/Desktop/useDesktopContext.js';
import { Tab, TAB_STYLE } from '../../tabs/Tab/Tab.jsx';
import { skillsToolsGroupData } from '../data/groups.js';

const SkillsAndToolsGroup = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <SkillsToolsGroupContent dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const SkillsToolsGroupContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const { activeGroupId } = useDesktopContext();

  const isActiveGroup = activeGroupId === skillsToolsGroupData.id;

  return <></>;
};

export { SkillsAndToolsGroup };
