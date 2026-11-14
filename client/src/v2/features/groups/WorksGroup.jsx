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
import { ProjectContent } from '../tabs/ProjectContent.jsx';
import { Fragment } from 'react';

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

  const projects = [TRICKCAL_BUG_TRACKER, CHIIKAWA_NEWS_NETWORK];

  const isActiveGroup = activeGroupId === worksGroupData.id;

  return (
    <>
      {projects.map((p) => (
        <Fragment key={p.id}>
          <Tab
            id={p.id + '-images'}
            icon={p.favicon}
            title={p.title + ' - Images'}
            tabStyle={TAB_STYLE.BORDERED}
            defaultPosition={{ x: 0, y: 0 }}
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
            defaultPosition={{ x: 0, y: 0 }}
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
    </>
  );
};

export { WorksGroup };
