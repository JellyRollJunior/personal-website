import { ACTION, isInActiveGroup } from './tabManagerReducer.js';
import { TabButton } from './TabButton.jsx';
import { useTabManagerContext } from './context/useTabManager.js';

const TabStrip = ({ tabData }) => {
  const { state, dispatch } = useTabManagerContext();

  return (
    <div className="flex gap-1 border border-black p-1">
      {tabData &&
        tabData.map(({ id, title }) => (
          <TabButton
            key={id}
            data-tab-button={id}
            children={title}
            isHidden={!isInActiveGroup(state, id)}
            isPressed={state.hidden.includes(id)}
            onClick={() => dispatch({ type: ACTION.TOGGLE, id })}
          />
        ))}
    </div>
  );
};

export { TabStrip };
