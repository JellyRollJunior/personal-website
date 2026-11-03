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
  defaultPosition: { x: 50, y: 200 },
  Content: ErpinTabContent,
});

export { ErpinTab };
