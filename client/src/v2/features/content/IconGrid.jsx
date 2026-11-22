// eslint-disable-next-line no-unused-vars
import { motion, stagger } from 'motion/react';
import { IconContext } from 'react-icons/lib';

const IconGrid = ({ className = '', gridCols = 3, jsxIconArray }) => {
  return (
    <motion.ul
      className={[
        'grid min-h-0 w-full min-w-0 gap-3',
        `grid-cols-${gridCols}`,
        className,
      ].join(' ')}
      variants={{
        hidden: {},
        fadeIn: {
          transition: {
            delayChildren: stagger(0.1),
          },
        },
      }}
      initial="hidden"
      whileInView="fadeIn"
      viewport={{
        once: true,
        amount: 0.5,
      }}
    >
      {jsxIconArray.map(({ icon: Icon, label }) => (
        <motion.li
          key={label}
          className="icon-grid-icons flex flex-col items-center gap-2 rounded-lg border px-2 py-3"
          whileHover={{ y: -2 }}
          variants={{
            hidden: { opacity: 0, x: -20 },
            fadeIn: { opacity: 1, x: 0 },
          }}
        >
          <IconContext.Provider value={{ size: '24px' }}>
            <Icon />
          </IconContext.Provider>
          <div className="text-center text-xs break-keep">{label}</div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export { IconGrid };
