import { createTab, TAB_STYLE } from '../tabs/createTab.js';
import { GROUPS } from '../tabs/TabGroups.js';
import { TAB_ID } from '../tabs/tabIds.js';

const TabManagerMenuContent = () => {
  return (
    <nav>
      {/* nav content here */}
      {
        GROUPS.map((group) => (
          <div>{group.name}</div>
        ))
      }
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
