import { DesktopShell } from './../features/tabManager/DesktopShell.jsx';

const Index = () => {
  return (
    <div className="v2-base flex h-dvh w-dvw flex-col overflow-clip bg-black px-8 pt-8">
      {/* Content */}
      <main className="min-h-0 flex-1">
        <DesktopShell />
      </main>
    </div>
  );
};

export { Index };
