import { useState } from 'react';

const TabButton = ({ children, ...props }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      {...props}
      onClick={() => setIsPressed((prev) => !prev)}
      className={[
        'min-w-30 border-2 pt-0.5 pl-0.5 text-left select-none',
        isPressed
          ? 'tab-button-pressed border-slate-400 border-t-gray-600 border-l-gray-600'
          : 'border-gray-600 border-t-slate-300 border-l-slate-300',
      ].join(' ')}
    >
      <div
        className={[
          'border-2 pl-2',
          isPressed
            ? 'border-gray-500 border-t-gray-800 border-l-gray-800 pr-5.5 pb-0.5'
            : 'border-r-4 border-b-4 border-gray-800 border-t-gray-500 border-l-gray-500 pr-5',
        ].join(' ')}
      >
        <span>{children}</span>
      </div>
    </button>
  );
};

const Index = () => {
  return (
    <div className="v2 base flex h-dvh w-dvw flex-col bg-black px-8 pt-8">
      {/* Content */}
      <div className="site-bg flex-1 border border-black"></div>

      {/* Tab container */}
      <div className="flex gap-1 border border-black p-1 text-[#fcfcfc]">
        <TabButton pressed={true} children={'Pressed'} />
        <TabButton pressed={false} children={'Not Pressed'} />
      </div>
    </div>
  );
};

export { Index };
