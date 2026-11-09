import erpin from './../../../assets/images/background.jpeg';

import { Tab, TAB_STYLE } from '../../tabs/Tab/Tab.jsx';
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
  const ERPIN_TAB_ID = 'home:erpin';
  const tabIds = ['home:erpin'];

  return (
    <>
      <Tab
        id={ERPIN_TAB_ID}
        title={'test'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={true}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <img className="pointer-events-none" src={erpin} />
      </Tab>
    </>
  );
};

export { HomeGroup };
