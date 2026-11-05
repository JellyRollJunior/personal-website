import tbtMove from './../../../assets/images/trickcal-bug-tracker/move-ticket.gif';
import tbtBoard from './../../../assets/images/trickcal-bug-tracker/boards-dark.png';
import tbtTicket from './../../../assets/images/trickcal-bug-tracker/boards-ticket.png';

import { TAB_ID } from '../tabIds.js';
import { createTab, TAB_STYLE } from '../createTab.js';
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
