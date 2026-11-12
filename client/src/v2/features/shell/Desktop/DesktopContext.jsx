import { createContext, useCallback, useMemo, useRef, useState } from 'react';
import { introGroupData } from '../../groups/data/groups.js';
import { BACKGROUNDS } from '../../../data/backgrounds.js';

const DesktopContext = createContext(null);

const DesktopContextProvider = ({ children }) => {
  const zCounter = useRef(0);
  const getNextZ = useCallback(() => ++zCounter.current, []);
  const [activeGroupId, setActiveGroupId] = useState(introGroupData.id);
  const [backgroundId, setBackgroundId] = useState(() => {
    try {
      const saved = localStorage.getItem('desktop-bg');
      return BACKGROUNDS.some((bg) => bg.id === saved)
        ? saved
        : BACKGROUNDS[0].id;
    } catch {
      return BACKGROUNDS[0].id;
    }
  });

  const changeBackground = useCallback((id) => {
    setBackgroundId(id);
    try {
      localStorage.setItem('desktop-bg', id);
    } catch {
      console.warn('Could not save background to local storage');
    }
  }, []);

  const contextValue = useMemo(() => {
    return {
      getNextZ,
      activeGroupId,
      setActiveGroupId,
      backgroundId,
      changeBackground,
    };
  }, [
    getNextZ,
    activeGroupId,
    setActiveGroupId,
    backgroundId,
    changeBackground,
  ]);

  return (
    <DesktopContext.Provider value={contextValue}>
      {children}
    </DesktopContext.Provider>
  );
};
export { DesktopContextProvider, DesktopContext };
