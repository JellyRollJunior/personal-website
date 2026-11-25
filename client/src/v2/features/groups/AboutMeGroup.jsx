import terminalIcon from './../../assets/icons/terminal.svg';

import { ABOUT_ME_IMAGES } from '../../data/aboutMe.js';
import { aboutMeGroupData } from './data/groups.js';
import { Tab, TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { useTabManager } from './TabManager/useTabManager.js';
import { useDesktopContext } from '../shell/Desktop/useDesktopContext.js';
import { InterestsContent } from '../content/InterestsContent.jsx';

const AboutMeGroup = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <AboutMeContent dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const DEFAULT_IMAGE_POSITIONS = [
  {
    x: '58%',
    y: '0%',
  },
  {
    x: '24%',
    y: '3%',
  },
  {
    x: '55%',
    y: '35%',
  },
];

const AboutMeContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const { activeGroupId } = useDesktopContext();

  const isActiveGroup = activeGroupId === aboutMeGroupData.id;

  return (
    <>
      {ABOUT_ME_IMAGES.map(({ id, icon, title, src }, index) => (
        <Tab
          key={id}
          id={id}
          icon={icon}
          title={title}
          tabStyle={TAB_STYLE.BORDERED}
          defaultPosition={DEFAULT_IMAGE_POSITIONS[index] ?? { x: 0, y: 0 }}
          isInActiveGroup={isActiveGroup}
          state={state}
          dispatch={dispatch}
          dragConstraintsRef={dragConstraintsRef}
        >
          <img className="image-content" src={src} />
        </Tab>
      ))}

      {/* Interests */}
      <Tab
        id={'about:interests'}
        icon={terminalIcon}
        title={'Interests'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: '1%', y: '45%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <InterestsContent />
      </Tab>
    </>
  );
};

export { AboutMeGroup };
