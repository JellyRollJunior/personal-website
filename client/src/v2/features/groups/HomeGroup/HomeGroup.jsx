import erpin from './../../../assets/images/background.jpeg';

import { Tab } from './../../tabs/Tab.jsx';
import { TAB_STYLE } from '../../tabs/data/createTab.js';
import { ACTION, isFocused, isShown } from '../TabManager/tabManagerReducer.js';
import { TabManagerProvider } from '../TabManager/TabManagerContext.jsx';
import { useTabManager } from '../TabManager/useTabManager.js';

const HomeGroup = ({ dragConstraintsRef }) => {
  const TAB_IDS = ['home:erpin'];

  return (
    <TabManagerProvider tabIdArray={TAB_IDS}>
      <HomeGroupContent
        tabIds={TAB_IDS}
        dragConstraintsRef={dragConstraintsRef}
      />
    </TabManagerProvider>
  );
};

const HomeGroupContent = ({ tabIds, dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();

  return (
    <>
      <Tab
        id={tabIds[0]}
        title={'test'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={true}
        isHidden={!isShown(state, tabIds[0])}
        isFocused={!isFocused(state, tabIds[0])}
        zIndex={state.stack.indexOf(tabIds[0])}
        handleFocus={() => dispatch({ type: ACTION.FOCUS, id: tabIds[0] })}
        handleHide={() => dispatch({ type: ACTION.HIDE, id: tabIds[0] })}
        dragConstraintsRef={dragConstraintsRef}
        state={state}
        dispatch={dispatch}
      >
        <img className="pointer-events-none" src={erpin} />;
      </Tab>
    </>
  );
};

export { HomeGroup };
