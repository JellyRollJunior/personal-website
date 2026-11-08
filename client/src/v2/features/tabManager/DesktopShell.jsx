import { TABS } from '../tabs/data/Tabs.js';
import { Desktop } from './Desktop.jsx';
import { TabStrip } from './TabStrip.jsx';
import { TabManagerProvider } from './context/TabManagerContext.jsx';
import { TaskbarSlotProvider } from './../shell/Taskbar/TaskbarSlotContext.jsx';

const DesktopShell = () => {
  return (
    <TabManagerProvider>
      <TaskbarSlotProvider>
        <div className="flex h-full w-full flex-col">
          <div className="min-h-0 flex-1">
            <Desktop tabData={TABS} />
          </div>
          <TabStrip tabData={TABS} />
        </div>
      </TaskbarSlotProvider>
    </TabManagerProvider>
  );
};

export { DesktopShell };
