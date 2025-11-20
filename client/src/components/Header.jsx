import { HeaderBackground } from './HeaderBackground.jsx';
import { ArrowDownLink } from './ArrowDownLink.jsx';

const Header = () => {
  return (
    <header className="isolate z-1 mx-5 h-screen py-5">
      <div className="border-yellow relative grid h-full grid-cols-3 grid-rows-3 flex-col overflow-clip rounded-md border-2 backdrop-blur-[1px]">
        <div className="col-span-3"></div>
        <div className="text-blue col-span-3 flex items-center justify-center">
          <h1 className="border-yellow font-orbitron rounded-lg border px-3 pt-2.5 pb-1.5 text-center text-3xl font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] backdrop-blur-xs md:mt-2 md:px-5 md:pt-3.5 md:pb-2.5 md:text-4xl lg:text-6xl">
            B R A N D O N <br className="md:hidden" />{' '}
            <span className="hidden md:inline-block">‣</span> L I N
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
