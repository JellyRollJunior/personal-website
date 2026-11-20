import windowIcon from './../../assets/icons/window.svg';

import { TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { ImageCarousel } from '../../common/components/ImageCarousel.jsx';
import {
  CHIIKAWA_NEWS_NETWORK,
  TRICKCAL_BUG_TRACKER,
} from '../../data/projects.js';
import { ProjectContent } from '../tabs/ProjectContent.jsx';
import { Fragment } from 'react';
import { MobileTab } from '../tabs/Tab/MobileTab.jsx';

const MobileWorks = () => {
  const projects = [CHIIKAWA_NEWS_NETWORK, TRICKCAL_BUG_TRACKER];

  return (
    <>
      {projects.map((p) => (
        <Fragment key={p.id}>
          <MobileTab
            icon={p.favicon}
            title={p.title + ' - Images'}
            tabStyle={TAB_STYLE.BORDERED}
          >
            <ImageCarousel imageArray={p.images} />
          </MobileTab>
          <MobileTab
            id={p.id + '-details'}
            icon={p.favicon}
            title={p.title + ' - Details'}
            tabStyle={TAB_STYLE.BORDERLESS}
          >
            <ProjectContent
              title={p.title}
              body={p.description}
              stackIcons={p.stackIcons}
              repoLink={p.repoLink}
              demoLink={p.demoLink}
            />
          </MobileTab>
        </Fragment>
      ))}

      {/* See More */}
      <MobileTab id={'works:see-more'} icon={windowIcon} title={'See More'}>
        <div className="terminal-text-content tab-content max-h-80 max-w-md px-5 py-3">
          <h2 className="terminal-text-orange text-xl">
            I've built a lot more!
          </h2>
          <p className="mt-3 text-sm">
            Trickcal Bug Tracker and Chiikawa News Network are just the
            headliners. I've also made a
            <span className="terminal-text-green">
              {' '}
              Sailor Moon memory game
            </span>{' '}
            powered by Giphy, a
            <span className="terminal-text-green"> Chiikawa I Spy</span> game,
            and plenty of other web apps along the way. To see them all, check
            out my{' '}
            <a
              className="terminal-text-green underline"
              href="https://github.com/JellyRollJunior"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p className="terminal-text-green mt-2 ml-auto w-fit">(✧ω✧)</p>
        </div>
      </MobileTab>
    </>
  );
};
export { MobileWorks };
