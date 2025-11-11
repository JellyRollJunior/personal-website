const Projects = () => {
  return (
    <>
      {/* temp hscreen for working purposes */}
      <section className="min-h-screen px-5">
        <h2 className="text-blue text-3xl font-extrabold">
          P R O J E C T S
        </h2>
        {/* Chiikawa News Network */}
        <div className="grid grid-cols-3 mx-8 mt-8">
          <div className="self-center justify-self-center">
            <h3 className="text-red text-xl font-bold">
              Chiikawa News Network
            </h3>
            <p className="mt-3">
              Social networking by and for Chiikawa enjoyers. Message friends in
              real time, share posts, customize your profile, and interact
              through likes & comments!
            </p>
            <div className="flex justify-around mt-5">
              <button className="border-yellow border rounded-md px-5 py-1">
                GitHub
              </button>
              <button className="border-yellow border rounded-md px-5 py-1">
                Live Demo
              </button>
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <div className="w-100  aspect-16/10 border-yellow rounded-md border">
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Projects };
