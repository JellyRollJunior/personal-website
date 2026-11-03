import { createContext, useReducer } from 'react';
import { init, tabManagerReducer } from '../tabManagerReducer.js';
import { data } from '../../tabs/TabData.jsx';

const TabManagerContext = createContext(null);

const TabManagerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tabManagerReducer, data, init);

  return (
    <TabManagerContext.Provider value={{ state, dispatch }}>
      {children}
    </TabManagerContext.Provider>
  );
};
export { TabManagerProvider, TabManagerContext };
