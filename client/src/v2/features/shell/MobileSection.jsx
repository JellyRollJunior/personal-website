import { MobileTab } from '../tabs/Tab/MobileTab.jsx';

const MobileSection = ({ id, icon, title, children }) => {
  return (
    <section id={id} className="flex scroll-mt-4 flex-col items-center">
      <MobileTab
        className={'ml-5 mr-1 z-50 -mb-3 w-fit self-start text-start sm:mx-5'}
        icon={icon}
        title={title}
      >
        <div className="terminal-text-content tab-content px-10 py-3">
          <h2 className="terminal-text-green text-3xl">{title}</h2>
        </div>
      </MobileTab>
      {children}
    </section>
  );
};

export { MobileSection };
