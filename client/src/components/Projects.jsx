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
import slLoading from '../assets/projects/socketLovers/loading-animations.gif';
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

const Project = ({
  className,
  title,
  techStackArray,
  description,
  githubLink,
  demoLink,
  carouselImagesArray,
  carouselReverseOrientation = false,
}) => {
  return (
    <div className={`mt-8 rounded-sm ${className}`}>
      <div className="flex items-center justify-center">
        <ImageCarousel
          imageArray={carouselImagesArray}
          reverseOrientation={carouselReverseOrientation}
        />
      </div>
      <div className="mt-7 w-full self-center justify-self-center">
        <h3 className="text-red text-center text-2xl font-bold">{title}</h3>
        <div className="mt-2 flex flex-wrap justify-center gap-x-2 px-14">
          {techStackArray.map((tech) => (
            <div className="grid grid-cols-[16px_1fr] items-center gap-2 rounded-md px-3 py-1">
              <img className="w-full" src={tech.icon} />
              <div className="mt-1 text-xs">{tech.name}</div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-3.5 max-w-md text-center">{description}</p>
        <div className="mt-5 flex justify-around">
          <button className="border-yellow rounded-md border px-5 py-1">
            GitHub
          </button>
          <button className="border-yellow rounded-md border px-5 py-1">
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const cnnImages = [cnnChat, cnnHome, cnnMobile, cnnProfile];
  const cnnTechStack = [
    { icon: react, name: 'React' },
    { icon: nodejs, name: 'NodeJs' },
    { icon: express, name: 'Express' },
    { icon: prisma, name: 'PrismaORM' },
    { icon: socketio, name: 'Socket.IO' },
  ];
  const cisImages = [cisGameplay, cisStart, cisWin];
  const cisTechStack = [
    { icon: react, name: 'React' },
    { icon: nodejs, name: 'NodeJs' },
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
    { icon: nodejs, name: 'NodeJs' },
    { icon: express, name: 'Express' },
    { icon: pg, name: 'PostgreSQL' },
  ];
  const slImages = [slLoading, slHome, slChat, slProfile];
  const slTechStack = [
    { icon: react, name: 'React' },
    { icon: nodejs, name: 'NodeJs' },
    { icon: express, name: 'Express' },
    { icon: prisma, name: 'PrismaORM' },
    { icon: socketio, name: 'Socket.IO' },
  ];
  const smmImages = [smmHome];
  const smmTechStack = [{ icon: react, name: 'React' }];

  return (
    <>
      <section className="min-h-screen">
        <h2 className="text-blue text-center text-3xl font-extrabold">
          P R O J E C T S
        </h2>
        <div className="grid grid-cols-2 grid-rows-7 items-center gap-y-8">
          <Project
            className="row-span-7"
            title="Chiikawa News Network"
            description="Social networking by and for Chiikawa enjoyers. Message friends
                    in real time, share posts, customize your profile, and interact
                    through likes & comments!"
            techStackArray={cnnTechStack}
            carouselImagesArray={cnnImages}
          />
          <div></div>
          <Project
            className="row-span-7"
            title="Chiikawa I Spy"
            description="I AM USAGI YAHAAHAHHAHAHAHAHHAHAHA
                asdhsdfjksadfh dfshakdfjsdhfkasfds"
            techStackArray={cisTechStack}
            carouselImagesArray={cisImages}
            carouselReverseOrientation={true}
          />
          <Project
            className="row-span-7"
            title="Foods of Taiwan"
            description="I AM USAGI YAHAAHAHHAHAHAHAHHAHAHA
              asdhsdfjksadfh dfshakdfjsdhfkasfds"
            techStackArray={fotTechStack}
            carouselImagesArray={fotImages}
          />
          <Project
            className="row-span-7"
            title="Sailor Moon Memory"
            description="I AM USAGI YAHAAHAHHAHAHAHAHHAHAHA
              asdhsdfjksadfh dfshakdfjsdhfkasfds"
            techStackArray={smmTechStack}
            carouselImagesArray={smmImages}
          />
          <Project
            className="row-span-7"
            title="Socket Lovers"
            description="I AM USAGI YAHAAHAHHAHAHAHAHHAHAHA
              asdhsdfjksadfh dfshakdfjsdhfkasfds"
            techStackArray={slTechStack}
            carouselImagesArray={slImages}
          />
        </div>
      </section>
    </>
  );
};

export { Projects };
