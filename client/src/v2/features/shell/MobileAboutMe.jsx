import terminalIcon from './../../assets/icons/terminal.svg';

import { TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { ABOUT_ME_IMAGES_MOBILE } from '../../data/aboutMe.js';
import { MobileTab } from '../tabs/Tab/MobileTab.jsx';
import { InterestsContent } from '../content/InterestsContent.jsx';

const MobileAboutMe = () => {
  return (
    <>
      <MobileTab
        className={['w-full'].join(' ')}
        icon={terminalIcon}
        title={'Interests'}
        tabStyle={TAB_STYLE.BORDERLESS}
      >
        <InterestsContent />
      </MobileTab>
      <div className="z-10 -mt-1 grid grid-cols-2 gap-y-2 sm:grid-cols-3">
        {ABOUT_ME_IMAGES_MOBILE.map(({ id, icon, title, src }, index) => (
          <div className='relative'>
              <MobileTab
                key={id}
                className={[
                  'self-end',
                  index > 0 ? 'sm:-ml-4' : '',
                  index % 2 ? '-ml-4 absolute -bottom-12' : 'ml-2',
                ].join(' ')}
                icon={icon}
                title={title}
                tabStyle={TAB_STYLE.BORDERED}
              >
                <img className="image-content w-full" src={src} />
              </MobileTab>
          </div>
        ))}
      </div>
    </>
  );
};
export { MobileAboutMe };
