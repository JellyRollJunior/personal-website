import { GROUP_ID, GROUPS } from '../tabs/TabGroups.js';

const ACTION = Object.freeze({
    FOCUS: 'focus',
    HIDE: 'hide',
    SHOW: 'show',
    TOGGLE: 'toggle',
    SET_GROUP: 'setGroup',
});

const init = (tabs) => ({
    hidden: [],
    stack: tabs.map((t) => t.id),
    activeGroupId: GROUP_ID.HOME,
});

const tabManagerReducer = (state, action) => {
    const { id } = action;

    switch (action.type) {
        case 'focus': {
            if (state.stack.at(-1) === id) return state;
            // move tab to end
            return {
                ...state,
                stack: [...state.stack.filter((i) => i !== id), id],
            };
        }
        case 'hide': {
            if (state.hidden.includes(id)) return state;
            return {
                ...state,
                hidden: [...state.hidden, id],
            };
        }
        case 'show': {
            // remove from hidden & focus tab
            return {
                ...state,
                hidden: state.hidden.filter((i) => i !== id),
                stack: [...state.stack.filter((i) => i !== id), id],
            };
        }
        case 'toggle': {
            return tabManagerReducer(state, {
                type: state.hidden.includes(id) ? 'show' : 'hide',
                id,
            });
        }
        case 'setGroup': {
            return {
                ...state,
                activeGroupId: id,
            };
        }
        default:
            return state;
    }
};

const isInActiveGroup = (state, id) => {
    return GROUPS.find((g) => g.id === state.activeGroupId).tabIds.includes(id);
};

const isShown = (state, id) => {
    return isInActiveGroup(state, id) && !state.hidden.includes(id);
};

export { tabManagerReducer, init, ACTION, isInActiveGroup, isShown };
