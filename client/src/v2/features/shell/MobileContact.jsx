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
      {/* Email */}
      <MobileTab
        className={''}
        icon={terminalIcon}
        title={'User Email'}
        tabStyle={TAB_STYLE.BORDERLESS}
      >
        <EmailContent />
      </MobileTab>

      {/* Kommy */}
      <MobileTab
        className={'ml-10 z-10 -mt-2'}
        icon={TRICKCAL_BUG_TRACKER.favicon}
        title={'Wise Words from Kommy'}
        tabStyle={TAB_STYLE.BORDERED}
      >
        <img className="image-content w-full" src={kommy} />
      </MobileTab>

      {/* Socials */}
      <MobileTab
        className={'self-start -mt-2'}
        icon={terminalIcon}
        title={'Socials'}
        tabStyle={TAB_STYLE.BORDERLESS}
      >
        <SocialMediaContent />
      </MobileTab>

      {/* Version */}
      {/* <MobileTab className={''} icon={terminalIcon} title={'@version'}>
        <VersionContent />
      </MobileTab> */}
    </>
  );
};

export { MobileContact };
