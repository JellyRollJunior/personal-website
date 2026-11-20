import windowIcon from './../../assets/icons/window.svg';
import codeIcon from './../../assets/icons/code.svg';

import { experienceGroupData } from './data/groups.js';
import { Tab, TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { useTabManager } from './TabManager/useTabManager.js';
import { useDesktopContext } from '../shell/Desktop/useDesktopContext.js';
import { ResumeContent } from '../content/ResumeContent.jsx';

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
        defaultPosition={{ x: '2%', y: '40%' }}
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
        icon={windowIcon}
        title={'Resume'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: '45%', y: '3%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <ResumeContent />
      </Tab>

      {/* See my other works! */}
      <Tab
        id={'experience:see-more'}
        icon={codeIcon}
        title={'"Extra Curriculars"'}
        tabStyle={TAB_STYLE.BORDERED}
        defaultPosition={{ x: '60%', y: '30%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <div className="terminal-text-content tab-content max-h-80 max-w-md px-5 py-3">
          <h2 className="terminal-text-orange text-xl">
            I Do More Than Just Work
          </h2>
          <p className="mt-3 text-sm">
            Want to see what I build outside of and after work?
            <br />
            See some of my projects in the "Works" section.
          </p>
          <p className="terminal-text-green mt-2 ml-auto w-fit">
            ⸜(⸝⸝⸝´꒳`⸝⸝⸝)⸝
          </p>
        </div>
      </Tab>
    </>
  );
};

export { ExperienceGroup };
