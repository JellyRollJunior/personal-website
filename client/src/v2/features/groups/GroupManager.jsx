import compassIcon from './../../assets/icons/compass.svg';

import { groups } from './data/groups.js';
import { useTabManager } from './TabManager/useTabManager.js';
import { useDesktopContext } from '../shell/Desktop/useDesktopContext.js';
import { TAB_STYLE, Tab } from '../tabs/Tab/Tab.jsx';
import { TabManagerProvider } from './TabManager/TabManagerContext.jsx';

const GROUP_MANAGER_ID = 'group-manager';

const GroupManagerContainer = ({ dragConstraintsRef }) => {
  return (
    <TabManagerProvider>
      <GroupManager dragConstraintsRef={dragConstraintsRef} />
    </TabManagerProvider>
  );
};

const GroupManager = ({ dragConstraintsRef }) => {
  const { state, dispatch } = useTabManager();

  return (
    <Tab
      id={GROUP_MANAGER_ID}
      icon={compassIcon}
      title={'Navigator'}
      tabStyle={TAB_STYLE.BORDERLESS}
      defaultPosition={{ x: 0, y: 0 }}
      isInActiveGroup={true}
      state={state}
      dispatch={dispatch}
      dragConstraintsRef={dragConstraintsRef}
    >
      <Navigator groups={groups} />
    </Tab>
  );
};

const Navigator = ({ groups = [] }) => {
  const MENU_ITEMS = ['File', 'Edit', 'View', 'Go', 'Help'];
  const { activeGroupId, setActiveGroupId } = useDesktopContext();

  return (
    <div className="flex flex-col">
      {/* Menu Decoration */}
      <ul
        className="file-manager-menu flex gap-2 py-0.5 pl-2 text-sm font-semibold"
        aria-hidden={true}
      >
        {MENU_ITEMS.map((i) => (
          <li key={i}>
            <span className="underline">{i.substring(0, 1)}</span>
            {i.substring(1)}
          </li>
        ))}
      </ul>

      {/* Nav */}
      <nav className="file-manager-nav flex flex-col items-start bg-black px-1 py-2">
        <table className="w-full table-auto border-separate border-spacing-0.5 border-none text-left text-sm font-semibold">
          <thead className="">
            <tr>
              <th scope="col" className="file-manager-header-cell">
                Name
              </th>
              <th
                scope="col"
                className="file-manager-header-cell file-manager-decoration-cell"
              >
                Size
              </th>
              <th
                scope="col"
                className="file-manager-header-cell file-manager-decoration-cell"
              >
                Type
              </th>
              <th
                scope="col"
                className="file-manager-header-cell file-manager-decoration-cell"
              >
                Date modified
              </th>
            </tr>
          </thead>
          <tbody>
            {groups.map((g, index) => (
              <tr key={g.id}>
                <td className="h-px min-w-62.5 p-0">
                  <button
                    key={g.id}
                    className={[
                      'block h-full w-full px-1 text-left text-white hover:brightness-75',
                      index % 2 === 0
                        ? 'file-manager-row-header-cell-a'
                        : 'file-manager-row-header-cell-b',
                      activeGroupId === g.id ? 'underline' : '',
                    ].join(' ')}
                    onClick={() => setActiveGroupId(g.id)}
                  >
                    {g.name}
                  </button>
                </td>
                <td className="file-manager-cell file-manager-decoration-cell">
                  {g.size}
                </td>
                <td className="file-manager-cell file-manager-decoration-cell">
                  {g.type}
                </td>
                <td className="file-manager-cell file-manager-decoration-cell">
                  {g.dateModified}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </nav>
    </div>
  );
};

export { GroupManagerContainer as GroupManager };
