import { useMediaQuery } from '../common/hooks/useMediaQuery.js';
import { Shell } from '../features/shell/Shell.jsx';
import { MobileShell } from '../features/shell/MobileShell.jsx';

const DESKTOP_QUERY = '(min-width: 768px)';

const Index = () => {
  const isDesktop = useMediaQuery(DESKTOP_QUERY);

  return isDesktop ? (
    <div className="v2-base flex h-dvh w-dvw flex-col bg-black px-4 pt-4 xl:px-8 xl:pt-8">
      <main className="min-h-0 flex-1">
        <Shell />
      </main>
    </div>
  ) : (
    <div className="v2-base flex min-h-dvh w-dvw flex-col bg-black px-2 pt-2">
      <main className="min-h-0 flex-1">
        <MobileShell />
      </main>
    </div>
  );
};

export { Index };
