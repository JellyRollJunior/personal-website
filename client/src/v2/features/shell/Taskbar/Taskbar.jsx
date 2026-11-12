import { useTaskbarSlot } from './useTaskbarSlot.js';

const TaskBar = () => {
  const { setSlot } = useTaskbarSlot();

  return (
    <>
      {/* Portaled buttons render in here */}
      <div ref={setSlot} className="flex overflow-x-auto w-full gap-1 border border-black py-1"></div>
    </>
  );
};

export { TaskBar };
