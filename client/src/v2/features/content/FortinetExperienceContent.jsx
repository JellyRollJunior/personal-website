const FortinetExperienceContent = () => {
  return (
    <div className="terminal-text-content tab-content px-5 py-3 md:max-w-md">
      <h2 className="terminal-text-orange text-xl">Fortinet - 2022 to 2025</h2>
      <p className="mt-3 text-sm">
        I had the pleasure of working at
        <span className="terminal-text-green text-sm"> Fortinet </span> as a
        Junior (and soon after Intermediate) QA Specialist. There, I built a
        <span className="terminal-text-green text-sm">
          {' '}
          Selenium/Java/TestNG automation framework{' '}
        </span>
        from scratch, running nightly through a Jenkins CI/CD pipeline . Leading
        QA for FortiGate Cloud Premium meant
        <span className="terminal-text-green text-sm">
          {' '}
          resolving 400+ issues{' '}
        </span>
        and working closely with engineers and product teams to ship robust,
        timely, and bug-free (to our knowledge) features.
        <br />
        <br />
        That work taught me to think like a developer and like the person trying
        to break the code. The result is an emphasis on writing
        <span className="terminal-text-green text-sm"> maintainable code </span>
        , anticipating edge cases, and prioritizing reliability. Now I’m
        bringing that mindset to building
        <span className="terminal-text-green text-sm">
          {' '}
          full-stack products{' '}
        </span>
        .
      </p>
    </div>
  );
};

export { FortinetExperienceContent };
