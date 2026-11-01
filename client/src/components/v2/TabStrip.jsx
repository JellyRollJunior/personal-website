import { TabButton } from './TabButton.jsx';

const TabStrip = ({ tabData, hiddenTabs, toggleTab }) => {
  return (
    <div className="flex gap-1 border border-black p-1">
      {tabData &&
        tabData.map(({ id, title }) => (
          <TabButton
            children={title}
            isPressed={hiddenTabs.includes(id)}
            onClick={() => toggleTab(id)}
          />
        ))}
    </div>
  );
};

export { TabStrip };
