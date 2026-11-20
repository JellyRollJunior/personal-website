import { MobileTab } from '../tabs/Tab/MobileTab.jsx';

const MobileSection = ({ id, icon, title, children }) => {
  return (
    <section id={id} className="flex scroll-mt-4 flex-col items-center">
      <MobileTab
        className={'mx-1 mb-2 self-stretch w-auto text-center sm:mx-5'}
        icon={icon}
        title={title}
      >
        <div className="terminal-text-content tab-content px-5 py-3">
          <h2 className="terminal-text-orange text-xl">{title}</h2>
        </div>
      </MobileTab>
      {children}
    </section>
  );
};

export { MobileSection };
