import terminalIcon from './../../assets/icons/terminal.svg';
import kommy from './../../assets/images/kommy-w.PNG';

import { contactGroupData } from './data/groups.js';
import { TRICKCAL_BUG_TRACKER } from '../../data/projects.js';
import { useDesktopContext } from './../shell/Desktop/useDesktopContext.js';
import { useTabManager } from './TabManager/useTabManager.js';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { Tab, TAB_STYLE } from './../tabs/Tab/Tab.jsx';
import { SocialMediaContent } from '../content/SocialMediaContent.jsx';
import { VersionContent } from '../content/VersionContent.jsx';
import { EmailContent } from '../content/EmailContent.jsx';

const ContactGroup = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <ContactGroupContent dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const ContactGroupContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const { activeGroupId } = useDesktopContext();

  const isActiveGroup = activeGroupId === contactGroupData.id;

  return (
    <>
      {/* Kommy */}
      <Tab
        id={'contact:kommy'}
        icon={TRICKCAL_BUG_TRACKER.favicon}
        title={'Wise Words from Kommy'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: '45%', y: '12%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <img className="image-content" src={kommy} />
      </Tab>

      {/* Email Tab */}
      <Tab
        id={'contact:email'}
        icon={terminalIcon}
        title={'User Email'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: '2%', y: '42%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <EmailContent />
      </Tab>

      {/* Socials Tab */}
      <Tab
        id={'contact:socials'}
        icon={terminalIcon}
        title={'Socials'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: '58%', y: '0%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <SocialMediaContent />
      </Tab>

      {/* Version */}
      <Tab
        id={'contact:version'}
        icon={terminalIcon}
        title={'@version'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: '46%', y: '65%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <VersionContent />
      </Tab>
    </>
  );
};

export { ContactGroup };
