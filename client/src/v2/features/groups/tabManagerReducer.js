const ACTION = Object.freeze({
    FOCUS: 'focus',
    HIDE: 'hide',
    SHOW: 'show',
    TOGGLE: 'toggle',
});

const init = (tabIdArray) => ({
    hidden: [],
    stack: tabIdArray,
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
        default:
            return state;
    }
};

const isShown = (state, id) => {
    return !state.hidden.includes(id);
};

const isFocused = (state, id) => {
    return isShown(state, id) && state.stack.at(-1) === id;
};

export { tabManagerReducer, init, ACTION, isShown, isFocused };
