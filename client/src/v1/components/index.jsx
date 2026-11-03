import { Header } from './Header.jsx';
import { About } from './About.jsx';
import { Projects } from './Projects.jsx';
import { Contact } from './Contact.jsx';
import { Skills } from './Skills.jsx';
import { LoadingMask } from './Loading.jsx';

const Index = () => {
  return (
    <div className="v1 grid-lines flex w-full justify-center overflow-x-hidden">
      <div className="flex w-full max-w-[1800px] flex-col gap-5">
        <LoadingMask />
        <Header />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export { Index };
