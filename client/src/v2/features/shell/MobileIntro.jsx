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
      <div className="flex flex-col sm:grid sm:grid-cols-2">
        {/* Image */}
        <MobileTab
          className={'mx-2 w-fit -mt-18 sm:-mt-1 sm:row-span-2 sm:mr-0'}
          icon={imageIcon}
          title={'me.jpg'}
          tabStyle={TAB_STYLE.BORDERED}
        >
          <IntroMainImage className={'w-full'} />
        </MobileTab>

        {/* Description */}
        <MobileTab
          className={'mx-5 -mt-5 sm:mx-0 sm:-ml-4'}
          icon={windowIcon}
          title={''}
        >
          <IntroDescription />
        </MobileTab>

        {/* Resume */}
        <MobileTab
          className={'z-10 mx-1 -mt-2 hidden w-fit sm:-mt-6 sm:-ml-7 sm:block'}
          icon={windowIcon}
          title={'Resume'}
        >
          <ResumeContent />
        </MobileTab>
      </div>

      <div className="flex w-full flex-row justify-center">
        {/* Resume */}
        <MobileTab
          className={'z-10 -mt-8 -mr-6 w-fit sm:hidden'}
          icon={windowIcon}
          title={'Resume'}
        >
          <ResumeContent />
        </MobileTab>

        {/* Socials */}
        <MobileTab
          className={'mt-1 sm:z-10 sm:-mt-2'}
          icon={terminalIcon}
          title={'Socials'}
        >
          <SocialMediaContent />
        </MobileTab>

        <MobileTab
          className={'mt-3 ml-3 hidden max-w-2xs sm:block'}
          icon={terminalIcon}
          title={'Hint'}
        >
          <div
            className={[
              'terminal terminal-static-line terminal-text-green tab-content px-5 py-3 text-xs',
            ].join(' ')}
          >
            tip: open on desktop for the full OS experience
            <div className="ml-auto w-fit">(＾• ω •＾)</div>
          </div>
        </MobileTab>
      </div>
      <MobileTab
        className={'sm:hidden -mt-2 -z-10 mx-3'}
        icon={terminalIcon}
        title={'Hint'}
      >
        <div
          className={[
            'terminal terminal-static-line terminal-text-green tab-content px-5 py-3 text-xs',
          ].join(' ')}
        >
          tip: open on desktop for the full OS experience
          <div className="ml-auto w-fit">(＾• ω •＾)</div>
        </div>
      </MobileTab>
    </>
  );
};

export { MobileIntro };
