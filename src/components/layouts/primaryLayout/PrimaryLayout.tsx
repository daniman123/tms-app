export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <main className="max-w-[1128px]">{children}</main>
    </div>
  );
};

export default PrimaryLayout;
