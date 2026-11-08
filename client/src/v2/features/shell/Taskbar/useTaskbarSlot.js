import { useContext } from 'react';
import { TaskbarSlotContext } from './TaskbarSlotContext.jsx';

const useTaskbarSlot = () => {
    const context = useContext(TaskbarSlotContext);
    if (!context) throw new Error('useTaskbarSlot must be used within TaskbarSlotProvider');
    return context;
};

export { useTaskbarSlot };
