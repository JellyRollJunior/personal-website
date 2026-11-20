import { MobileTab } from '../tabs/Tab/MobileTab.jsx';

const MobileSection = ({ id, icon, title, children }) => {
  return (
    <section id={id} className="flex scroll-mt-4 flex-col items-center">
      <MobileTab
        className={'mx-1 mb-2 w-full text-center'}
        icon={icon}
        title={title}
      >
        <div className="terminal-text-content tab-content max-h-80 max-w-md px-5 py-3">
          <h2 className="terminal-text-orange text-xl">{title}</h2>
        </div>
      </MobileTab>
      {children}
    </section>
  );
};

export { MobileSection };
