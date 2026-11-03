import { createTab, TAB_STYLE } from '../tabs/createTab.js';

const TabManagerMenuContent = () => {
  return (
    <nav>
      {/* nav content here */}
    </nav>
  );
};

const FileManagerTab = createTab({
  id: 'File Manager',
  title: 'File Manager',
  tabStyle: TAB_STYLE.BORDERLESS,
  defaultPosition: { x: 0, y: 0 },
  Content: TabManagerMenuContent,
});

export { FileManagerTab };
