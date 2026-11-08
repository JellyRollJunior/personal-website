import { useTaskbarSlot } from './useTaskbarSlot.js';

const TaskBar = () => {
  const { setSlot } = useTaskbarSlot();

  return (
    <>
      {/* Portaled buttons render in here */}
      <div ref={setSlot} className="flex gap-1 border border-black p-1"></div>
    </>
  );
};

export { TaskBar };
