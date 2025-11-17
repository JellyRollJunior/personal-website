import { useState, Fragment } from 'react';
import { ImageCarousel } from './ImageCarousel.jsx';
import {
  CHIIKAWA_NEWS_NETWORK,
  CHIIKAWA_I_SPY,
  SAILOR_MOON_MEMORY,
  SOCKET_LOVERS,
  FOODS_OF_TAIWAN,
} from '../data/projects.js';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion, stagger } from 'motion/react';

const Project = ({
  className,
  title,
  techStackArray,
  description,
  images,
  isCarousel = true,
  hidden = false,
  reverseOrientation = false,
}) => {
  if (
    !images ||
    !techStackArray ||
    !Array.isArray(images) ||
    !Array.isArray(techStackArray)
  ) {
    return null;
  }
  return (
    <div
      className={
        hidden
          ? 'hidden'
          : `flex flex-col lg:grid lg:grid-cols-7 ${className} gap-6`
      }
    >
      {/* Images */}
      {isCarousel ? (
        <div className="col-span-4 flex items-center justify-center">
          <ImageCarousel imageArray={images} />
        </div>
      ) : (
        <div
          className={`col-span-4 mx-5 flex gap-8 ${reverseOrientation && 'col-start-4'}`}
        >
          <img
            className="border-green w-full rounded-lg border-5 object-fill"
            src={images && images[0]}
          />
          {images.map(
            (src, index) =>
              index > 0 && (
                <img
                  key={src}
                  className="border-green hidden w-full rounded-lg border-5 object-fill lg:block"
                  src={src}
                />
              )
          )}
        </div>
      )}
      {/* Title & Description */}
      <div
        className={`col-span-2 flex w-full flex-col justify-center px-5 lg:px-0 ${reverseOrientation && 'col-start-2 row-start-1'}`}
      >
        <h3 className="text-red text-center text-2xl font-bold">{title}</h3>
        <p className="font-saira mx-auto max-w-md text-center text-lg">
          {description}
        </p>
      </div>
      {/* Tech Stack */}
      <motion.ul
        className={`-mt-3 flex flex-wrap justify-center px-5 lg:mt-0 lg:flex-col lg:px-0 ${reverseOrientation && 'row-start-1 items-end'}`}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: stagger(0.1),
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 1,
        }}
      >
        {techStackArray.map((tech) => (
          <motion.li
            key={tech.name}
            className="grid grid-cols-[16px_1fr] items-center gap-2 rounded-md px-3 py-1"
            variants={{
              hidden: { opacity: 0, x: reverseOrientation ? -15 : 15 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img className="w-full" src={tech.icon} />
            <div className="text-sm">{tech.name}</div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <section className="lg:mx-5">
      <h2 className="text-blue text-center text-3xl font-extrabold">
        P R O J E C T S
      </h2>
      <div className="mt-8 mb-3 flex flex-col gap-16">
        <Project
          title={CHIIKAWA_NEWS_NETWORK.title}
          description={CHIIKAWA_NEWS_NETWORK.description}
          techStackArray={CHIIKAWA_NEWS_NETWORK.techStackArray}
          images={CHIIKAWA_NEWS_NETWORK.images}
        />
        <Project
          className="lg:mr-10"
          title={CHIIKAWA_I_SPY.title}
          description={CHIIKAWA_I_SPY.description}
          techStackArray={CHIIKAWA_I_SPY.techStackArray}
          images={CHIIKAWA_I_SPY.images}
          isCarousel={false}
          reverseOrientation={true}
        />
        <Project
          title={SAILOR_MOON_MEMORY.title}
          description={SAILOR_MOON_MEMORY.description}
          techStackArray={SAILOR_MOON_MEMORY.techStackArray}
          images={SAILOR_MOON_MEMORY.images}
          isCarousel={false}
        />
      </div>
    </section>
  );
};

const OtherWorks = () => {
  const otherProjectsList = [FOODS_OF_TAIWAN, SOCKET_LOVERS];
  const [selectedProject, setSelectedProject] = useState(otherProjectsList[0]);

  return (
    <section className="lg:border-yellow mt-5 rounded-md pb-5 lg:mx-5 lg:h-120 lg:border-2">
      <h2 className="text-blue text-center text-3xl font-extrabold lg:mt-8">
        O T H E R <span className="hidden lg:inline-block">‣</span>
        <br className="lg:hidden" /> W O R K S
      </h2>
      <ul className="mt-5 flex justify-around">
        {otherProjectsList.map((project) => (
          <li className="relative flex-1" key={project.title}>
            <button
              className="size-full pb-2"
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
              {project.title === selectedProject.title && (
                <motion.div
                  className="bg-red absolute bottom-0 h-1 w-full translate-y-1/1 rounded-sm"
                  layoutId="underline"
                  id="underline"
                />
              )}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-8 lg:px-5">
        <AnimatePresence mode="wait">
          <motion.div key={selectedProject.title} exit={{ opacity: 0 }}>
            <Project
              title={selectedProject.title}
              description={selectedProject.description}
              techStackArray={selectedProject.techStackArray}
              images={selectedProject.images}
              isCarousel={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <>
      <FeaturedProjects />
      <OtherWorks />
    </>
  );
};

export { Projects };
