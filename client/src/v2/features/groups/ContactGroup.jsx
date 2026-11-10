import instagram from './../../assets/icons/instagram.svg';
import github from './../../assets/icons/github.svg';
import linkedin from './../../assets/icons/linkedin.svg';

import { useTabManager } from './TabManager/useTabManager.js';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { useDesktopContext } from './../shell/Desktop/useDesktopContext.js';
import { Tab, TAB_STYLE } from './../tabs/Tab/Tab.jsx';
import { contactGroupData } from './data/groups.js';

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

  const EMAIL_TAB_ID = 'contact:email';
  const SOCIALS_TAB_ID = 'contact:socials';

  const isActiveGroup = activeGroupId === contactGroupData.id;

  return (
    <>
      {/* Email Tab */}
      <Tab
        id={EMAIL_TAB_ID}
        title={'User Email'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <div className="terminal terminal-static-line terminal-text-green bg-black px-5 py-3">
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
        id={SOCIALS_TAB_ID}
        title={'Socials'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <div className="terminal terminal-static-line terminal-text-orange bg-black px-5 py-3">
          <h4 className="">Reach me through social media:</h4>
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
    </>
  );
};

export { ContactGroup };
