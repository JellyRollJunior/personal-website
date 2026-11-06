import tbtMove from './../../../assets/images/trickcalBugTracker/move-ticket.gif';
import tbtBoard from './../../../assets/images/trickcalBugTracker/boards-dark.png';
import tbtTicket from './../../../assets/images/trickcalBugTracker/boards-ticket.png';

import { TAB_ID } from '../data/tabIds.js';
import { createTab, TAB_STYLE } from '../data/createTab.js';
import { ImageCarousel } from '../../../common/components/ImageCarousel.jsx';

const TBT_IMAGEs = [tbtMove, tbtBoard, tbtTicket];

const TbbImageTabContent = () => {
  return <ImageCarousel className={''} imageArray={TBT_IMAGEs} />;
};

const TbtImagesTab = createTab({
  id: TAB_ID.TBT_IMAGES,
  title: 'Trickcal Bug Tracker - Images',
  tabStyle: TAB_STYLE.BORDERED,
  defaultPosition: { x: 50, y: 200 },
  Content: TbbImageTabContent,
});

export { TbtImagesTab };
