import { useRef } from 'react';
import me from '../assets/me/me.jpg';
// eslint-disable-next-line no-unused-vars
import { motion, stagger, useScroll, useTransform } from 'motion/react';

const textEnterVariants = {
  initial: {
    opacity: 0,
    transformOrigin: 'top left',
    rotate: '3deg',
  },
  whileInView: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      type: 'linear',
      ease: 'easeInOut',
    },
  },
};

const About = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ scrollRef });
  const titleX = useTransform(scrollYProgress, (value) => 200 - value * 200);
  const nameX = useTransform(scrollYProgress, (value) => -100 + value * 100);

  return (
    <section ref={scrollRef} className="mx-5 mt-8">
      <h2 className="text-blue text-center text-3xl font-extrabold">
        A B O U T
      </h2>
      <div className="mt-8 flex flex-col items-center justify-center lg:grid lg:w-full lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="border-green max-w-100 self-center justify-self-end rounded-md border-5"
          initial={{
            rotate: 0,
          }}
          whileHover={{
            rotate: [0, 3, 3, -3],
            transition: {
              duration: 1,
              times: [0, 0.3, 0.4, 1],
              ease: 'easeInOut',
            },
          }}
        >
          <img src={me} alt="" />
        </motion.div>
        <div className="mt-6 max-w-150 self-center lg:mt-0">
          <div className="mx-auto w-fit lg:mx-0">
            <motion.h3 className="text-red text-3xl" style={{ x: titleX }}>
              Hello!
            </motion.h3>
            <motion.h3 className="text-blue mt-1 text-5xl" style={{ x: nameX }}>
              I'm Brandon
            </motion.h3>
          </div>
          <motion.div
            className="font-saira mt-5 ml-0.5 lg:mr-10 lg:ml-0"
            variants={{
              whileInView: {
                transition: {
                  delayChildren: stagger(0.5),
                },
              },
            }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 1 }}
          >
            <motion.p variants={textEnterVariants}>
              Deeply invested in the life-long learning mentality, I'm a
              full-stack developer who loves to experiment in design. I create
              responsive layouts using React, NodeJS, inspiration around me, and
              whatevers in my noggin!
            </motion.p>
            <br />
            <motion.p variants={textEnterVariants}>
              From my experience as a Software Quality Assurance Specialist, I'm
              well acquainted to identifying and planning fixes of all kinds.
              I’m curious and passionate, especially when it comes to fashion,
              pottery, and music.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { About };
