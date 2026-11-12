import sick from './../../assets/images/sick-fit.jpeg';
import onyx from './../../assets/images/onny-pie.jpeg';
import prefire from './../../assets/images/pottery-prefire.jpeg';

import { aboutMeGroupData } from './data/groups.js';
import { Tab, TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { useTabManager } from './TabManager/useTabManager.js';
import { useDesktopContext } from '../shell/Desktop/useDesktopContext.js';
import { LANGUAGES } from '../../data/languages.js';

const AboutMeGroup = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <AboutMeContent dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const AboutMeContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const { activeGroupId } = useDesktopContext();

  const isActiveGroup = activeGroupId === aboutMeGroupData.id;

  return (
    <>
      {/* Fashion */}
      <Tab
        id={'about:sick-fit'}
        title={'sick-fit.jpg'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <img className="image-content" src={sick} />
      </Tab>

      {/* Onyx */}
      <Tab
        id={'about:onyx'}
        title={'onyx.jpg'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <img className="image-content" src={onyx} />
      </Tab>

      {/* Pottery */}
      <Tab
        id={'about:prefire'}
        title={'pottery-prefire.jpg'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <img className="image-content max-w-80" src={prefire} />
      </Tab>

      {/* Languages */}
      <Tab
        id={'home:languages'}
        title={'Spoken Languages'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <div className="px-5 py-3">
          <h2 className="terminal-text-green text-center text-2xl">
            Languages
          </h2>
          <ul className="terminal-text-content mt-5 grid max-w-2xs grid-cols-3 gap-x-3">
            {LANGUAGES.map(({ icon, label }) => (
              <li className="flex flex-col items-center gap-1">
                <img className="size-[32px]" src={icon} aria-hidden={true} />
                <div className="text-center text-sm break-keep">{label}</div>
              </li>
            ))}
          </ul>
        </div>
      </Tab>
    </>
  );
};

export { AboutMeGroup };
