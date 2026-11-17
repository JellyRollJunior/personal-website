import terminalIcon from './../../assets/icons/terminal.svg';

import { ABOUT_ME_IMAGES, INTERESTS } from '../../data/aboutMe.js';
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

const DEFAULT_IMAGE_POSITIONS = [
  {
    x: '53%',
    y: '15%',
  },
  {
    x: '30%',
    y: '5%',
  },
  {
    x: '55%',
    y: '0%',
  },
];

const AboutMeContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const { activeGroupId } = useDesktopContext();

  const isActiveGroup = activeGroupId === aboutMeGroupData.id;

  return (
    <>
      {ABOUT_ME_IMAGES.map(({ id, icon, title, src }, index) => (
        <Tab
          key={id}
          id={id}
          icon={icon}
          title={title}
          tabStyle={TAB_STYLE.BORDERED}
          defaultPosition={DEFAULT_IMAGE_POSITIONS[index] ?? { x: 0, y: 0 }}
          isInActiveGroup={isActiveGroup}
          state={state}
          dispatch={dispatch}
          dragConstraintsRef={dragConstraintsRef}
        >
          <img className="image-content" src={src} />
        </Tab>
      ))}

      {/* Interests */}
      <Tab
        id={'about:interests'}
        icon={terminalIcon}
        title={'Interests'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: '1%', y: '40%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <div className="terminal terminal-static-line terminal-text-green tab-content px-5 py-3 text-xs">
          brandon-lin@about ~ % cd interests/ && ls
          <div className="terminal-text-orange flex gap-x-5 whitespace-pre">
            {INTERESTS.map((i) => (
              <span key={i}>{i}/</span>
            ))}
          </div>
          brandon-lin@about interests % cat onyx/intro.txt
          <div className="terminal-text-orange whitespace-pre">
            My cat is named Onyx aka Onny aka Onny Pie aka Kitty{'\n'}
            aka Mr.Kitty aka Stinky Kitty aka Meow Meow Girl
          </div>
          brandon-lin@about interests % cat music/favorite-albums.txt
          <div className="terminal-text-orange whitespace-pre">
            Clube da Esquina - Milton Nascimento & Lo Borges{'\n'}
            THRU TRAFFIC - Tohoku Shinkansen{'\n'}
            baduizm - Erykah Badu{'\n'}
            LOVE LIGHT - Yutaka{'\n'}
            VANILLA VILLA - Sunset Rollercoaster
          </div>
          brandon-lin@about interests % cat gaming/favorite-games.txt
          <div className="terminal-text-orange whitespace-pre">
            Fallout New Vegas{'\n'}
            Resident Evil 4{'\n'}
            Trickcal Chibi Go{'\n'}
            Maplestory{'\n'}
            Kirby & the Amazing Mirror
          </div>
          brandon-lin@about interests %
        </div>
      </Tab>
    </>
  );
};

export { AboutMeGroup };
