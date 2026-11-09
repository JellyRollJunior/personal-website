import { createContext, useCallback, useMemo, useRef, useState } from 'react';
import { introGroupData } from '../../groups/data/groups.js';

const DesktopContext = createContext(null);

const DesktopContextProvider = ({ children }) => {
  const zCounter = useRef(0);
  const getNextZ = useCallback(() => ++zCounter.current, []);
  const [activeGroupId, setActiveGroupId] = useState(introGroupData.id);

  const contextValue = useMemo(
    () => ({ getNextZ, activeGroupId, setActiveGroupId }),
    [getNextZ, activeGroupId, setActiveGroupId]
  );

  return (
    <DesktopContext.Provider value={contextValue}>
      {children}
    </DesktopContext.Provider>
  );
};
export { DesktopContextProvider, DesktopContext };
