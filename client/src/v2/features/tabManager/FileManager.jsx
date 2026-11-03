import { createTab, TAB_STYLE } from '../tabs/createTab.js';

const FILE_MANAGER_TAB_ID = 'File Manager';

const TabManagerMenuContent = () => {
  return (
    <nav>
      {/* nav content here */}
    </nav>
  );
};

const FileManagerTab = createTab({
  id: FILE_MANAGER_TAB_ID,
  title: 'File Manager',
  tabStyle: TAB_STYLE.BORDERLESS,
  defaultPosition: { x: 0, y: 0 },
  Content: TabManagerMenuContent,
});

export { FILE_MANAGER_TAB_ID, FileManagerTab };
