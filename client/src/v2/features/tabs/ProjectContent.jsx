import { ExternalLink } from '../../common/components/ExternalLink.jsx';

const ProjectContent = ({ title, body, repoLink, demoLink }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg">{title}</h2>
      {/* icon stack */}
      <p className="v2-text-secondary">{body}</p>
      <div className="flex gap-5">
        {repoLink && <ExternalLink href={repoLink}>Repository</ExternalLink>}
        {demoLink && <ExternalLink href={demoLink}>Live Demo</ExternalLink>}
      </div>
    </div>
  );
};

export { ProjectContent };
