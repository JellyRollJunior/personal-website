// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

import { useCallback, useState } from 'react';

const ImageCarousel = ({ className, imageArray }) => {
  // Determine aspect ratio from 1st image
  const [ratio, setRatio] = useState(16 / 9);

  // Setting image index
  const [imageIndex, setImageIndex] = useState(0);
  const showNextImage = useCallback((length = 1) => {
    setImageIndex((prev) => (prev + 1) % length);
  }, []);
  const showPrevImage = (length = 1) => {
    // This is (prev - 1) % length
    setImageIndex((prev) => (((prev - 1) % length) + length) % length);
  };

  if (!imageArray || !Array.isArray(imageArray)) return;
  return (
    <div className={`${className}`}>
      {/* Images */}
      <div
        className="w-[40rem] max-w-[80vw] overflow-clip"
        style={{ aspectRatio: ratio }}
      >
        <motion.div
          initial={{ translateX: 0 }}
          animate={{ translateX: `${imageIndex * -100}%` }}
          transition={{
            type: 'spring',
            visualDuration: 0.35,
            bounce: 0.2,
          }}
          className="relative flex h-full"
        >
          {imageArray.map((src, index) => (
            <img
              style={{ left: `${100 * index}%` }}
              key={index}
              className="absolute h-full w-full object-contain pointer-events-none"
              src={src}
              onLoad={
                index === 0
                  ? (e) =>
                      setRatio(
                        e.currentTarget.naturalWidth /
                          e.currentTarget.naturalHeight
                      )
                  : undefined
              }
            />
          ))}
        </motion.div>
      </div>

      {/* Carousel Control Buttons */}
      <div className="mt-3 flex items-center justify-center gap-8 pb-2">
        {/* Prev */}
        <button
          className="carousel-button px-5"
          onClick={() => showPrevImage(imageArray.length)}
        >
          Prev
        </button>

        {/* Image index buttons */}
        <div
          className="grid items-center gap-3"
          style={{
            gridTemplateColumns: `repeat(${imageArray.length}, 1.5rem)`,
          }}
        >
          {imageArray.map((src, index) => (
            <button
              key={`${src}:${index}`}
              className={[
                'size-3 justify-self-center rounded-full hover:cursor-pointer',
                imageIndex == index
                  ? 'carousel-index-button-selected w-5'
                  : 'carousel-index-button',
              ].join(' ')}
              onClick={() => setImageIndex(index)}
            />
          ))}
        </div>

        {/* Next */}
        <button
          className="carousel-button px-5"
          onClick={() => showNextImage(imageArray.length)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { ImageCarousel };
