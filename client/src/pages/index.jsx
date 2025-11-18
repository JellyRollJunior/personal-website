import { Header } from '../components/Header.jsx';
import { About } from '../components/About.jsx';
import { Projects } from '../components/Projects.jsx';
import { Contact } from '../components/Contact.jsx';

const Index = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex max-w-[1800px] flex-col gap-5">
        <Header />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export { Index };
