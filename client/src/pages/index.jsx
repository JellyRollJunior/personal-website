import { Header } from '../components/Header.jsx';
import { About } from '../components/About.jsx';
import { Projects } from '../components/Projects.jsx';
import { Contact } from '../components/Contact.jsx';
import { Skills } from '../components/Skills.jsx';

const Index = () => {
  return (
    <div className="flex w-full justify-center grid-lines overflow-x-hidden">
      <div className="flex w-full max-w-[1800px] flex-col gap-5">
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
