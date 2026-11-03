import { data } from '../tabs/TabData.jsx';
import { Desktop } from './Desktop.jsx';
import { TabStrip } from './TabStrip.jsx';
import { TabManagerProvider } from './context/TabManagerContext.jsx';

const DesktopShell = () => {
  return (
    <TabManagerProvider>
      <div className="flex h-full w-full flex-col">
        <div className="min-h-0 flex-1">
          <Desktop tabData={data} />
        </div>
        <TabStrip tabData={data} />
      </div>
    </TabManagerProvider>
  );
};

export { DesktopShell };
