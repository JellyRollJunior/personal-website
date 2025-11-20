import { FRONTEND, BACKEND, MISCELLANEOUS } from '../data/skills.js';
import mandarin from '../assets/icons/mandarin.png'
import english from '../assets/icons/english.png'
import japanese from '../assets/icons/japanese.png'
// eslint-disable-next-line no-unused-vars
import { motion, stagger } from 'motion/react';

const SkillsCard = ({ className, title, techStackArray }) => {
  if (!techStackArray || !Array.isArray(techStackArray) || !title) return null;
  return (
    <div className={`w-full ${className}`}>
      <h3 className="text-red text-center text-xl">{title}</h3>
      <motion.ul
        className="mt-5 grid grid-cols-3 gap-x-3 gap-y-7"
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
        {techStackArray.map((pair) => (
          <motion.li
            key={pair.name}
            className="flex flex-col items-center gap-1"
            variants={{
              hidden: { opacity: 0, x: -20 },
              fadeIn: { opacity: 1, x: 0 },
            }}
          >
            <img className="size-[32px]" src={pair.icon} />
            <div className="text-center text-sm break-keep">{pair.name}</div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="mx-5 mt-5 lg:mx-8">
      <h2 className="text-blue text-center text-3xl font-extrabold">
        S K I L L S
      </h2>
      <div className="mx-auto mt-5 grid max-w-[1100px] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <SkillsCard
          className="mx-auto max-w-[380px]"
          title={'Frontend'}
          techStackArray={FRONTEND}
        />
        <SkillsCard
          className="mx-auto max-w-[380px]"
          title={'Backend'}
          techStackArray={BACKEND}
        />
        <SkillsCard
          className="mx-auto max-w-[380px] sm:col-span-2 md:col-span-1"
          title={'Miscellaneous'}
          techStackArray={MISCELLANEOUS}
        />
      </div>
      <SkillsCard
        className="border-yellow mx-auto mt-8 lg:mt-3 max-w-[360px] pl-5 pr-2 rounded-md border-2 pt-2 pb-3"
        title={'Languages'}
        techStackArray={[
          { icon: mandarin, name: 'Conversational Mandarin' },
          { icon: english, name: 'Fluent English' },
          { icon: japanese, name: 'Basic Japanese' },
        ]}
      />
    </section>
  );
};

export { Skills };
