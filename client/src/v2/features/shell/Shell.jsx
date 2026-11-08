import { Desktop } from './Desktop.jsx';
import { TaskbarSlotProvider } from './../shell/Taskbar/TaskbarSlotContext.jsx';
import { TaskBar } from './Taskbar/Taskbar.jsx';

const Shell = () => {
  return (
    <TaskbarSlotProvider>
      <div className="flex h-full w-full flex-col">
        <div className="min-h-0 flex-1">
          <Desktop />
        </div>
        <TaskBar />
      </div>
    </TaskbarSlotProvider>
  );
};

export { Shell };
