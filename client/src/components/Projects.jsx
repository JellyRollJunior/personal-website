import { useState } from 'react';
import chat from '../assets/projects/chiikawaNewsNetwork/chat.webp';
import home from '../assets/projects/chiikawaNewsNetwork/home.webp';
import mobile from '../assets/projects/chiikawaNewsNetwork/mobile.webp';
import profile from '../assets/projects/chiikawaNewsNetwork/profile.webp';

const ImageCarousel = ({ className, imageArray }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const baseImgStyling =
    'border-red border-5 col-span-7 row-span-7 aspect-16/10 w-full';
  const modulo = (input, mod) => ((input % mod) + mod) % mod;
  return (
    <div className={`isolate ${className}`}>
      <div className="grid grid-cols-9">
        <img
          className={`${baseImgStyling} col-start-1 row-start-1`}
          src={imageArray[imgIndex % imageArray.length]}
        />
        <img
          className={`${baseImgStyling} z-1 col-start-2 row-start-2`}
          src={imageArray[(imgIndex + 1) % imageArray.length]}
        />
        <img
          className={`${baseImgStyling} col-start-3 row-start-3`}
          src={imageArray[(imgIndex + 2) % imageArray.length]}
        />
      </div>
      <div className="mt-3 flex w-full justify-between px-5">
        <button onClick={() => setImgIndex((prev) => modulo(prev - 1, imageArray.length))}>
          prev
        </button>
        <button onClick={() => setImgIndex((prev) => modulo(prev + 1, imageArray.length))}>
          next
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const images = [chat, home, mobile, profile];

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
            <ImageCarousel className="w-1/2" imageArray={images} />
          </div>
        </div>
      </section>
    </>
  );
};

export { Projects };
