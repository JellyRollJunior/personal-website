import { TabButton } from './TabButton.jsx';

const TabStrip = ({ tabData }) => {
  return (
    <div className="flex gap-1 border border-black p-1">
      {tabData && tabData.map(({ title }) => <TabButton children={title} />)}
    </div>
  );
};

export { TabStrip };
