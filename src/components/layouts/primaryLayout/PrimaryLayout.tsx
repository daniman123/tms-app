import NavBar from "@/components/ui/navBar/NavBar";

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
  return (
    <>
      <NavBar />
      <main className="relative max-w-[1128px] mx-auto my-9 px-4 sm:px-8 bg-white -z-50">
        {children}
      </main>
      <footer className="bg-violet-200 p-[2em]">Footer</footer>
    </>
  );
};

export default PrimaryLayout;
