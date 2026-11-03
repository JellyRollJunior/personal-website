
import { useReducer } from 'react';
import { data } from '../tabs/TabData.jsx';
import { init, tabManagerReducer } from './tabManagerReducer.js';
import { Desktop } from './Desktop.jsx';
import { TabStrip } from './TabStrip.jsx';

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

export { DesktopShell };
