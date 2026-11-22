import terminalIcon from './../../assets/icons/terminal.svg';
import kommy from './../../assets/images/kommy-w.PNG';

import { TRICKCAL_BUG_TRACKER } from '../../data/projects.js';
import { MobileTab } from '../tabs/Tab/MobileTab.jsx';
import { EmailContent } from '../content/EmailContent.jsx';
import { SocialMediaContent } from '../content/SocialMediaContent.jsx';
import { VersionContent } from '../content/VersionContent.jsx';
import { TAB_STYLE } from '../tabs/Tab/Tab.jsx';

const MobileContact = () => {
  return (
    <>
      <div className="relative ml-1 flex flex-col justify-center sm:mr-1 sm:grid sm:grid-cols-2">
        {/* Email */}
        <MobileTab
          className={'sm:z-20'}
          icon={terminalIcon}
          title={'User Email'}
          tabStyle={TAB_STYLE.BORDERLESS}
        >
          <EmailContent />
        </MobileTab>
        {/* Kommy */}
        <MobileTab
          className={'z-10 row-span-2 -mt-2 ml-10 sm:-mt-8 sm:-ml-8'}
          icon={TRICKCAL_BUG_TRACKER.favicon}
          title={'Wise Words from Kommy'}
          tabStyle={TAB_STYLE.BORDERED}
        >
          <img className="image-content w-full" src={kommy} />
        </MobileTab>

        {/* Socials */}
        <MobileTab
          className={'z-20 -mt-2 sm:mt-2 mr-3'}
          icon={terminalIcon}
          title={'Socials'}
          tabStyle={TAB_STYLE.BORDERLESS}
        >
          <SocialMediaContent />
        </MobileTab>
      </div>

      {/* Version */}
      <MobileTab
        className={'mt-2 w-full'}
        icon={terminalIcon}
        title={'@version'}
      >
        <VersionContent />
      </MobileTab>
    </>
  );
};

export { MobileContact };
