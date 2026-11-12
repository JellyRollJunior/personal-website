import { ExternalLink } from '../../common/components/ExternalLink.jsx';

const ProjectContent = ({ title, body, repoLink, demoLink }) => {
  return (
    <div className="terminal terminal-static-line v2-text-secondary font-kaisei-opti tab-content flex max-h-80 w-full max-w-xs flex-col overflow-auto px-5 py-3">
      <h2 className="terminal-text-orange text-lg">{title}</h2>
      {/* icon stack */}
      <p className="mt-2">{body}</p>
      <div className="mt-2 flex gap-5">
        {demoLink && (
          <ExternalLink className={'terminal-text-green'} href={demoLink}>
            Live Demo
          </ExternalLink>
        )}
        {repoLink && <ExternalLink href={repoLink}>Repository</ExternalLink>}
      </div>
    </div>
  );
};

export { ProjectContent };
