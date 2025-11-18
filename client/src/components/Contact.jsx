import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <section className="lg:border-yellow mx-5 my-8 rounded-md text-center lg:border-2 lg:py-5 lg:backdrop-blur-[1px]">
      <h2 className="text-blue text-center text-3xl font-extrabold">
        C O N T A C T
      </h2>
      <div className="mt-5">
        <h4>Let's Connect! Send me an e-mail at:</h4>
        <h3 className="text-red mt-1 text-xl font-bold break-all lg:text-3xl">
          <a className="hover:underline" href="mailto:BrandonLin9716@gmail.com">
            BrandonLin9716@gmail.com
          </a>
        </h3>
      </div>
      <div className="my-5">OR</div>
      <div>
        <h4 className="font-saira">Reach me through social media:</h4>
        <div className="mt-2 flex items-center justify-center gap-8">
          <motion.a
            className="inline-block w-[42px] shrink-0"
            href="https://github.com/jellyrolljunior"
            target="”_blank”"
            rel="noopener"
            whileHover={{
              scale: 1.1,
            }}
          >
            <img className="w-full" src={github} />
          </motion.a>
          <motion.a
            className="inline-block w-[42px] shrink-0"
            href="https://www.instagram.com/river.flows__"
            target="”_blank”"
            rel="noopener"
            whileHover={{
              scale: 1.1,
            }}
          >
            <img className="w-full" src={instagram} />
          </motion.a>
          <motion.a
            className="inline-block w-[42px] shrink-0"
            href="https://www.linkedin.com/in/jellyrolljunior/"
            target="”_blank”"
            rel="noopener"
            whileHover={{
              scale: 1.1,
            }}
          >
            <img className="w-full" src={linkedin} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export { Contact };
