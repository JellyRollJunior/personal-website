import { useRef } from 'react';
import me from '../assets/me/me.jpg';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'motion/react';

const About = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ scrollRef });
  const titleX = useTransform(scrollYProgress, (value) => 200 - value * 200);
  const nameX = useTransform(scrollYProgress, (value) => -100 + value * 100);

  return (
    <section ref={scrollRef} className="mt-5 lg:mx-5">
      <h2 className="text-blue text-center text-3xl font-extrabold">
        A B O U T
      </h2>
      <div className="mt-8 grid w-full grid-cols-2 justify-center gap-16">
        <motion.div
          className="border-green w-100 self-center justify-self-end rounded-md border-5"
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
        <div className="max-w-150 self-center">
          <motion.h3 className="text-red text-3xl" style={{ x: titleX }}>
            Hello!
          </motion.h3>
          <motion.h3 className="text-blue mt-1 text-5xl" style={{ x: nameX }}>
            I'm Brandon
          </motion.h3>
          <p className="font-saira mt-5">
            Deeply invested in the life-long learning mentality, I'm a
            full-stack developer who loves to experiment in design. I create
            responsive layouts using React, NodeJS, inspiration around me, and
            whatevers in my noggin!
            <br />
            <br />
            From my experience as a Software Quality Assurance Specialist, I'm
            well acquainted to identifying and planning fixes of all kinds. I’m
            curious and passionate, especially when it comes to fashion,
            pottery, and music.
          </p>
        </div>
      </div>
    </section>
  );
};

export { About };
