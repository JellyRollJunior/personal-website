import erpin from '../../../assets/v2/images/background.jpeg';

import { FileManagerTab } from './FileManager.jsx';
import { TAB_STYLE } from '../../../data/v2/createTab.js';

const data = [
  FileManagerTab,
  {
    id: '1',
    title: 'Erpin Rocks',
    tabStyle: TAB_STYLE.BORDERED,
    defaultPosition: { x: 0, y: 0 },
    Content: () => <img src={erpin} />,
  },
  {
    id: '2',
    title: 'Erpin Rocks 2',
    tabStyle: TAB_STYLE.BORDERLESS,
    defaultPosition: { x: 50, y: 50 },
    Content: () => <img src={erpin} />,
  },
];

export { data };
