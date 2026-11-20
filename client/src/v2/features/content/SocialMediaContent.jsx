import instagram from './../../assets/icons/instagram.svg';
import github from './../../assets/icons/github.svg';
import linkedin from './../../assets/icons/linkedin.svg';

const SocialMediaContent = () => {
  return (
    <div className="terminal terminal-static-line terminal-text-orange tab-content px-5 pt-3 pb-4">
      <h4 className="text-center">Reach me through social media:</h4>
      <div className="mt-3 flex w-full items-center justify-center gap-8">
        <a
          className="inline-block w-[38px] shrink-0"
          href="https://github.com/jellyrolljunior"
          target="”_blank”"
          rel="noopener"
        >
          <img className="w-full" src={github} aria-hidden={true} />
        </a>
        <a
          className="inline-block w-[38px] shrink-0"
          href="https://www.instagram.com/river.flows__"
          target="”_blank”"
          rel="noopener"
        >
          <img className="w-full" src={instagram} aria-hidden={true} />
        </a>
        <a
          className="inline-block w-[38px] shrink-0"
          href="https://www.linkedin.com/in/jellyrolljunior/"
          target="”_blank”"
          rel="noopener"
        >
          <img className="w-full" src={linkedin} aria-hidden={true} />
        </a>
      </div>
    </div>
  );
};

export { SocialMediaContent };
