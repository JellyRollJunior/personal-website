import { useTabManager } from '../TabManager/useTabManager.js';
import { TabManagerProvider } from '../TabManager/TabManagerContext.jsx';
import { useDesktopContext } from '../../shell/Desktop/useDesktopContext.js';
import { Tab, TAB_STYLE } from '../../tabs/Tab/Tab.jsx';
import { ImageCarousel } from '../../../common/components/ImageCarousel.jsx';
import {
  CHIIKAWA_NEWS_NETWORK,
  TRICKCAL_BUG_TRACKER,
} from '../../../data/projects.js';

const ProjectGroup = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <ProjectGroupContent dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const ProjectGroupContent = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();
  const { activeGroupId } = useDesktopContext();

  const projects = [TRICKCAL_BUG_TRACKER, CHIIKAWA_NEWS_NETWORK];

  const isActiveGroup = activeGroupId === ProjectGroupData.id;

  return (
    <>
      {projects.map((p) => (
        <Tab
          id={p.id + '-images'}
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
      ))}
    </>
  );
};

const ProjectGroupData = {
  id: 'projects',
  name: 'Projects',
  size: '250mb',
  type: 'folder',
  dateModified: '09-11-2026',
};

export { ProjectGroup, ProjectGroupData };
