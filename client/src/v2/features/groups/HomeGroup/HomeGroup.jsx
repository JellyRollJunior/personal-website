import erpin from './../../../assets/images/background.jpeg';

import { Tab } from './../../tabs/Tab.jsx';
import { TAB_STYLE } from '../../tabs/data/createTab.js';

const HomeGroup = ({ isActive, dragConstraintsRef }) => {
  return (
    <>
      <Tab
        id={'home:erpin'}
        title={'test'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={true}
        isHidden={false}
        zIndex={50}
        handleFocus={() => {}}
        handleHide={() => {}}
        dragConstraintsRef={dragConstraintsRef}
      >
        <img className="pointer-events-none" src={erpin} />;
      </Tab>
    </>
  );
};

export { HomeGroup };
