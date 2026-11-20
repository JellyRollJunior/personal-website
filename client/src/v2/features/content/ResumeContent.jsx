const ResumeContent = () => {
  return (
    <div className="tab-content terminal-text-content flex flex-col gap-2 px-5 py-3">
      <h2 className="terminal-text-orange text-xl">Resume</h2>
      <div className="flex flex-col sm:flex-row gap-3 text-sm">
        <a
          className="terminal-text-green underline whitespace-pre"
          href="/brandon-lin-resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          open in new tab
        </a>
        <a
          className="terminal-text-green underline"
          href="/brandon-lin-resume.pdf"
          download="brandon-lin-resume.pdf"
        >
          download
        </a>
      </div>
    </div>
  );
};

export { ResumeContent };
