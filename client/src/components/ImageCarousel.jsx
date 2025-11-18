import { useState } from 'react';
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
      transition: {
        duration: 0.5,
      },
    };
  },
  center: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? TRANSLATE_DISTANCE : '-' + TRANSLATE_DISTANCE,
      y: direction > 0 ? '-' + TRANSLATE_DISTANCE : TRANSLATE_DISTANCE,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
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
    'border-green border-5 col-span-9 row-span-9 w-full h-full rounded-md';
  if (!Array.isArray(imageArray)) return null;
  return (
    <div className={`isolate flex items-center lg:gap-3 ${className}`}>
      <button className="w-8 shrink-0 lg:w-fit" onClick={prevImage}>
        <img className="w-[50px]" src={leftArrow} />
      </button>
      {imageArray.length > 1 ? (
        <div className="grid grid-cols-11">
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
              className={`${baseImgStyling} z-1 col-start-2 row-start-2 drop-shadow-xl/25 drop-shadow-black`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              whileHover={{
                scale: 1.05,
                transition: {
                  ease: 'easeInOut',
                },
              }}
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
      ) : (
        <img
          src={imageArray[0]}
          className={`${baseImgStyling} z-1 col-start-2 row-start-2`}
        />
      )}
      <button className="w-8 shrink-0 lg:w-fit" onClick={nextImage}>
        <img className="w-[50px]" src={rightArrow} />
      </button>
    </div>
  );
};

export { ImageCarousel };
