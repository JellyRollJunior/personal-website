import { useState } from 'react';

import cnnChat from '../assets/projects/chiikawaNewsNetwork/chat.webp';
import cnnHome from '../assets/projects/chiikawaNewsNetwork/home.webp';
import cnnMobile from '../assets/projects/chiikawaNewsNetwork/mobile.webp';
import cnnProfile from '../assets/projects/chiikawaNewsNetwork/profile.webp';

import cisGameplay from '../assets/projects/chiikawaISpy/gameplay.gif';
import cisStart from '../assets/projects/chiikawaISpy/start-page.png';
import cisWin from '../assets/projects/chiikawaISpy/win.gif';

import leftArrow from '../assets/icons/chevron-left.svg';
import rightArrow from '../assets/icons/chevron-right.svg';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'motion/react';

import react from '../assets/icons/react.svg';
import nodejs from '../assets/icons/nodejs.svg';
import express from '../assets/icons/express.svg';
import prisma from '../assets/icons/prisma.svg';
import socketio from '../assets/icons/socketio.svg';
import jest from '../assets/icons/jest.svg';

const TRANSLATE_DISTANCE = `${(1 / 6) * 100}%`;
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? TRANSLATE_DISTANCE : '-' + TRANSLATE_DISTANCE,
      y: direction > 0 ? TRANSLATE_DISTANCE : '-' + TRANSLATE_DISTANCE,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? TRANSLATE_DISTANCE : '-' + TRANSLATE_DISTANCE,
      y: direction > 0 ? '-' + TRANSLATE_DISTANCE : TRANSLATE_DISTANCE,
      opacity: 0,
    };
  },
};

const ImageCarousel = ({
  className,
  imageArray,
  reverseOrientation = false,
}) => {
  const [[imgIndex, direction], setImgIndex] = useState([0, 0]);

  const modulo = (input, mod) => ((input % mod) + mod) % mod;
  const nextImage = () => {
    setImgIndex([modulo(imgIndex + 1, imageArray.length), 1]);
  };
  const prevImage = () => {
    setImgIndex([modulo(imgIndex - 1, imageArray.length), -1]);
  };
  const baseImgStyling =
    'border-green border-5 col-span-4 row-span-4 aspect-16/10 w-full h-full rounded-md bg-black';

  return (
    <div
      className={`isolate ${className} flex items-center gap-3 ${reverseOrientation && '-scale-x-100'}`}
    >
      <button className="shrink-0" onClick={prevImage}>
        <img className="w-[50px]" src={leftArrow} />
      </button>
      <div className="grid grid-cols-6">
        <AnimatePresence custom={direction}>
          <motion.img
            key={imageArray[imgIndex % imageArray.length] + Date.now()}
            src={imageArray[imgIndex % imageArray.length]}
            className={`${baseImgStyling} col-start-1 row-start-1 opacity-50 ${reverseOrientation && '-scale-x-100'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
          />
          <motion.img
            key={imgIndex}
            src={imageArray[(imgIndex + 1) % imageArray.length]}
            className={`${baseImgStyling} z-1 col-start-2 row-start-2 ${reverseOrientation && '-scale-x-100'}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          />
          <motion.img
            key={imageArray[(imgIndex + 2) % imageArray.length] + Date.now()}
            src={imageArray[(imgIndex + 2) % imageArray.length]}
            className={`${baseImgStyling} col-start-3 row-start-3 opacity-50 ${reverseOrientation && '-scale-x-100'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
          />
        </AnimatePresence>
      </div>
      <button className="shrink-0" onClick={nextImage}>
        <img className="w-[50px]" src={rightArrow} />
      </button>
    </div>
  );
};

const Project = ({
  title,
  techStackArray,
  description,
  githubLink,
  demoLink,
  carouselImagesArray,
  carouselReverseOrientation = false,
}) => {
  return (
    <div className="mt-8 rounded-sm p-3">
      <div className="flex items-center justify-center">
        <ImageCarousel
          imageArray={carouselImagesArray}
          reverseOrientation={carouselReverseOrientation}
        />
      </div>
      <div className="mt-7 w-full self-center justify-self-center">
        <h3 className="text-red text-center text-2xl font-bold">{title}</h3>
        <div className="mt-2 flex flex-wrap justify-center gap-x-2">
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

  return (
    <>
      <section className="min-h-screen">
        <div className="grid grid-cols-2">
          <h2 className="text-blue text-center text-3xl font-extrabold">
            P R O J E C T S
          </h2>
          <div />
        </div>
        <div className="grid grid-cols-2">
          {/* Chiikawa News Network */}
          <Project
            title="Chiikawa News Network"
            description="Social networking by and for Chiikawa enjoyers. Message friends
                in real time, share posts, customize your profile, and interact
                through likes & comments!"
            techStackArray={cnnTechStack}
            carouselImagesArray={cnnImages}
          />
          <Project
            title="Chiikawa I Spy"
            description="I AM USAGI YAHAAHAHHAHAHAHAHHAHAHA
            asdhsdfjksadfh dfshakdfjsdhfkasfds"
            techStackArray={cisTechStack}
            carouselImagesArray={cisImages}
            carouselReverseOrientation={true}
          />
        </div>
      </section>
    </>
  );
};

export { Projects };
