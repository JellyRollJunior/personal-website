import { ACTION, isFocused, isInActiveGroup } from './tabManagerReducer.js';
import { TabButton } from './TabButton.jsx';
import { useTabManagerContext } from './context/useTabManager.js';

const TabStrip = ({ tabData }) => {
  const { state, dispatch } = useTabManagerContext();

  const handleClick = (state, id) => {
    if (isFocused(state, id)) {
      dispatch({ type: ACTION.TOGGLE, id });
    } else {
      dispatch({ type: ACTION.SHOW, id });
    }
  };

  return (
    <div className="flex gap-1 border border-black p-1">
      {tabData &&
        tabData.map(({ id, title }) => (
          <TabButton
            key={id}
            data-tab-button={id}
            children={title}
            isFocused={isFocused(state, id)}
            isHidden={!isInActiveGroup(state, id)}
            isPressed={state.hidden.includes(id)}
            onClick={() => handleClick(state, id)}
          />
        ))}
    </div>
  );
};

export { TabStrip };
