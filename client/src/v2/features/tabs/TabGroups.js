import { TAB_ID, GROUP_ID } from './tabIds.js';

const GROUPS = [
    {
        id: GROUP_ID.HOME,
        name: 'Home',
        tabIds: [TAB_ID.FILE_MANAGER, TAB_ID.ERPIN],
        size: '67mb',
        type: 'folder',
        dateModified: '2026-11-04',
    },
    {
        id: GROUP_ID.PROJECTS,
        name: 'Projects',
        tabIds: [TAB_ID.FILE_MANAGER, TAB_ID.CNN_IMAGES],
        size: '500mb',
        type: 'folder',
        dateModified: '2026-11-04',
    },
    {
        id: GROUP_ID.GALLERY,
        name: 'Gallery',
        tabIds: [TAB_ID.FILE_MANAGER],
        size: '100mb',
        type: 'folder',
        dateModified: '2026-11-04',
    },
];

export { GROUP_ID, GROUPS };
