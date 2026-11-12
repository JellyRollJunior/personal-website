import { Shell } from '../features/shell/Shell.jsx';

const Index = () => {
  return (
    <div className="v2-base flex h-dvh w-dvw flex-col bg-black px-8 pt-8">
      {/* Content */}
      <main className="min-h-0 flex-1">
        <Shell />
      </main>
    </div>
  );
};

export { Index };
