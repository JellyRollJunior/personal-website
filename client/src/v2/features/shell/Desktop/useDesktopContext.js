import { useContext } from 'react';
import { DesktopContext } from './DesktopContext.jsx';

const useDesktopContext = () => {
    const context = useContext(DesktopContext);
    if (!context) throw new Error('useDesktopContext must be used within DesktopContextProvider');
    return context;
};

export { useDesktopContext };
