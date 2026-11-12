import { BACKGROUNDS } from '../../../data/backgrounds.js';
import { useDesktopContext } from '../Desktop/useDesktopContext.js';

const SetBackgroundButton = () => {
  const { changeBackground } = useDesktopContext();

  return (
    <div className="mr-3 flex min-w-0 shrink-0 items-stretch gap-1.5">
      {BACKGROUNDS.map((bg) => (
        <button
          key={bg.id}
          className="background-button aspect-[4/3] h-full shrink-0"
          onClick={() => changeBackground(bg.id)}
        >
          <img
            className="h-0 min-h-full w-full object-cover"
            src={bg.src}
            alt=""
          />
        </button>
      ))}
    </div>
  );
};

export { SetBackgroundButton };
