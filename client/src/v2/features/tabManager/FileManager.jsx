import { createTab, TAB_STYLE } from '../tabs/createTab.js';
import { GROUPS } from '../tabs/TabGroups.js';
import { TAB_ID } from '../tabs/tabIds.js';
import { useTabManagerContext } from './context/useTabManager.js';
import { ACTION } from './tabManagerReducer.js';

const TabManagerMenuContent = () => {
  const { state, dispatch } = useTabManagerContext();

  return (
    <nav className="flex flex-col items-start bg-black">
      {/* nav content here */}
      {GROUPS.map((g) => (
        <button
          key={g.id}
          className={[state.activeGroupId === g.id ? 'underline' : ''].join(
            ' '
          )}
          onClick={() => dispatch({ type: ACTION.SET_GROUP, id: g.id })}
        >
          {g.name}
        </button>
      ))}
    </nav>
  );
};

const FileManagerTab = createTab({
  id: TAB_ID.FILE_MANAGER,
  title: 'File Manager',
  tabStyle: TAB_STYLE.BORDERED,
  defaultPosition: { x: 0, y: 0 },
  Content: TabManagerMenuContent,
});

export { FileManagerTab };
