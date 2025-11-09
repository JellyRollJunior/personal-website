import { HeaderBackground } from './HeaderHudBackground.jsx';

const Header = () => {
  return (
    <header className="h-screen p-5">
      <div className="border-yellow relative grid h-full grid-cols-3 grid-rows-3 flex-col overflow-clip rounded-md border-2">
        <h1 className="text-blue col-span-3 mt-13 flex justify-center text-center text-3xl lg:text-6xl/17">
          B R A N D O N <br /> L I N
        </h1>
        <div className="col-span-3"></div>
        <h2 className="text-blue col-span-3 mb-10 flex items-end justify-center text-center text-3xl lg:mb-13 lg:text-6xl/17">
          FULL STACK DEVELOPER
        </h2>
        {/* Background Decoration */}
        <HeaderBackground />
      </div>
    </header>
  );
};

export { Header };
