import { HeaderBackground } from './HeaderHudBackground.jsx';

const Header = () => {
  return (
    <header className="h-screen p-5">
      <div className="border-yellow relative grid h-full grid-cols-3 grid-rows-3 flex-col overflow-clip rounded-md border-2">
        <HeaderBackground />
      </div>
    </header>
  );
};

export { Header };
