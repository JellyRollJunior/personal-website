import erpin from '../../assets/images/background.jpeg';

import { createTab, TAB_STYLE } from './createTab.js';

const ERPIN_TAB_ID = 'Erpin Rocks'

const ErpinTabContent = () => {
  return <img src={erpin} />;
};

const ErpinTab = createTab({
  id: ERPIN_TAB_ID,
  title: 'Erpin Rocks',
  tabStyle: TAB_STYLE.BORDERED,
  defaultPosition: { x: 0, y: 0 },
  Content: ErpinTabContent,
});

export { ErpinTab, ERPIN_TAB_ID };
