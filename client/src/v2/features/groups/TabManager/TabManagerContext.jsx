import { createContext, useReducer } from 'react';
import { init, tabManagerReducer } from './tabManagerReducer.js';

const TabManagerContext = createContext(null);

const TabManagerProvider = ({ tabIdArray, children }) => {
  const [state, dispatch] = useReducer(tabManagerReducer, tabIdArray, init);

  return (
    <TabManagerContext.Provider value={{ state, dispatch }}>
      {children}
    </TabManagerContext.Provider>
  );
};
export { TabManagerProvider, TabManagerContext };
