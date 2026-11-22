import imageIcon from './../../assets/icons/image.svg';
import windowIcon from './../../assets/icons/window.svg';
import terminalIcon from './../../assets/icons/terminal.svg';

import { IntroDescription } from '../content/IntroDescription.jsx';
import { IntroMainImage } from '../content/IntroMainImage.jsx';
import { MobileTab } from '../tabs/Tab/MobileTab.jsx';
import { TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { SocialMediaContent } from '../content/SocialMediaContent.jsx';
import { ResumeContent } from '../content/ResumeContent.jsx';

const MobileIntro = () => {
  return (
    <>
      {/* Image */}
      <MobileTab
        className={'mx-2'}
        icon={imageIcon}
        title={'me.jpg'}
        tabStyle={TAB_STYLE.BORDERED}
      >
        <IntroMainImage className={'w-full'} />
      </MobileTab>

      {/* Description */}
      <MobileTab
        className={'mx-5 -mt-5 '}
        icon={windowIcon}
        title={''}
      >
        <IntroDescription />
      </MobileTab>

      {/* Resume & Socials */}
      <div className='flex -mt-8 z-10'>
        <MobileTab
          className={'z-10'}
          icon={windowIcon}
          title={'Resume'}
        >
          <ResumeContent />
        </MobileTab>
        <MobileTab
          className={'mt-12 -ml-5 z-0'}
          icon={terminalIcon}
          title={'Socials'}
        >
          <SocialMediaContent />
        </MobileTab>
      </div>
    </>
  );
};

export { MobileIntro };
