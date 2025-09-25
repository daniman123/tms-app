export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
  return <main className="">{children}</main>;
};

export default PrimaryLayout;
