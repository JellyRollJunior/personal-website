import languageIcon from './../../assets/icons/language.svg';

import { LANGUAGES } from '../../data/languages.js';
import { ABOUT_ME_IMAGES } from '../../data/aboutMeImages.js';
import { aboutMeGroupData } from './data/groups.js';
import { Tab, TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { useTabManager } from './TabManager/useTabManager.js';
import { useDesktopContext } from '../shell/Desktop/useDesktopContext.js';

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
      {ABOUT_ME_IMAGES.map(({ id, icon, title, src }) => (
        <Tab
          key={id}
          id={id}
          icon={icon}
          title={title}
          tabStyle={TAB_STYLE.BORDERED}
          defaultPosition={{ x: 0, y: 0 }}
          isInActiveGroup={isActiveGroup}
          state={state}
          dispatch={dispatch}
          dragConstraintsRef={dragConstraintsRef}
        >
          <img className="image-content" src={src} />
        </Tab>
      ))}

      {/* Languages */}
      <Tab
        id={'home:languages'}
        icon={languageIcon}
        title={'Spoken Languages'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <div className="tab-content px-5 py-5">
          <ul className="terminal-text-content grid max-w-2xs grid-cols-3 gap-x-3">
            {LANGUAGES.map(({ icon, label }) => (
              <li className="icon-grid-icons flex flex-col items-center gap-2 rounded-lg border px-2 py-3">
                <img className="size-[32px]" src={icon} aria-hidden={true} />
                <div className="text-center text-xs break-keep">{label}</div>
              </li>
            ))}
          </ul>
          <h2 className="terminal-text-green mt-3 text-center text-2xl">
            Languages
          </h2>
        </div>
      </Tab>
    </>
  );
};

export { AboutMeGroup };
