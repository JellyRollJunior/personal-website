import { useTaskbarSlot } from './useTaskbarSlot.js';
import { SetBackgroundButton } from './SetBackgroundButton.jsx';

const TaskBar = () => {
  const { setSlot } = useTaskbarSlot();

  return (
    <>
      {/* Portaled buttons render here */}
      <div ref={setSlot} className="flex overflow-x-auto w-full gap-1 border border-black py-1">
        <SetBackgroundButton />
      </div>
    </>
  );
};

export { TaskBar };
