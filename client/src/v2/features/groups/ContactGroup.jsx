import terminalIcon from './../../assets/icons/terminal.svg'
import instagram from './../../assets/icons/instagram.svg';
import github from './../../assets/icons/github.svg';
import linkedin from './../../assets/icons/linkedin.svg';
import kommy from './../../assets/images/kommy-w.PNG';

import { contactGroupData } from './data/groups.js';
import { TRICKCAL_BUG_TRACKER } from '../../data/projects.js';
import { useDesktopContext } from './../shell/Desktop/useDesktopContext.js';
import { useTabManager } from './TabManager/useTabManager.js';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { Tab, TAB_STYLE } from './../tabs/Tab/Tab.jsx';

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
        defaultPosition={{ x: 0, y: 0 }}
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
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <div className="terminal terminal-static-line terminal-text-green tab-content text-base px-5 py-3">
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
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <div className="terminal terminal-static-line terminal-text-orange tab-content px-5 pt-3 pb-4">
          <h4 className="text-center">Reach me through social media:</h4>
          <div className="mt-3 flex w-full items-center justify-center gap-8">
            <a
              className="inline-block w-[38px] shrink-0"
              href="https://github.com/jellyrolljunior"
              target="”_blank”"
              rel="noopener"
            >
              <img className="w-full" src={github} aria-hidden={true} />
            </a>
            <a
              className="inline-block w-[38px] shrink-0"
              href="https://www.instagram.com/river.flows__"
              target="”_blank”"
              rel="noopener"
            >
              <img className="w-full" src={instagram} aria-hidden={true} />
            </a>
            <a
              className="inline-block w-[38px] shrink-0"
              href="https://www.linkedin.com/in/jellyrolljunior/"
              target="”_blank”"
              rel="noopener"
            >
              <img className="w-full" src={linkedin} aria-hidden={true} />
            </a>
          </div>
        </div>
      </Tab>

      {/* Version */}
      <Tab
        id={'contact:version'}
        icon={terminalIcon}
        title={'@version'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <div className="terminal text-xs terminal-static-line terminal-text-green tab-content px-5 py-3">
          brandonlin@Brandons-porfolio-site ~ % who am i
          <br />
          <span className="terminal-text-orange whitespace-pre">
            Brandon Lin's Portfolio {"\t"} version 2.0 {"\t"} Nov 12 16:36 2026{' '}
          </span>
          <br />
          brandonlin@Brandons-porfolio-site ~ % license
          <br />
          <span className="terminal-text-orange whitespace-pre">
            Brandon Lin·2026 {"\t"} All Rights Reserved
          </span>
          <br />
          brandonlin@Brandons-porfolio-site ~ %
        </div>
      </Tab>
    </>
  );
};

export { ContactGroup };
