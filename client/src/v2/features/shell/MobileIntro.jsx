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
        id={'intro:description'}
        icon={windowIcon}
        title={'Introduction'}
      >
        <IntroDescription />
      </MobileTab>

      {/* Resume & Socials */}
      <div className='flex -mt-2 z-10'>
        <MobileTab
          className={'z-10'}
          id={'intro:resume'}
          icon={windowIcon}
          title={'Resume'}
        >
          <ResumeContent />
        </MobileTab>
        <MobileTab
          className={'mt-3 -ml-2 z-0'}
          id={'intro:socials'}
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
