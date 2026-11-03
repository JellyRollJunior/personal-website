const TabButton = ({
  isFocused = false,
  isHidden = false,
  isPressed = false,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={[
        'min-w-30 border-2 pt-0.5 pl-0.5 text-left select-none',
        isHidden
          ? 'hidden'
          : isPressed
            ? 'tab-button-pressed border-slate-400 border-t-gray-600 border-l-gray-600'
            : 'border-gray-600 border-t-slate-300 border-l-slate-300',
      ].join(' ')}
    >
      <div
        className={[
          'relative border-2 pl-2',
          isPressed
            ? 'border-gray-500 border-t-gray-800 border-l-gray-800 pr-5.5 pb-0.5'
            : 'border-r-4 border-b-4 border-gray-800 border-t-gray-500 border-l-gray-500 pr-5',
        ].join(' ')}
      >
        <span>{children}</span>
        <div
          className={[
            'h-px w-full bg-blue-400 bottom-0 left-0',
            isFocused ? 'absolute' : 'hidden',
          ].join(' ')}
        />
      </div>
    </button>
  );
};

export { TabButton };
