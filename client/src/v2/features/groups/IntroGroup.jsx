import languageIcon from './../../assets/icons/language.svg';
import imageIcon from './../../assets/icons/image.svg';
import windowIcon from './../../assets/icons/window.svg';

import { introGroupData } from './data/groups.js';
import { LANGUAGES } from '../../data/languages.js';
import { TRICKCAL_BUG_TRACKER } from '../../data/projects.js';
import { Tab, TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { useTabManager } from './TabManager/useTabManager.js';
import { useDesktopContext } from '../shell/Desktop/useDesktopContext.js';
import { ImageCarousel } from '../../common/components/ImageCarousel.jsx';
import { ProjectContent } from './../content/ProjectContent.jsx';
import { IntroDescription } from '../content/IntroDescription.jsx';
import { IntroMainImage } from '../content/IntroMainImage.jsx';
import { ResumeContent } from '../content/ResumeContent.jsx';

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
      {/* Languages */}
      <Tab
        id={'about:languages'}
        icon={languageIcon}
        title={'Spoken Languages'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: '70%', y: '58%' }}
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

      {/* Latest work */}
      <Tab
        id={TRICKCAL_BUG_TRACKER.id + '-images'}
        icon={TRICKCAL_BUG_TRACKER.favicon}
        title={'Latest Work - Images'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: '1%', y: '55%' }}
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
        defaultPosition={{ x: '38%', y: '58%' }}
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

      {/* Selfie */}
      <Tab
        id={'home:me'}
        icon={imageIcon}
        title={'me.jpg'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: '30%', y: '6%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <IntroMainImage />
      </Tab>

      {/* Intro */}
      <Tab
        id={'home:intro'}
        icon={windowIcon}
        title={'Hi everyone'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: '55%', y: '0%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <IntroDescription />
      </Tab>

      {/* Resume */}
      <Tab
        id={'home:resume'}
        icon={windowIcon}
        title={'Resume'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: '58%', y: '34%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <ResumeContent />
      </Tab>
    </>
  );
};

export { IntroGroup };
