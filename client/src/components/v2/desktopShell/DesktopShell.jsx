import erpin from '../../../assets/v2/images/background.jpeg';

import { useReducer } from 'react';
import { init, tabManagerReducer } from './tabManagerReducer.js';
import { TAB_STYLE } from '../Tab.jsx';
import { Desktop } from '../Desktop.jsx';
import { TabStrip } from '../TabStrip.jsx';

const DesktopShell = () => {
  const [state, dispatch] = useReducer(tabManagerReducer, data, init);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="min-h-0 flex-1">
        <Desktop tabData={data} state={state} dispatch={dispatch} />
      </div>
      <TabStrip tabData={data} state={state} dispatch={dispatch} />
    </div>
  );
};

const data = [
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

export { DesktopShell };
