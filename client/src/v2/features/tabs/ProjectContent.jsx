import { ExternalLink } from '../../common/components/ExternalLink.jsx';

const ProjectContent = ({ title, body, stackIcons, repoLink, demoLink }) => {
  return (
    <div className="terminal terminal-static-line v2-text-secondary font-kaisei-opti tab-content flex max-h-80 w-full overflow-y-auto px-5 py-3">
      <div className="flex max-w-90 min-w-50 flex-3 flex-col self-center">
        <h2 className="terminal-text-orange text-lg">{title}</h2>
        <p className="mt-2">{body}</p>

        {/* Stack Icons */}
        {stackIcons && (
          <ul className="mt-5 flex flex-wrap justify-start gap-4 gap-y-1">
            {stackIcons.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="grid grid-cols-[20px_1fr] items-center"
              >
                <Icon />
                <div className="">{label}</div>
              </li>
            ))}
          </ul>
        )}

        {/* Links */}
        <div className="mt-1 flex justify-end gap-5">
          {repoLink && <ExternalLink href={repoLink}>Repository</ExternalLink>}
          {demoLink && (
            <ExternalLink className={'terminal-text-green'} href={demoLink}>
              Live Demo
            </ExternalLink>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProjectContent };
