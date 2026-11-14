import erpin from './../../assets/images/erpin-rocks.jpeg';
import imageIcon from './../../assets/icons/image.svg';

import { experienceGroupData } from './data/groups.js';
import { Tab, TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { useTabManager } from './TabManager/useTabManager.js';
import { useDesktopContext } from '../shell/Desktop/useDesktopContext.js';

const ExperienceGroup = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <ExperienceGroupContent dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const ExperienceGroupContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const { activeGroupId } = useDesktopContext();

  const isActiveGroup = activeGroupId === experienceGroupData.id;

  return (
    <>
      {/* placeholder */}
      <Tab
        id={'experience:test'}
        icon={imageIcon}
        title={'test'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <img className="image-content" src={erpin} />
      </Tab>
    </>
  );
};

export { ExperienceGroup };
