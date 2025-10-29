export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
  return (
    <>
      <nav className="top-0 sticky bg-amber-200 p-[1em]">NavBar</nav>
      <main className="bg-amber-700 max-w-[1028px] mx-auto px-16 py-8">
        {children}
      </main>
      <footer className="bg-violet-200 p-[2em]">Footer</footer>
    </>
  );
};

export default PrimaryLayout;
