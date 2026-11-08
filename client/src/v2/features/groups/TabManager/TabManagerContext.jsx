import { createContext, useReducer } from 'react';
import { init, tabManagerReducer } from './tabManagerReducer.js';

const TabManagerContext = createContext(null);

const TabManagerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tabManagerReducer, init);

  return (
    <TabManagerContext.Provider value={{ state, dispatch }}>
      {children}
    </TabManagerContext.Provider>
  );
};
export { TabManagerProvider, TabManagerContext };
