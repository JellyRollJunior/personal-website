import erpin from './../../../assets/images/background.jpeg';

import { Tab } from './../../tabs/Tab.jsx';
import { TAB_STYLE } from '../../tabs/data/createTab.js';
import {
  ACTION,
  isFocused,
  isShown,
  zIndexOf,
} from '../TabManager/tabManagerReducer.js';
import { TabManagerProvider } from '../TabManager/TabManagerContext.jsx';
import { useTabManager } from '../TabManager/useTabManager.js';

const HomeGroup = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <HomeGroupContent dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const HomeGroupContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const ERPIN_TAB_ID = 'home:erpin'
  const tabIds = ['home:erpin'];

  return (
    <>
      <Tab
        id={ERPIN_TAB_ID}
        title={'test'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={true}
        isHidden={!isShown(state, ERPIN_TAB_ID)}
        isFocused={!isFocused(state, ERPIN_TAB_ID)}
        zIndex={zIndexOf(state, ERPIN_TAB_ID)}
        handleFocus={() => dispatch({ type: ACTION.FOCUS, id: ERPIN_TAB_ID, z: 1 })}
        handleHide={() => dispatch({ type: ACTION.HIDE, id: ERPIN_TAB_ID })}
        dragConstraintsRef={dragConstraintsRef}
        state={state}
        dispatch={dispatch}
      >
        <img className="pointer-events-none" src={erpin} />
      </Tab>
    </>
  );
};

export { HomeGroup };
