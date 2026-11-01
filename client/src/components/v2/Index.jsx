import erpin from '../../assets/v2/images/background.jpeg';

import { useRef } from 'react';
import { Tab } from './Tab.jsx';
import { TabButton } from './TabButton.jsx';

const Index = () => {
  const contentsRef = useRef(null);

  return (
    <div className="v2 base flex h-dvh w-dvw flex-col overflow-clip bg-black px-8 pt-8">
      {/* Content */}
      <main
        className="site-bg flex-1 border border-black pt-10 pl-10"
        ref={contentsRef}
      >
        <Tab title="Erpin Rocks" dragConstraintsRef={contentsRef}>
          <img src={erpin} />
        </Tab>
      </main>

      {/* Tab container */}
      <div className="flex gap-1 border border-black p-1 text-[#fcfcfc]">
        <TabButton pressed={true} children={'Pressed'} />
        <TabButton pressed={false} children={'Not Pressed'} />
      </div>
    </div>
  );
};

export { Index };
