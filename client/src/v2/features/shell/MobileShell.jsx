import { MOBILE_SECTIONS } from './data/MobileSections.js';
import { MobileNav } from './MobileNav.jsx';
import { MobileSection } from './MobileSection.jsx';

const MobileShell = () => {
  return (
    <div className="relative flex h-full w-full flex-col">
      {/* Background picker */}
      {/* Content */}
      <main className="py-20">
        {MOBILE_SECTIONS.map(({ id, Component }) => (
          <MobileSection id={id} key={id}>
            <Component />
          </MobileSection>
        ))}
      </main>

      {/* Nav */}
      <MobileNav />
    </div>
  );
};

export { MobileShell };
