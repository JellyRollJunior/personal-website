import { createContext, useReducer } from 'react';
import { init, tabManagerReducer } from '../tabManagerReducer.js';
import { TABS } from '../../tabs/data/Tabs.js';

const TabManagerContext = createContext(null);

const TabManagerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tabManagerReducer, TABS, init);

  return (
    <TabManagerContext.Provider value={{ state, dispatch }}>
      {children}
    </TabManagerContext.Provider>
  );
};
export { TabManagerProvider, TabManagerContext };
