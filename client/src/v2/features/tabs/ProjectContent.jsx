import { ExternalLink } from '../../common/components/ExternalLink.jsx';

const ProjectContent = ({ title, body, repoLink, demoLink }) => {
  return (
    <div className="terminal px-5 py-3 terminal-static-line v2-text-secondary font-kaisei-opti flex max-h-80 w-full max-w-xs flex-col overflow-auto">
      <h2 className="text-lg terminal-text-orange">{title}</h2>
      {/* icon stack */}
      <p className="mt-2 ">{body}</p>
      <div className="mt-2 flex gap-5">
        {demoLink && <ExternalLink className={'terminal-text-green'} href={demoLink}>Live Demo</ExternalLink>}
        {repoLink && <ExternalLink  href={repoLink}>Repository</ExternalLink>}
      </div>
    </div>
  );
};

export { ProjectContent };
