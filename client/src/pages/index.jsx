import { Header } from '../components/Header.jsx';
import { About } from '../components/About.jsx';
import { Projects } from '../components/Projects.jsx';
import { Contact } from '../components/Contact.jsx';
import { Skills } from '../components/Skills.jsx';
import { Loading } from '../components/Loading.jsx';
import { useEffect, useState } from 'react';

const Index = () => {
  const LOADING_DURATION = 5000;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, LOADING_DURATION);

    () => clearTimeout(timeout)
  }, [LOADING_DURATION]);

  return (
    <div className="grid-lines flex w-full justify-center overflow-x-hidden">
      <div className="flex w-full max-w-[1800px] flex-col gap-5">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Skills />
            <Projects />
            <About />
            <Contact />
          </>
        )}
      </div>
    </div>
  );
};

export { Index };
