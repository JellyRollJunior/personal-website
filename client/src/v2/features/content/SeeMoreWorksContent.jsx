const SeeMoreWorksContent = () => {
  return (
    <div className="terminal-text-content tab-content max-h-80 px-5 py-3 md:max-w-md">
      <h2 className="terminal-text-orange text-xl">I've built a lot more!</h2>
      <p className="mt-3 text-sm">
        Trickcal Bug Tracker and Chiikawa News Network are just the headliners.
        I've made
        <span className="terminal-text-green"> this website</span> (obviously),
        a<span className="terminal-text-green"> Sailor Moon memory game</span>{' '}
        powered by Giphy, a
        <span className="terminal-text-green"> Chiikawa I Spy</span> game, and
        plenty of other web apps along the way.
        <br />
        <br />
        To see them all, check out my{' '}
        <a
          className="terminal-text-green underline"
          href="https://github.com/JellyRollJunior"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>
      <p className="terminal-text-green mt-2 ml-auto w-fit">(✧ω✧)</p>
    </div>
  );
};

export { SeeMoreWorksContent };
