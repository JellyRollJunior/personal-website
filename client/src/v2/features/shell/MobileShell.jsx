import { MOBILE_SECTIONS } from './data/MobileSections.js';
import { MobileNav } from './MobileNav.jsx';
import { MobileSection } from './MobileSection.jsx';

const MobileShell = () => {
  return (
    <div className="relative flex h-full w-full flex-col">
      {/* Background picker */}
      {/* Content */}
      <main className="mt-2 flex flex-col gap-12">
        {MOBILE_SECTIONS.map(({ id, labelFull, icon, Component }) => (
          <MobileSection key={id} id={id} title={labelFull} icon={icon}>
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
