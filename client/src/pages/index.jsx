import { Header } from '../components/Header.jsx';
import { Projects } from '../components/Projects.jsx';

const Index = () => {
  return (
    <div className='flex justify-center w-full '>
      <div className='max-w-[1800px] flex flex-col gap-5'>
        <Header />
        <Projects />
      </div>
    </div>
  );
};

export { Index };
