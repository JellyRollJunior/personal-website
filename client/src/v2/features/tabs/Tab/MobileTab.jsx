import hide from '../../../assets/icons/minimize.svg';

import { TAB_STYLE } from './Tab.jsx';

const MobileTab = ({
  icon = null,
  title,
  tabStyle = TAB_STYLE.BORDERLESS,
  children,
}) => {
  return (
    <article className={['tab h-fit w-fit'].join(' ')}>
      {/* Title bar */}
      <header className="tab-header-gradient tab-header flex min-w-2xs items-center gap-1.5 px-3 pt-2 pb-1.5">
        {icon && <img className="size-5" src={icon} aria-hidden={true} />}
        <span className="flex flex-1 items-center">{title}</span>
        <button
          className="ml-5 rounded-full hover:bg-gray-600"
          aria-label="minimize tab button"
          aria-hidden={true}
        >
          <img className="size-4.5" src={hide} aria-hidden={true} />
        </button>
      </header>

      {/* Content */}
      <div
        className={[
          '',
          tabStyle === TAB_STYLE.BORDERED && 'tab-bordered-content',
        ].join(' ')}
      >
        {children}
      </div>
    </article>
  );
};

export { MobileTab };
