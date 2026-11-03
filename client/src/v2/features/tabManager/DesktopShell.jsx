import { TABS } from '../tabs/Tabs.js';
import { Desktop } from './Desktop.jsx';
import { TabStrip } from './TabStrip.jsx';
import { TabManagerProvider } from './context/TabManagerContext.jsx';

const DesktopShell = () => {
  return (
    <TabManagerProvider>
      <div className="flex h-full w-full flex-col">
        <div className="min-h-0 flex-1">
          <Desktop tabData={TABS} />
        </div>
        <TabStrip tabData={TABS} />
      </div>
    </TabManagerProvider>
  );
};

export { DesktopShell };
