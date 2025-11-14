import { useState } from 'react';
import cnnChat from '../assets/projects/chiikawaNewsNetwork/chat.webp';
import cnnHome from '../assets/projects/chiikawaNewsNetwork/home.webp';
import cnnMobile from '../assets/projects/chiikawaNewsNetwork/mobile.webp';
import cnnProfile from '../assets/projects/chiikawaNewsNetwork/profile.webp';
import leftArrow from '../assets/icons/chevron-left.svg';
import rightArrow from '../assets/icons/chevron-right.svg';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'motion/react';

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

const ImageCarousel = ({ className, imageArray }) => {
  const [[imgIndex, direction], setImgIndex] = useState([0, 0]);

  const modulo = (input, mod) => ((input % mod) + mod) % mod;
  const nextImage = () => {
    setImgIndex([modulo(imgIndex + 1, imageArray.length), 1]);
  };
  const prevImage = () => {
    setImgIndex([modulo(imgIndex - 1, imageArray.length), -1]);
  };
  const baseImgStyling =
    'border-green border-5 col-span-4 row-span-4 aspect-16/10 w-full h-full rounded-md';

  return (
    <div className={`isolate ${className} flex items-center gap-3`}>
      <button className="shrink-0" onClick={prevImage}>
        <img className="w-[50px]" src={leftArrow} />
      </button>
      <div className="grid grid-cols-6">
        <AnimatePresence custom={direction}>
          <motion.img
            key={imageArray[imgIndex % imageArray.length] + Date.now()}
            src={imageArray[imgIndex % imageArray.length]}
            className={`${baseImgStyling} col-start-1 row-start-1 opacity-50`}
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
            className={`${baseImgStyling} z-1 col-start-2 row-start-2`}
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
            className={`${baseImgStyling} col-start-3 row-start-3 opacity-50`}
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

const Projects = () => {
  const chiikawaNewsNetworkImages = [cnnChat, cnnHome, cnnMobile, cnnProfile];

  return (
    <>
      {/* temp hscreen for working purposes */}
      <section className="min-h-screen px-5">
        <h2 className="text-blue text-3xl font-extrabold">P R O J E C T S</h2>
        {/* Chiikawa News Network */}
        <div className="mx-8 mt-8 grid grid-cols-3 gap-8">
          <div className="max-w-md self-center justify-self-center">
            <h3 className="text-red text-center text-xl font-bold">
              Chiikawa News Network
            </h3>
            <p className="mt-3">
              Social networking by and for Chiikawa enjoyers. Message friends in
              real time, share posts, customize your profile, and interact
              through likes & comments!
            </p>
            <div className="mt-5 flex justify-around">
              <button className="border-yellow rounded-md border px-5 py-1">
                GitHub
              </button>
              <button className="border-yellow rounded-md border px-5 py-1">
                Live Demo
              </button>
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <ImageCarousel imageArray={chiikawaNewsNetworkImages} />
          </div>
        </div>
      </section>
    </>
  );
};

export { Projects };
