import terminalIcon from './../../assets/icons/terminal.svg';
import kommy from './../../assets/images/kommy-w.PNG';

import { contactGroupData } from './data/groups.js';
import { TRICKCAL_BUG_TRACKER } from '../../data/projects.js';
import { useDesktopContext } from './../shell/Desktop/useDesktopContext.js';
import { useTabManager } from './TabManager/useTabManager.js';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { Tab, TAB_STYLE } from './../tabs/Tab/Tab.jsx';
import { SocialMediaContent } from '../content/SocialMediaContent.jsx';

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
        <div className="terminal terminal-static-line terminal-text-green tab-content px-5 py-3 text-base">
          <h2>Want to chat? ٩(ˊᗜˋ*)و ♡</h2>
          <p>
            Click{' '}
            <a className="underline" href="mailto:BrandonLin9716@gmail.com">
              here
            </a>{' '}
            to send me an e-mail at:
          </p>
          <h3 className="break-all">BrandonLin9716@gmail.com</h3>
        </div>
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
        <div className="terminal terminal-static-line terminal-text-green tab-content px-5 py-3 text-xs">
          brandonlin@Brandons-porfolio-site ~ % who am i
          <br />
          <span className="terminal-text-orange whitespace-pre">
            Brandon Lin's Portfolio {'\t'} version 2.0 {'\t'} Nov 12 16:36
            2026{' '}
          </span>
          <br />
          brandonlin@Brandons-porfolio-site ~ % license
          <br />
          <span className="terminal-text-orange whitespace-pre">
            Brandon Lin·2026 {'\t'} All Rights Reserved
          </span>
          <br />
          brandonlin@Brandons-porfolio-site ~ %
          <br />
          <br />
          brandonlin@Brandons-porfolio-site ~ % cd /easter-egg
          <br />
          brandonlin@Brandons-porfolio-site easter-egg % cat easter-egg.txt
          <br />
          <span className="terminal-text-orange whitespace-pre">
            Want to see version 1.0? click{' '}
            <a href="/v1" target="_blank" rel="noopener" className="underline">
              here
            </a>
          </span>
        </div>
      </Tab>
    </>
  );
};

export { ContactGroup };
