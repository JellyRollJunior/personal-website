import { useState } from 'react';
import { ImageCarousel } from './ImageCarousel.jsx';
import { Link } from './Link.jsx';
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
  repoLink = null,
  projectLink = null,
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
    <article
      className={
        hidden
          ? 'hidden'
          : `flex flex-col lg:grid lg:grid-cols-7 ${className} gap-6`
      }
    >
      {/* Images */}
      {isCarousel ? (
        <div className="col-span-4 flex max-w-170 items-center justify-center self-center lg:max-w-none">
          <ImageCarousel imageArray={images} />
        </div>
      ) : (
        <div
          className={`col-span-4 mx-5 flex items-center justify-center gap-8 ${reverseOrientation && 'col-start-4'}`}
        >
          <motion.img
            className="border-green h-fit max-w-100 min-w-0 rounded-lg border-5"
            src={images && images[0]}
            whileHover={{
              scale: 1.05,
              transition: {
                ease: 'easeInOut',
              },
            }}
          />
          {images.map(
            (src, index) =>
              index > 0 && (
                <motion.img
                  key={src}
                  className="border-green hidden h-fit max-w-100 min-w-0 rounded-lg border-5 lg:block"
                  src={src}
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      ease: 'easeInOut',
                    },
                  }}
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
        <p className="font-saira mx-auto mt-1.5 max-w-md text-center text-lg">
          {description}
        </p>
        <div className="text-blue mt-2 flex justify-around">
          {repoLink && <Link href={repoLink}>Repository</Link>}
          {projectLink && <Link href={projectLink}>Live Demo</Link>}
        </div>
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
            className="grid grid-cols-[16px_1fr] items-center gap-2 rounded-md px-3 py-1 lg:px-0"
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
    </article>
  );
};

const FeaturedProjects = () => {
  return (
    <section className="mt-5 lg:mx-5">
      <h2 className="text-blue text-center text-3xl font-extrabold">
        P R O J E C T S
      </h2>
      <div className="mt-8 mb-3 flex flex-col gap-16">
        <Project
          title={CHIIKAWA_NEWS_NETWORK.title}
          description={CHIIKAWA_NEWS_NETWORK.description}
          techStackArray={CHIIKAWA_NEWS_NETWORK.techStackArray}
          images={CHIIKAWA_NEWS_NETWORK.images}
          repoLink={CHIIKAWA_NEWS_NETWORK.repoLink}
          projectLink={CHIIKAWA_NEWS_NETWORK.projectLink}
        />
        <Project
          className="lg:mr-10"
          title={CHIIKAWA_I_SPY.title}
          description={CHIIKAWA_I_SPY.description}
          techStackArray={CHIIKAWA_I_SPY.techStackArray}
          images={CHIIKAWA_I_SPY.images}
          repoLink={CHIIKAWA_I_SPY.repoLink}
          projectLink={CHIIKAWA_I_SPY.projectLink}
          isCarousel={false}
          reverseOrientation={true}
        />
        <Project
          title={SAILOR_MOON_MEMORY.title}
          description={SAILOR_MOON_MEMORY.description}
          techStackArray={SAILOR_MOON_MEMORY.techStackArray}
          images={SAILOR_MOON_MEMORY.images}
          repoLink={SAILOR_MOON_MEMORY.repoLink}
          projectLink={SAILOR_MOON_MEMORY.projectLink}
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
    <section className="border-yellow mx-5 mt-5 rounded-md border-2 pt-5 pb-5 lg:h-120 lg:pt-8 lg:backdrop-blur-[1px]">
      <h2 className="text-blue text-center text-3xl font-extrabold">
        O T H E R <span className="hidden lg:inline-block">‣</span>
        <br className="lg:hidden" /> W O R K S
      </h2>
      <ul className="mt-3 flex justify-around">
        {otherProjectsList.map((project) => (
          <li className="relative flex-1 hover:bg-red/20" key={project.title}>
            <button
              className="size-full py-2"
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
          <motion.div
            key={selectedProject.title}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Project
              title={selectedProject.title}
              description={selectedProject.description}
              techStackArray={selectedProject.techStackArray}
              images={selectedProject.images}
              repoLink={selectedProject.repoLink}
              projectLink={selectedProject.projectLink}
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
