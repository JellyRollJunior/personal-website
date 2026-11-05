import cnnChat from '../../../../v1/assets/projects/chiikawaNewsNetwork/chat.webp';
import cnnHome from '../../../../v1/assets/projects/chiikawaNewsNetwork/home.webp';
import cnnMobile from '../../../../v1/assets/projects/chiikawaNewsNetwork/mobile.webp';
import cnnProfile from '../../../../v1/assets/projects/chiikawaNewsNetwork/profile.webp';

import { TAB_ID } from '../tabIds.js';
import { createTab, TAB_STYLE } from '../createTab.js';
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
