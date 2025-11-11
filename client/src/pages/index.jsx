import { Header } from '../components/Header.jsx';
import { Projects } from '../components/Projects.jsx';

const Index = () => {
  return (
    <div className='flex justify-center w-full flex-col px-5 gap-5'>
      <Header />
      <Projects />
    </div>
  );
};

export { Index };
