import { useState, Fragment } from 'react';
import { ImageCarousel } from './ImageCarousel.jsx';
/* Chiikawa News Network */
import cnnChat from '../assets/projects/chiikawaNewsNetwork/chat.webp';
import cnnHome from '../assets/projects/chiikawaNewsNetwork/home.webp';
import cnnMobile from '../assets/projects/chiikawaNewsNetwork/mobile.webp';
import cnnProfile from '../assets/projects/chiikawaNewsNetwork/profile.webp';
/* Chiikawa I Spy */
import cisGameplay from '../assets/projects/chiikawaISpy/gameplay.gif';
import cisStart from '../assets/projects/chiikawaISpy/start-page.png';
import cisWin from '../assets/projects/chiikawaISpy/win.gif';
/* Foods of Taiwan */
import fotHome from '../assets/projects/foodsOfTaiwan/foods-page.gif';
import fotCategories from '../assets/projects/foodsOfTaiwan/categories-page.gif';
import fotEdit from '../assets/projects/foodsOfTaiwan/edit.gif';
/* Socket Lovers */
import slHome from '../assets/projects/socketLovers/index.png';
import slChat from '../assets/projects/socketLovers/creating-chat.gif';
import slProfile from '../assets/projects/socketLovers/edit-profile.gif';
/* Sailor Moon Memory */
import smmHome from '../assets/projects/sailorMoonMemory/index.png';
/* Tech */
import react from '../assets/icons/react.svg';
import nodejs from '../assets/icons/nodejs.svg';
import express from '../assets/icons/express.svg';
import prisma from '../assets/icons/prisma.svg';
import socketio from '../assets/icons/socketio.svg';
import jest from '../assets/icons/jest.svg';
import pg from '../assets/icons/postgresql.svg';
import js from '../assets/icons/js.svg';
import html from '../assets/icons/html.svg';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'motion/react';

/* Project Data */
const cnnImages = [cnnChat, cnnHome, cnnMobile, cnnProfile];
const cnnTechStack = [
  { icon: react, name: 'React' },
  { icon: nodejs, name: 'NodeJS' },
  { icon: express, name: 'Express' },
  { icon: prisma, name: 'PrismaORM' },
  { icon: socketio, name: 'Socket.IO' },
];
const cisImages = [cisGameplay, cisStart, cisWin];
const cisTechStack = [
  { icon: react, name: 'React' },
  { icon: nodejs, name: 'NodeJS' },
  { icon: express, name: 'Express' },
  { icon: prisma, name: 'PrismaORM' },
  { icon: socketio, name: 'Socket.IO' },
  { icon: jest, name: 'Jest' },
];
const fotImages = [fotHome, fotCategories, fotEdit];
const fotTechStack = [
  { icon: js, name: 'Javascript' },
  { icon: html, name: 'HTML' },
  { icon: js, name: 'EJS' },
  { icon: nodejs, name: 'NodeJS' },
  { icon: express, name: 'Express' },
  { icon: pg, name: 'PostgreSQL' },
];
const slImages = [slProfile, slHome, slChat];
const slTechStack = [
  { icon: react, name: 'React' },
  { icon: nodejs, name: 'NodeJS' },
  { icon: express, name: 'Express' },
  { icon: prisma, name: 'PrismaORM' },
  { icon: socketio, name: 'Socket.IO' },
];
const smmImages = [smmHome];
const smmTechStack = [{ icon: react, name: 'React' }];
/* Project Lists */
const otherProjectsList = [
  {
    title: 'Foods of Taiwan',
    description:
      'A user generated database of Taiwanese foods! Create/edit/delete foods & food categories with all entries stored on a remote SQL database',
    techStackArray: fotTechStack,
    carouselImageArray: fotImages,
  },
  {
    title: 'Sailor Moon Memory',
    description: 'Play a game of memory with sailor moon powered by Giphy!',
    techStackArray: smmTechStack,
    carouselImageArray: smmImages,
  },
  {
    title: 'Socket Lovers',
    description:
      'Real time messaging app with a clean minimal design. Message friends in real time through private and public chats, and customize your profile!',
    techStackArray: slTechStack,
    carouselImageArray: slImages,
  },
];

const Project = ({
  className,
  title,
  techStackArray,
  description,
  // githubLink,
  // demoLink,
  carouselImageArray,
  staticImageAspectRatio = false,
  reverseOrientation = false,
}) => {
  return (
    <div className={`grid grid-cols-7 ${className} `}>
      <div
        className={`col-span-4 flex items-center justify-center ${reverseOrientation && 'col-start-4'}`}
      >
        <ImageCarousel
          imageArray={carouselImageArray}
          reverseOrientation={reverseOrientation}
          staticImageAspectRatio={staticImageAspectRatio}
        />
      </div>
      <div
        className={`col-span-2 flex w-full flex-col justify-center ${reverseOrientation && 'col-start-2 row-start-1'}`}
      >
        <h3 className="text-red text-center text-2xl font-bold">{title}</h3>
        <p className="mx-auto mt-3.5 max-w-md text-center">{description}</p>
        {/* Link buttons github an live demo */}
      </div>
      <ul
        className={`flex flex-col justify-center ${reverseOrientation && 'col-start-1 row-start-1 '}`}
      >
        {techStackArray.map((tech) => (
          <li className="grid grid-cols-[16px_1fr] items-center gap-2 rounded-md px-3 py-1">
            <img className="w-full" src={tech.icon} />
            <div className="mt-1 text-xs">{tech.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <section>
      <h2 className="text-blue text-center text-3xl font-extrabold">
        P R O J E C T S
      </h2>
      <div className="mt-8 flex flex-col gap-8">
        <Project
          title="Chiikawa News Network"
          description="Social networking by and for Chiikawa enjoyers. Message friends
                      in real time through private and public chats, share posts, customize
                      your profile, and interact through likes & comments!"
          techStackArray={cnnTechStack}
          carouselImageArray={cnnImages}
        />
        <Project
          className="mr-20 w-4/5 self-end"
          title="Chiikawa I Spy"
          description="Play a rousing game of I Spy with Chiikawa and friends! Can you
                        spot all the cute critters?"
          techStackArray={cisTechStack}
          carouselImageArray={cisImages}
          reverseOrientation={true}
        />
      </div>
    </section>
  );
};

const OtherProjects = () => {
  const [selectedProject, setSelectedProject] = useState(
    otherProjectsList[0].title
  );

  return (
    <section className="border-yellow mt-8 rounded-md border-2">
      <h2 className="text-blue mt-8 text-center text-3xl font-extrabold">
        O T H E R ‣ W O R K S
      </h2>
      <ul className="mt-5 grid grid-cols-3">
        {otherProjectsList.map((project) => (
          <li className="relative" key={project.title}>
            <button
              className="size-full pb-2"
              onClick={() => setSelectedProject(project.title)}
            >
              {project.title}
              {project.title === selectedProject && (
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
      <div className="mt-8 px-5 pb-8">
        {otherProjectsList.map((project) => (
          <Fragment key={project.title}>
            <Project
              className={`${selectedProject !== project.title && 'hidden'}`}
              title={project.title}
              description={project.description}
              techStackArray={project.techStackArray}
              carouselImageArray={project.carouselImageArray}
              staticImageAspectRatio={true}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <>
      <FeaturedProjects />
      <OtherProjects />
    </>
  );
};

export { Projects };
