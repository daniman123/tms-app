import Button from "../button/Button";

export interface INavBar {
  exampleProp: string;
}

const NavBar = () => {
  return (
    <section className="relative min-w-full shadow-2xs">
      <nav className="flex w-full">
        <div className="flex w-1/3">Logo</div>
        <div className="hidden md:flex w-1/3 gap-8 justify-center">
          <Button buttonText="Home" />
          <Button buttonText="About" />
          <Button buttonText="Contact" />
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
