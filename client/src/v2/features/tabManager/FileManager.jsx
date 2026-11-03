import { createTab, TAB_STYLE } from '../tabs/createTab.js';
import { GROUPS } from '../tabs/TabGroups.js';
import { TAB_ID } from '../tabs/tabIds.js';
import { useTabManagerContext } from './context/useTabManager.js';
import { ACTION } from './tabManagerReducer.js';

const TabManagerMenuContent = () => {
  const { dispatch } = useTabManagerContext();

  return (
    <nav>
      {/* nav content here */}
      {GROUPS.map((group) => (
        <button
          onClick={() => dispatch({ type: ACTION.SET_GROUP, id: group.id })}
        >
          {group.name}
        </button>
      ))}
    </nav>
  );
};

const FileManagerTab = createTab({
  id: TAB_ID.FILE_MANAGER,
  title: 'File Manager',
  tabStyle: TAB_STYLE.BORDERLESS,
  defaultPosition: { x: 0, y: 0 },
  Content: TabManagerMenuContent,
});

export { FileManagerTab };
