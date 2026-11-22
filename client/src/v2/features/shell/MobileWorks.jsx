import windowIcon from './../../assets/icons/window.svg';

import { TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { ImageCarousel } from '../../common/components/ImageCarousel.jsx';
import {
  CHIIKAWA_NEWS_NETWORK,
  TRICKCAL_BUG_TRACKER,
} from '../../data/projects.js';
import { ProjectContent } from './../content/ProjectContent.jsx';
import { Fragment } from 'react';
import { MobileTab } from '../tabs/Tab/MobileTab.jsx';
import { SeeMoreWorksContent } from '../content/SeeMoreWorksContent.jsx';

const MobileWorks = () => {
  const projects = [TRICKCAL_BUG_TRACKER, CHIIKAWA_NEWS_NETWORK];

  return (
    <>
      {projects.map((p, index) => (
        <Fragment key={p.id}>
          <MobileTab
            className={[
              'z-10 mx-1 -mt-1 max-w-md',
              index % 2 ? 'mr-7' : 'ml-7',
            ].join(' ')}
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
          <MobileTab
            className={'mx-1 -mt-2 self-stretch'}
            icon={p.favicon}
            title={p.title + ' - Images'}
            tabStyle={TAB_STYLE.BORDERED}
          >
            <ImageCarousel imageArray={p.images} />
          </MobileTab>
        </Fragment>
      ))}

      {/* See More */}
      <MobileTab
        className={'z-20 mx-5 -mt-2'}
        icon={windowIcon}
        title={'See More'}
      >
        <SeeMoreWorksContent />
      </MobileTab>
    </>
  );
};
export { MobileWorks };
