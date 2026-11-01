import erpin from '../../assets/v2/images/background.jpeg';

import { Desktop } from './Desktop.jsx';
import { TAB_STYLE } from './Tab.jsx';
import { TabStrip } from './TabStrip.jsx';

const Index = () => {
  return (
    <div className="v2-base flex h-dvh w-dvw flex-col overflow-clip bg-black px-8 pt-8">
      {/* Content */}
      <main className="min-h-0 flex-1">
        <Desktop tabData={data} />
      </main>

      <TabStrip tabData={data} />
    </div>
  );
};

const data = [
  {
    title: 'Erpin Rocks',
    tabStyle: TAB_STYLE.BORDERED,
    defaultPosition: { x: 5, y: 5 },
    Content: () => <img src={erpin} />,
  },
  {
    title: 'Erpin Rocks 2',
    tabStyle: TAB_STYLE.BORDERLESS,
    defaultPosition: { x: 50, y: 50 },
    Content: () => <img src={erpin} />,
  },
];

export { Index };
