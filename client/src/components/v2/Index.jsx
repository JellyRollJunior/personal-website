import { TabButton } from './TabButton.jsx';
import { Desktop } from './Desktop.jsx';

const Index = () => {
  return (
    <div className="v2 base flex h-dvh w-dvw flex-col overflow-clip bg-black px-8 pt-8">
      {/* Content */}
      <main className="min-h-0 flex-1">
        <Desktop />
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
