import { TabButton } from './TabButton.jsx';

const TabStrip = ({ tabData, state, dispatch }) => {
  return (
    <div className="flex gap-1 border border-black p-1">
      {tabData &&
        tabData.map(({ id, title }) => (
          <TabButton
            children={title}
            isPressed={state.hidden.includes(id)}
            onClick={() => dispatch({ type: 'toggle', id })}
          />
        ))}
    </div>
  );
};

export { TabStrip };
