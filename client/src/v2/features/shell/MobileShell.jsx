import { MobileTab } from '../tabs/Tab/MobileTab.jsx';
import { MobileNav } from './MobileNav.jsx';

const MobileShell = () => {
  return (
    <div className="relative flex h-full w-full flex-col bg-transparent">
      {/* Background picker */}
      {/* Content */}
      <MobileTab>
        <div className="terminal-text-content tab-content max-h-80 max-w-md px-5 py-3">
          <h2 className="terminal-text-orange text-xl">Hi, I'm Brandon</h2>
          <p className="mt-3 text-sm">
            I'm a{' '}
            <span className="terminal-text-green text-sm">
              {' '}
              Full-Stack Developer
            </span>{' '}
            whos deeply invested in the life-long learning mentality and loves
            to experiment in design. I create responsive layouts using{' '}
            <span className="terminal-text-green">
              React, NodeJS, Typescript,
            </span>{' '}
            and inspiration from the world around me.
          </p>
          <p className="terminal-text-green mt-2 ml-auto w-fit">
            ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
          </p>
        </div>
      </MobileTab>

      {/* Nav */}
      <MobileNav />
    </div>
  );
};

export { MobileShell };
