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

const Project = ({
  className,
  title,
  techStackArray,
  description,
  // githubLink,
  // demoLink,
  carouselImagesArray,
  carouselReverseOrientation = false,
}) => {
  return (
    <div className={`rounded-sm ${className}`}>
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
        {/* Link buttons github an live demo */}
      </div>
    </div>
  );
};

const Projects = () => {
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

  return (
    <>
      <section className="border-yellow rounded-sm rounded-b-3xl border-2 pb-14">
        <div className="border-yellow flex border-b-2">
          <div className="yellow-stripes flex-1" />
          <h2 className="text-blue border-yellow border-x-2 px-5 pt-2 pb-1 text-center text-3xl font-extrabold">
            P R O J E C T S
          </h2>
          <div className="yellow-stripes flex-1 -scale-x-100" />
        </div>
        <div className="mt-8 grid grid-cols-2 items-center">
          <Project
            className="col-span-2 mx-auto max-w-5xl"
            title="Chiikawa News Network"
            description="Social networking by and for Chiikawa enjoyers. Message friends
                    in real time through private and public chats, share posts, customize 
                    your profile, and interact through likes & comments!"
            techStackArray={cnnTechStack}
            carouselImagesArray={cnnImages}
          />
        </div>
        <div className="mt-20 grid grid-cols-2 gap-8 px-8">
          <div className="flex flex-col gap-20">
            <Project
              title="Chiikawa I Spy"
              description="Play a rousing game of I Spy with Chiikawa and friends! Can you
                      spot all the cute critters?"
              techStackArray={cisTechStack}
              carouselImagesArray={cisImages}
              carouselReverseOrientation={true}
            />
            <Project
              title="Foods of Taiwan"
              description="A user generated database of Taiwanese foods! Create/edit/delete 
                      foods & food categories with all entries stored on a remote SQL database"
              techStackArray={fotTechStack}
              carouselImagesArray={fotImages}
            />
          </div>
          <div className="flex flex-col gap-20">
            <Project
              title="Sailor Moon Memory"
              description="Play a game of memory with sailor moon powered by Giphy!"
              techStackArray={smmTechStack}
              carouselImagesArray={smmImages}
            />
            <Project
              title="Socket Lovers"
              description="Real time messaging app with a clean minimal design. Message friends 
                      in real time through private and public chats, and customize your profile!"
              techStackArray={slTechStack}
              carouselImagesArray={slImages}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export { Projects };
