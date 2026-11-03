import { TAB_ID } from './Tabs.js';

const GROUP_ID = Object.freeze({ HOME: 'home', GALLERY: 'gallery' });

const GROUPS = [
    {
        id: GROUP_ID.HOME,
        name: 'Home',
        tabIds: [TAB_ID.FILE_MANAGER, TAB_ID.ERPIN],
    },
    { id: GROUP_ID.GALLERY, name: 'Gallery', tabIds: [TAB_ID.FILE_MANAGER] },
];

export { GROUP_ID, GROUPS };
