import { createContext, useCallback, useMemo, useRef, useState } from 'react';
import { HomeGroupData } from '../../groups/HomeGroup/HomeGroup.jsx';

const DesktopContext = createContext(null);

const DesktopContextProvider = ({ children }) => {
  const zCounter = useRef(0);
  const getNextZ = useCallback(() => ++zCounter.current, []);
  const [activeGroupId, setActiveGroupId] = useState(HomeGroupData.id);

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
