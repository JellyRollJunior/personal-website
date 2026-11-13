import me from './../../assets/images/me.JPG';
import imageIcon from './../../assets/icons/image.svg';
import windowIcon from './../../assets/icons/window.svg';

import { introGroupData } from './data/groups.js';
import { TRICKCAL_BUG_TRACKER } from '../../data/projects.js';
import { Tab, TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { useTabManager } from './TabManager/useTabManager.js';
import { useDesktopContext } from '../shell/Desktop/useDesktopContext.js';
import { ImageCarousel } from '../../common/components/ImageCarousel.jsx';
import { ProjectContent } from '../tabs/ProjectContent.jsx';

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
        icon={imageIcon}
        title={'me.jpg'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <img className="image-content" src={me} />
      </Tab>

      {/* Intro Schpiel */}
      <Tab
        id={'home:schpiel'}
        icon={windowIcon}
        title={'schpiel'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <div className="terminal-text-content tab-content max-h-80 max-w-md px-5 py-3">
          <h2 className="terminal-text-orange text-xl">Hi, I'm Brandon</h2>
          <p className="mt-3 text-sm">
            I'm a{' '}
            <span className="terminal-text-green text-sm">
              {' '}
              Full-Stack Developer
            </span>{' '}
            whos deeply invested in the life-long learning mentality and loves
            to experiment in design. I create responsive layouts using{' '}
            <span className="terminal-text-green">
              React, NodeJS, Typescript,
            </span>{' '}
            and inspiration from the world around me.
          </p>
          <p className="terminal-text-green mt-2 ml-auto w-fit">
            ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
          </p>
        </div>
      </Tab>

      {/* Latest work */}
      <Tab
        id={TRICKCAL_BUG_TRACKER.id + '-images'}
        icon={TRICKCAL_BUG_TRACKER.favicon}
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
        icon={TRICKCAL_BUG_TRACKER.favicon}
        title={'Latest Work - Details'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <ProjectContent
          title={TRICKCAL_BUG_TRACKER.title}
          body={TRICKCAL_BUG_TRACKER.description}
          stackIcons={TRICKCAL_BUG_TRACKER.stackIcons}
          repoLink={TRICKCAL_BUG_TRACKER.repoLink}
          demoLink={TRICKCAL_BUG_TRACKER.demoLink}
        />
      </Tab>
    </>
  );
};

export { IntroGroup };
