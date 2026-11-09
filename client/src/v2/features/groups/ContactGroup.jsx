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
        title={'Email'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <h2>Let's Connect!</h2>
        <p>
          Click{' '}
          <a className="underline" href="mailto:BrandonLin9716@gmail.com">
            Here
          </a>{' '}
          to send me an e-mail at:
        </p>
        <h3 className="mt-1 text-xl font-bold break-all">
          BrandonLin9716@gmail.com
        </h3>
      </Tab>

      {/* Socials Tab */}
      <Tab
        id={SOCIALS_TAB_ID}
        title={'Socials'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <h4 className="font-saira">Reach me through social media:</h4>
        <div className="mt-2 flex items-center justify-center gap-8">
          <a
            className="inline-block w-[42px] shrink-0"
            href="https://github.com/jellyrolljunior"
            target="”_blank”"
            rel="noopener"
          >
            <img className="w-full" src={github} />
          </a>
          <a
            className="inline-block w-[42px] shrink-0"
            href="https://www.instagram.com/river.flows__"
            target="”_blank”"
            rel="noopener"
          >
            <img className="w-full" src={instagram} />
          </a>
          <a
            className="inline-block w-[42px] shrink-0"
            href="https://www.linkedin.com/in/jellyrolljunior/"
            target="”_blank”"
            rel="noopener"
          >
            <img className="w-full" src={linkedin} />
          </a>
        </div>
      </Tab>
    </>
  );
};

export { ContactGroup };
