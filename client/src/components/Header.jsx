import { ArrowDownLink } from './ArrowDownLink.jsx';

const Header = () => {
  return (
    <header className="flex h-screen flex-col items-center justify-center">
      <div className="mt-auto flex w-fit flex-col">
        <h2 className="w-fit text-3xl">HELLO I'M</h2>
        <h1 className="text-8xl font-medium">Brandon Lin</h1>
        <h3 className="mt-2 text-end text-2xl">FULL STACK DEVELOPER</h3>
      </div>
      <ArrowDownLink className="mt-auto mb-3 justify-self-end" />
    </header>
  );
};

export { Header };
