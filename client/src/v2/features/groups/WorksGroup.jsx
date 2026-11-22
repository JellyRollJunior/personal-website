import windowIcon from './../../assets/icons/window.svg';

import { useTabManager } from './TabManager/useTabManager.js';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';
import { useDesktopContext } from '../shell/Desktop/useDesktopContext.js';
import { Tab, TAB_STYLE } from '../tabs/Tab/Tab.jsx';
import { ImageCarousel } from '../../common/components/ImageCarousel.jsx';
import {
  CHIIKAWA_NEWS_NETWORK,
  TRICKCAL_BUG_TRACKER,
} from '../../data/projects.js';
import { worksGroupData } from './data/groups.js';
import { ProjectContent } from './../content/ProjectContent.jsx';
import { Fragment } from 'react';
import { SeeMoreWorksContent } from '../content/SeeMoreWorksContent.jsx';

const WorksGroup = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <WorksGroupContent dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const WorksGroupContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const { activeGroupId } = useDesktopContext();

  const projects = [CHIIKAWA_NEWS_NETWORK, TRICKCAL_BUG_TRACKER];

  const isActiveGroup = activeGroupId === worksGroupData.id;

  const DEFAULT_POSITIONS = [
    {
      x: '40%',
      y: '5%',
    },
    {
      x: '60%',
      y: '1%',
    },
    {
      x: '15%',
      y: '40%',
    },
    {
      x: '2%',
      y: '50%',
    },
  ];

  return (
    <>
      {projects.map((p, index) => (
        <Fragment key={p.id}>
          <Tab
            id={p.id + '-images'}
            icon={p.favicon}
            title={p.title + ' - Images'}
            tabStyle={TAB_STYLE.BORDERED}
            defaultPosition={DEFAULT_POSITIONS[index * 2] ?? { x: 0, y: 0 }}
            isInActiveGroup={isActiveGroup}
            state={state}
            dispatch={dispatch}
            dragConstraintsRef={dragConstraintsRef}
          >
            <ImageCarousel imageArray={p.images} />
          </Tab>
          <Tab
            id={p.id + '-details'}
            icon={p.favicon}
            title={p.title + ' - Details'}
            tabStyle={TAB_STYLE.BORDERLESS}
            defaultPosition={DEFAULT_POSITIONS[index * 2 + 1] ?? { x: 0, y: 0 }}
            isInActiveGroup={isActiveGroup}
            state={state}
            dispatch={dispatch}
            dragConstraintsRef={dragConstraintsRef}
          >
            <ProjectContent
              title={p.title}
              body={p.description}
              stackIcons={p.stackIcons}
              repoLink={p.repoLink}
              demoLink={p.demoLink}
            />
          </Tab>
        </Fragment>
      ))}

      {/* See More */}
      <Tab
        id={'works:see-more'}
        icon={windowIcon}
        title={'See More'}
        tabStyle={TAB_STYLE.BORDERLESS}
        defaultPosition={{ x: '70%', y: '60%' }}
        isInActiveGroup={isActiveGroup}
        state={state}
        dispatch={dispatch}
        dragConstraintsRef={dragConstraintsRef}
      >
        <SeeMoreWorksContent />
      </Tab>
    </>
  );
};

export { WorksGroup };
