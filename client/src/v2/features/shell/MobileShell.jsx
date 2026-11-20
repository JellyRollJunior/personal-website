import { MOBILE_SECTIONS } from './data/MobileSections.js';
import { MobileNav } from './MobileNav.jsx';
import { MobileSection } from './MobileSection.jsx';

const MobileShell = () => {
  return (
    <div className="relative flex h-full w-full flex-col bg-transparent">
      {/* Background picker */}
      {/* Content */}
      {MOBILE_SECTIONS.map(({ id, Component }) => (
        <MobileSection id={id} key={id}>
          <Component />
        </MobileSection>
      ))}

      {/* Nav */}
      <MobileNav />
    </div>
  );
};

export { MobileShell };
