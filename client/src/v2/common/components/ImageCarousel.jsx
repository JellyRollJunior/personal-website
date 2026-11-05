import { useCallback, useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

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

  // Advance image every 8 seconds
  useEffect(() => {
    const imgNextInterval = setInterval(() => {
      showNextImage(imageArray.length);
    }, 8000);

    return () => clearInterval(imgNextInterval);
  }, [imageArray, showNextImage, imageIndex]);

  if (!imageArray || !Array.isArray(imageArray)) return;
  return (
    <div className={`${className}`}>
      {/* Images */}
      <div
        className="w-[30rem] max-w-[80vw] overflow-clip"
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
              className="absolute h-full w-full object-contain"
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
          className="px-5"
          onClick={() => showPrevImage(imageArray.length)}
        >
          Prev
        </button>

        {/* Image index buttons */}
        <div className="grid grid-cols-4 items-center gap-3">
          {imageArray.map((src, index) => (
            <button
              key={`${src}:${index}`}
              className={[
                'block-shadow size-3 justify-self-center rounded-full',
                imageIndex == index ? 'bg-red w-5' : 'bg-blue',
              ].join(' ')}
              onClick={() => setImageIndex(index)}
            ></button>
          ))}
        </div>

        {/* Next */}
        <button
          className="px-5"
          onClick={() => showNextImage(imageArray.length)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { ImageCarousel };
