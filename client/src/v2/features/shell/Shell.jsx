import { TaskbarSlotProvider } from './../shell/Taskbar/TaskbarSlotContext.jsx';
import { DesktopContextProvider } from './Desktop/DesktopContext.jsx';
import { Desktop } from './Desktop/Desktop.jsx';
import { TaskBar } from './Taskbar/Taskbar.jsx';

const Shell = () => {
  return (
    <TaskbarSlotProvider>
      <DesktopContextProvider>
        <div className="flex h-full w-full flex-col">
          <div className="min-h-0 flex-1">
            <Desktop />
          </div>
          <TaskBar />
        </div>
      </DesktopContextProvider>
    </TaskbarSlotProvider>
  );
};

export { Shell };
