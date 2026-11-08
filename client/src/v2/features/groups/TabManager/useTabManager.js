import { useContext } from 'react';
import { TabManagerContext } from './TabManagerContext.jsx';

const useTabManager = () => {
    const context = useContext(TabManagerContext);
    if (!context) throw new Error('useMe must be used within TabManagerProvider');
    return context;
};

export { useTabManager };
