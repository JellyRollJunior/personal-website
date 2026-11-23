import { MOBILE_SECTIONS } from './data/MobileSections.js';

const MobileNav = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-around bg-black pt-1 pb-[env(safe-area-inset-bottom)]">
      {MOBILE_SECTIONS.map(({ id, label, icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className="flex min-h-11 flex-col items-center justify-center px-2"
        >
          <img className="size-5" src={icon} aria-hidden="true" />
          <span className="text-xs">{label}</span>
        </a>
      ))}
    </nav>
  );
};

export { MobileNav };
