import { ACTION } from './desktopShell/tabManagerReducer.js';
import { TabButton } from './TabButton.jsx';

const TabStrip = ({ tabData, state, dispatch }) => {
  return (
    <div className="flex gap-1 border border-black p-1">
      {tabData &&
        tabData.map(({ id, title }) => (
          <TabButton
            key={id}
            children={title}
            isPressed={state.hidden.includes(id)}
            onClick={() => dispatch({ type: ACTION.TOGGLE, id })}
          />
        ))}
    </div>
  );
};

export { TabStrip };
