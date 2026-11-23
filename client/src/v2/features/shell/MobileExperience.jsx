import windowIcon from './../../assets/icons/window.svg';

import { MobileTab } from '../tabs/Tab/MobileTab.jsx';
import { FortinetExperienceContent } from '../content/FortinetExperienceContent.jsx';

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
    </>
  );
};

export { MobileExperience };
