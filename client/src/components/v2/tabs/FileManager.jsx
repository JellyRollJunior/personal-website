import { createTab } from '../../../data/v2/createTab.js';
import { Tab, TAB_STYLE } from '../Tab.jsx';

const TabManagerMenuContent = () => {
  return (
    <Tab
      id="menu"
      title="File Manager"
      tabStyle={TAB_STYLE.BORDERLESS}
      defaultPosition={{ x: 0, y: 0 }}
      isHidden={false}
    >
      <nav></nav>
    </Tab>
  );
};

const FileManagerTab = createTab({
  title: 'File Manager',
  tabStyle: TAB_STYLE.BORDERLESS,
  defaultPosition: { x: 0, y: 0 },
  Content: TabManagerMenuContent,
});

export { FileManagerTab };
