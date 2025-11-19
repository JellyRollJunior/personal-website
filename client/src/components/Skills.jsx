import { FRONTEND, BACKEND, MISCELLANEOUS } from '../data/skills.js';

const SkillsCard = ({ className, title, techStackArray }) => {
  if (!techStackArray || !Array.isArray(techStackArray) || !title) return null;
  return (
    <div className={`w-full ${className}`}>
      <h3 className="text-red text-center text-xl">{title}</h3>
      <ul className="mt-5 grid grid-cols-3 gap-x-3 gap-y-7">
        {techStackArray.map((pair) => (
          <li
            key={pair.name}
            className="flex flex-col items-center gap-1"
            variants={{
              hidden: { opacity: 0, x: 15 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img className="size-[32px]" src={pair.icon} />
            <div className="text-center text-sm break-keep">{pair.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="mx-5 mt-5 lg:mx-8">
      <h2 className="text-blue text-center text-3xl font-extrabold">
        S K I L L S
      </h2>
      <div className="mx-auto mt-5 grid max-w-[900px] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
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
    </section>
  );
};

export { Skills };
