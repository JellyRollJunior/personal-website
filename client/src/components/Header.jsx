import { HeaderBackground } from './HeaderHudBackground.jsx';
import { ArrowDownLink } from './ArrowDownLink.jsx';

const Header = () => {
  return (
    <header className="h-screen p-5">
      <div className="border-yellow relative grid h-full grid-cols-3 grid-rows-3 flex-col overflow-clip rounded-md border-2">
        <div className="col-span-3"></div>
        <div className="text-blue col-span-3 flex items-center justify-center">
          <h1 className="border-yellow font-orbitron mt-4 rounded-lg border bg-black/40 px-3 py-1.5 text-center text-3xl font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] lg:mt-2 lg:px-5 lg:py-2.5 lg:text-6xl">
            B R A N D O N <br className="lg:hidden" />{' '}
            <span className="hidden lg:inline-block">‣</span> L I N
          </h1>
        </div>
        <div />
        <div className="flex items-end justify-center">
          <ArrowDownLink size={50} />
        </div>
        {/* Background Decoration */}
        <HeaderBackground />
      </div>
    </header>
  );
};

export { Header };
