import cnnChat from './../../../assets/images/chiikawaNewsNetwork/chat.webp';
import cnnHome from './../../../assets/images/chiikawaNewsNetwork/home.webp';
import cnnMobile from './../../../assets/images/chiikawaNewsNetwork/mobile.webp';
import cnnProfile from './../../../assets/images/chiikawaNewsNetwork/profile.webp';

import { TAB_ID } from '../data/tabIds.js';
import { createTab, TAB_STYLE } from '../data/createTab.js';
import { ImageCarousel } from '../../../common/components/ImageCarousel.jsx';

const CNN_IMAGES = [cnnHome, cnnMobile, cnnProfile, cnnChat];

const CnnImageTabContent = () => {
  return <ImageCarousel className={''}  imageArray={CNN_IMAGES} />;
};

const CnnImagesTab = createTab({
  id: TAB_ID.CNN_IMAGES,
  title: 'Chiikawa News Network - Images',
  tabStyle: TAB_STYLE.BORDERED,
  defaultPosition: { x: 50, y: 200 },
  Content: CnnImageTabContent,
});

export { CnnImagesTab };
