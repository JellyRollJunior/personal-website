const ACTION = Object.freeze({
    FOCUS: 'focus',
    HIDE: 'hide',
    SHOW: 'show',
    TOGGLE: 'toggle',
});

const init = {
    hidden: [],
    z: {},
};

const tabManagerReducer = (state, action) => {
    const { id } = action;

    switch (action.type) {
        case ACTION.FOCUS: {
            return { ...state, z: { ...state.z, [id]: action.z } };
        }
        case ACTION.HIDE: {
            if (state.hidden.includes(id)) return state;
            return { ...state, hidden: [...state.hidden, id] };
        }
        case ACTION.SHOW: {
            // remove from hidden & bring to front
            return {
                ...state,
                hidden: state.hidden.filter((i) => i !== id),
                z: { ...state.z, [id]: action.z },
            };
        }
        case ACTION.TOGGLE: {
            // forwards the whole action so `z` reaches SHOW
            return tabManagerReducer(state, {
                ...action,
                type: state.hidden.includes(id) ? ACTION.SHOW : ACTION.HIDE,
            });
        }
        default:
            return state;
    }
};

const isShown = (state, id) => !state.hidden.includes(id);

const zIndexOf = (state, id) => state.z[id] ?? 0;

// Focused *within this manager*: shown, and highest z among its shown tabs
const isFocused = (state, id) => {
    if (!isShown(state, id)) return false;
    const z = zIndexOf(state, id);
    if (z === 0) return false;
    return Object.entries(state.z).every(
        ([otherId, otherZ]) =>
            otherId === id || !isShown(state, otherId) || otherZ <= z
    );
};

export { tabManagerReducer, init, ACTION, isShown, isFocused, zIndexOf };
