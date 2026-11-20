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
import { SeeMoreWorksContent } from '../content/SeeMoreWorksContent.jsx';

const MobileWorks = () => {
  const projects = [TRICKCAL_BUG_TRACKER, CHIIKAWA_NEWS_NETWORK];

  return (
    <>
      {projects.map((p, index) => (
        <Fragment key={p.id}>
          <MobileTab
            className={'mx-1 self-stretch mt-2'}
            icon={p.favicon}
            title={p.title + ' - Images'}
            tabStyle={TAB_STYLE.BORDERED}
          >
            <ImageCarousel imageArray={p.images} />
          </MobileTab>
          <MobileTab
            className={index % 2 ? '-mt-2 mr-7' : '-mt-2 ml-7'}
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
      <MobileTab className={'mt-2 mx-5'} icon={windowIcon} title={'See More'}>
        <SeeMoreWorksContent />
      </MobileTab>
    </>
  );
};
export { MobileWorks };
