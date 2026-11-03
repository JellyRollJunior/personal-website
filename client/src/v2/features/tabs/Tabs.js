import {
    FILE_MANAGER_TAB_ID,
    FileManagerTab,
} from './../tabManager/FileManager.jsx';
import { ERPIN_TAB_ID, ErpinTab } from './ErpinTab.jsx';

const TAB_ID = Object.freeze({
    FILE_MANAGER: FILE_MANAGER_TAB_ID,
    ERPIN: ERPIN_TAB_ID,
});

const TABS = [FileManagerTab, ErpinTab];

export { TAB_ID, TABS };
