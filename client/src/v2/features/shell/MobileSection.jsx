const MobileSection = ({ id, children }) => {
  return (
    <section id={id} className="scroll-mt-4 my-5">
      {children}
    </section>
  );
};

export { MobileSection };
