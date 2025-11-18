import me from '../assets/me/me.jpg';

const About = () => {
  return (
    <section className="mt-5 lg:mx-5">
      <h2 className="text-blue text-center text-3xl font-extrabold">
        A B O U T
      </h2>
      <div className="mt-8 grid grid-cols-2 w-full justify-center gap-16">
        <div className="border-green w-100 self-center justify-self-end rounded-md border-5">
          <img src={me} alt="" />
        </div>
        <div className="max-w-150 self-center">
          <h3 className="text-red text-3xl">Hello!</h3>
          <h3 className="text-blue mt-1 text-5xl">I'm Brandon</h3>
          <p className="font-saira mt-5">
            Deeply invested in the life-long learning mentality, I'm a
            full-stack developer who loves to experiment in design. I create
            responsive layouts using React, NodeJS, inspiration around me, and
            whatevers in my noggin!
            <br />
            <br />
            From my experience as a Software Quality Assurance Specialist, I'm
            well acquainted to identifying and planning fixes of all kinds. I’m curious and
            passionate, especially when it comes to fashion, pottery, and music.
          </p>
        </div>
      </div>
    </section>
  );
};

export { About };
