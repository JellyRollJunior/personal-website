import { MOBILE_SECTIONS } from './data/MobileSections.js';

const MobileNav = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 bg-black pt-1 flex z-50 justify-around pb-[env(safe-area-inset-bottom)]">
      {MOBILE_SECTIONS.map(({ id, label, icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className="flex min-h-11 flex-col items-center justify-center gap-0.5 px-2"
        >
          <img className="size-5" src={icon} aria-hidden="true" />
          <span className="text-xs">{label}</span>
        </a>
      ))}
    </nav>
  );
};

export { MobileNav };
