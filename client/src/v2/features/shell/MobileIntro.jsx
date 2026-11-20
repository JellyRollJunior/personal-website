import imageIcon from './../../assets/icons/image.svg';
import windowIcon from './../../assets/icons/window.svg';

import { IntroDescription } from '../content/IntroDescription.jsx';
import { IntroMainImage } from '../content/IntroMainImage.jsx';
import { MobileTab } from '../tabs/Tab/MobileTab.jsx';
import { TAB_STYLE } from '../tabs/Tab/Tab.jsx';

const MobileIntro = () => {
  return (
    <>
      <MobileTab
        className={'mx-5 -mb-25 ml-25'}
        id={'home:intro'}
        icon={windowIcon}
        title={'Hi everyone'}
      >
        <IntroDescription />
      </MobileTab>
      <MobileTab
        className={'mx-2'}
        icon={imageIcon}
        title={'me.jpg'}
        tabStyle={TAB_STYLE.BORDERED}
      >
        <IntroMainImage className={'w-full'} />
      </MobileTab>
    </>
  );
};

export { MobileIntro };
