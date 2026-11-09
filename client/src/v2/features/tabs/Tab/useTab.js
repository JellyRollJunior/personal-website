import {
    ACTION,
    isFocused,
    isShown,
    zIndexOf,
} from '../../groups/TabManager/tabManagerReducer.js';
import { useDesktopContext } from '../../shell/Desktop/useDesktopContext.js';

const useTab = ({ id, state, dispatch }) => {
    const { getNextZ } = useDesktopContext();

    const isTabHidden = !isShown(state, id);
    const isTabFocused = !isFocused(state, id);
    const zIndex = zIndexOf(state, id);

    const handleTabFocus = () => {
        dispatch({ type: ACTION.FOCUS, id, z: getNextZ() });
    };

    const handleTabHide = () => {
        dispatch({ type: ACTION.HIDE, id });
    };

    const handleTaskbarButtonClick = () => {
        if (isFocused(state, id)) {
            dispatch({ type: ACTION.TOGGLE, id, z: getNextZ() });
        } else {
            dispatch({ type: ACTION.SHOW, id, z: getNextZ() });
        }
    };

    return {
        isTabHidden,
        isTabFocused,
        zIndex,
        handleTabFocus,
        handleTabHide,
        handleTaskbarButtonClick,
    };
};

export { useTab };
