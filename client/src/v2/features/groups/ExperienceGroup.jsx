import erpin from './../../assets/images/erpin-rocks.jpeg';
import imageIcon from './../../assets/icons/image.svg';
import windowIcon from './../../assets/icons/window.svg';

import { experienceGroupData } from './data/groups.js';
import { Tab, TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { useTabManager } from './TabManager/useTabManager.js';
import { useDesktopContext } from '../shell/Desktop/useDesktopContext.js';

const ExperienceGroup = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <ExperienceGroupContent dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const ExperienceGroupContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const { activeGroupId } = useDesktopContext();

  const isActiveGroup = activeGroupId === experienceGroupData.id;

  return (
    <>
      {/* Fortinet */}
      <Tab
        id={'experience:fortinet'}
        icon={windowIcon}
        title={'Work History - Fortinet'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <div className="terminal-text-content tab-content max-w-md px-5 py-3">
          <h2 className="terminal-text-orange text-xl">
            Fortinet - 2022 to 2025
          </h2>
          <p className="mt-3 text-sm">
            I had the pleasure of working at
            <span className="terminal-text-green text-sm"> Fortinet </span> as a
            Junior (and soon after Intermediate) QA Specialist. There, I built a
            <span className="terminal-text-green text-sm">
              {' '}
              Selenium/Java/TestNG automation framework{' '}
            </span>
            from scratch, running nightly through a Jenkins CI/CD pipeline .
            Leading QA for FortiGate Cloud Premium meant
            <span className="terminal-text-green text-sm">
              {' '}
              resolving 400+ issues{' '}
            </span>
            and working closely with engineers and product teams to ship robust,
            timely, and bug-free (to our knowledge) features.
            <br />
            <br />
            That work taught me to think like a developer and like the person
            trying to break the code. The result is an emphasis on writing
            <span className="terminal-text-green text-sm">
              {' '}
              maintainable code{' '}
            </span>
            , anticipating edge cases, and prioritizing reliability. Now I’m
            bringing that mindset to building
            <span className="terminal-text-green text-sm">
              {' '}
              full-stack products{' '}
            </span>
            .
          </p>
        </div>
      </Tab>

      {/* Resume */}
      <Tab
        id={'experience:resume'}
        icon={imageIcon}
        title={'Resume'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <img className="image-content" src={erpin} />
      </Tab>

      {/* See my other works! */}
      <Tab
        id={'experience:see-more'}
        icon={imageIcon}
        title={'"Extra Curriculars"'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: 0, y: 0 }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <img className="image-content" src={erpin} />
      </Tab>
    </>
  );
};

export { ExperienceGroup };
