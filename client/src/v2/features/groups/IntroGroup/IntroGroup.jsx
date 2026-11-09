import erpin from './../../../assets/images/background.jpeg';

import { introGroupData } from '../data/groups.js';
import { Tab, TAB_STYLE } from '../../tabs/Tab/Tab.jsx';
import { TabManagerProvider } from '../TabManager/TabManagerContext.jsx';
import { useTabManager } from '../TabManager/useTabManager.js';
import { useDesktopContext } from '../../shell/Desktop/useDesktopContext.js';

const IntroGroup = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <IntroGroupContent dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const IntroGroupContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const { activeGroupId } = useDesktopContext();
  const ERPIN_TAB_ID = 'home:erpin';

  const isActiveGroup = activeGroupId === introGroupData.id;

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

export { IntroGroup };
