const MobileSection = ({ id, children }) => {
  return (
    <section id={id} className="flex scroll-mt-4 flex-col items-center">
      {children}
    </section>
  );
};

export { MobileSection };
