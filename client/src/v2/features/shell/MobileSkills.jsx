import codeIcon from './../../assets/icons/code.svg';

import { TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { MobileTab } from '../tabs/Tab/MobileTab.jsx';
import { IconGrid } from '../content/IconGrid.jsx';
import { MOBILE_SKILLS } from '../../data/skills.jsx';

const MobileSkills = () => {
  return (
    <>
      <div className="mx-1 mt-2 flex w-fit flex-col items-center gap-1 sm:grid sm:grid-cols-2">
        {MOBILE_SKILLS.map((s, index) => (
          <MobileTab
            className={[
              'w-full sm:h-full',
              index % 2 ? 'sm:translate-y-[-10%] z-10 sm:z-0 sm:mx-0' : 'self-start sm:mx-0',
            ].join(' ')}
            icon={codeIcon}
            title={s.title}
            tabStyle={TAB_STYLE.BORDERLESS}
          >
            <div className="terminal terminal-static-line font-kaisei-opti tab-content px-5 py-5 sm:h-full">
              <IconGrid gridCols={3} jsxIconArray={s.icons} />
              <h2 className="terminal-text-green mt-3 text-center text-base">
                {s.title}
              </h2>
            </div>
          </MobileTab>
        ))}
      </div>
    </>
  );
};

export { MobileSkills };
