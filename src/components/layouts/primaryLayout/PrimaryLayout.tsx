import NavBar from "@/components/ui/navBar/NavBar";

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
  return (
    <>
      <NavBar />
      <main className="max-w-[1028px] mx-auto px-4 py-8">{children}</main>
      <footer className="bg-violet-200 p-[2em]">Footer</footer>
    </>
  );
};

export default PrimaryLayout;
