import erpin from './../../../assets/images/background.jpeg';

import { Tab, TAB_STYLE } from '../../tabs/Tab/Tab.jsx';
import { TabManagerProvider } from '../TabManager/TabManagerContext.jsx';
import { useTabManager } from '../TabManager/useTabManager.js';
import { useDesktopContext } from '../../shell/Desktop/useDesktopContext.js';

const HomeGroup = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <HomeGroupContent dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const HomeGroupContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const { activeGroupId } = useDesktopContext();
  const ERPIN_TAB_ID = 'home:erpin';
  const tabIds = [ERPIN_TAB_ID];

  const isActiveGroup = activeGroupId === HomeGroupData.id;

  return (
    <>
      <Tab
        id={ERPIN_TAB_ID}
        title={'test'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <img className="pointer-events-none" src={erpin} />
      </Tab>
    </>
  );
};

const HomeGroupData = {
  id: 'home',
  name: 'home',
  size: '250mb',
  type: 'folder',
  dateModified: '09-11-2026',
};

export { HomeGroup, HomeGroupData };
