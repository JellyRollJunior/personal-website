import { createContext, useState } from 'react';

const TaskbarSlotContext = createContext(null);

const TaskbarSlotProvider = ({ children }) => {
  const [slot, setSlot] = useState(null);

  return (
    <TaskbarSlotContext.Provider value={{ slot, setSlot }}>
      {children}
    </TaskbarSlotContext.Provider>
  );
};

export { TaskbarSlotContext, TaskbarSlotProvider };
