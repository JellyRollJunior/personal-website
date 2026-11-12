import me from './../../../assets/images/me.JPG';

import { introGroupData } from '../data/groups.js';
import { TRICKCAL_BUG_TRACKER } from '../../../data/projects.js';
import { Tab, TAB_STYLE } from '../../tabs/Tab/Tab.jsx';
import { TabManagerProvider } from '../TabManager/TabManagerContext.jsx';
import { useTabManager } from '../TabManager/useTabManager.js';
import { useDesktopContext } from '../../shell/Desktop/useDesktopContext.js';
import { ImageCarousel } from '../../../common/components/ImageCarousel.jsx';
import { ProjectContent } from '../../tabs/ProjectContent.jsx';
import { LANGUAGES } from '../../../data/languages.js';

const IntroGroup = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <IntroGroupContent dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const IntroGroupContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const { activeGroupId } = useDesktopContext();

  const isActiveGroup = activeGroupId === introGroupData.id;

  return (
    <>
      {/* Image */}
      <Tab
        id={'home:me'}
        title={'me.jpg'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <img className="pointer-events-none max-w-100 rounded-b-md" src={me} />
      </Tab>

      {/* Intro Schpiel */}
      <Tab
        id={'home:schpiel'}
        title={'schpiel'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <div className="terminal-text-content px-5 py-3">
          <h2 className="terminal-text-orange text-2xl">Hi, I'm Brandon</h2>
          <p className="mt-2">
            Deeply invested in the life-long learning mentality, I'm a
            full-stack developer who loves to experiment in design. I create
            responsive layouts using React, NodeJS, and inspiration from the
            world around me.
          </p>
        </div>
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

      {/* Latest work */}
      <Tab
        id={TRICKCAL_BUG_TRACKER.id + '-images'}
        title={'Latest Work - Images'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <ImageCarousel imageArray={TRICKCAL_BUG_TRACKER.images} />
      </Tab>
      <Tab
        id={TRICKCAL_BUG_TRACKER.id + '-details'}
        title={'Latest Work - Details'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <ProjectContent
          title={TRICKCAL_BUG_TRACKER.title}
          body={TRICKCAL_BUG_TRACKER.description}
          repoLink={TRICKCAL_BUG_TRACKER.repoLink}
          demoLink={TRICKCAL_BUG_TRACKER.demoLink}
        />
      </Tab>
    </>
  );
};

export { IntroGroup };
