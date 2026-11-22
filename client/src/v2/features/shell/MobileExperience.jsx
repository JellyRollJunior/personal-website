import windowIcon from './../../assets/icons/window.svg';

import { MobileTab } from '../tabs/Tab/MobileTab.jsx';
import { FortinetExperienceContent } from '../content/FortinetExperienceContent.jsx';
import { SeeMoreExperienceContent } from '../content/SeeMoreExperienceContent.jsx';

const MobileExperience = () => {
  return (
    <>
      {/* Fortinet */}
      <MobileTab
        className={'mx-1'}
        icon={windowIcon}
        title={'Work History - Fortinet'}
      >
        <FortinetExperienceContent />
      </MobileTab>

      {/* See More */}
      <MobileTab
        className={'-mt-2 ml-5 z-10'}
        icon={windowIcon}
        title={'Work History - Fortinet'}
      >
        <SeeMoreExperienceContent />
      </MobileTab>
    </>
  );
};

export { MobileExperience };
