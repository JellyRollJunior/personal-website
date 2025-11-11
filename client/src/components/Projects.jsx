import { useState } from 'react';
import image from '../assets/icons/arrow-down.svg';

const ImageCarousel = ({ className, imageArray }) => {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className={`isolate ${className}`}>
      <div className="grid grid-cols-9">
        <img
          className="border-yellow bg-red z-0 col-span-7 col-start-1 row-span-7 row-start-1 aspect-16/10 w-full border-2"
          src={imageArray[imgIndex % imageArray.length]}
        />
        <img
          className="border-yellow bg-blue z-1 col-span-7 col-start-2 row-span-7 row-start-2 aspect-16/10 w-full border-2"
          src={imageArray[(imgIndex + 1) % imageArray.length]}
        />
        <img
          className="border-yellow bg-green z-0 col-span-7 col-start-3 row-span-7 row-start-3 aspect-16/10 w-full border-2"
          src={imageArray[(imgIndex + 2) % imageArray.length]}
        />
      </div>
      <div className='flex w-full justify-between px-5 mt-3'>
        <button>prev</button>
        <button>next</button>
      </div>
    </div>
  );
};

const Projects = () => {
  const images = [image, image, image];

  return (
    <>
      {/* temp hscreen for working purposes */}
      <section className="min-h-screen px-5">
        <h2 className="text-blue text-3xl font-extrabold">P R O J E C T S</h2>
        {/* Chiikawa News Network */}
        <div className="mx-8 mt-8 grid grid-cols-3 gap-8">
          <div className="self-center justify-self-center">
            <h3 className="text-red text-xl font-bold">
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
            <ImageCarousel
            className='w-1/2'
              imageArray={images}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export { Projects };
