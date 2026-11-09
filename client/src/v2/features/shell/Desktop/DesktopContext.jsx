import { createContext, useCallback, useMemo, useRef } from 'react';

const DesktopContext = createContext(null);

const DesktopContextProvider = ({ children }) => {
  const zCounter = useRef(0);
  const getNextZ = useCallback(() => ++zCounter.current, []);
  const contextValue = useMemo(() => ({ getNextZ }), [getNextZ]);

  return (
    <DesktopContext.Provider value={contextValue}>
      {children}
    </DesktopContext.Provider>
  );
};
export { DesktopContextProvider, DesktopContext };
