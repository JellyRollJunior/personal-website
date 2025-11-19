const SkillsCard = ({className, title, }) => {
  return (
    <li className={`${className}`}>
      <h3>{title}</h3>
    </li>
  )
}

const Skills = () => {
  return (
    <section className="mt-5">
      <h2 className="text-blue text-center text-3xl font-extrabold">
        S K I L L S
      </h2>
      <ul className="grid grid-cols-3">
        <li>
          <h3>Front-End</h3>
        </li>
        <li>
          <h3>Back-End</h3>
        </li>
        <li>
          <h3>Miscellaneous</h3>
        </li>
      </ul>
    </section>
  );
};

export { Skills };
