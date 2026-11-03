import erpin from '../../assets/images/background.jpeg';

import { createTab, TAB_STYLE } from './createTab.js';
import { TAB_ID } from './tabIds.js';

const ErpinTabContent = () => {
  return <img src={erpin} />;
};

const ErpinTab = createTab({
  id: TAB_ID.ERPIN,
  title: 'Erpin Rocks',
  tabStyle: TAB_STYLE.BORDERED,
  defaultPosition: { x: 0, y: 0 },
  Content: ErpinTabContent,
});

export { ErpinTab };
