import { useMediaQuery } from '../common/hooks/useMediaQuery.js';
import { Shell } from '../features/shell/Shell.jsx';
import { MobileShell } from '../features/shell/MobileShell.jsx';
import { FixedBackground } from '../common/components/FixedBackground.jsx';
import { LoadingMask } from '../common/components/LoadingMask.jsx';

const DESKTOP_QUERY = '(min-width: 768px)';

const Index = () => {
  const isDesktop = useMediaQuery(DESKTOP_QUERY);

  return (
    <>
      <LoadingMask />
      {isDesktop ? (
        <div className="v2-base flex h-dvh w-dvw flex-col overflow-y-hidden bg-black px-4 pt-4 xl:px-7 xl:pt-7">
          <div className="min-h-0 flex-1">
            <Shell />
          </div>
        </div>
      ) : (
        <div className="v2-base relative min-h-dvh w-dvw overflow-y-auto">
          <MobileShell />
          <FixedBackground />
        </div>
      )}
    </>
  );
};

export { Index };
