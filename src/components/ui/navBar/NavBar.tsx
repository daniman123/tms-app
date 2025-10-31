export interface INavBar {
  exampleProp: string;
}

const NavBar = () => {
  return (
    <nav className="top-0 sticky min-h-14 p-[1em] shadow-2xl">
      <section
        id="nav-content-container"
        className="relative max-w-[1028px] max-h-14 flex mx-auto px-1"
      >
        <div id="nav-logo">TMS</div>
        <div id="nav-btns" className="hidden sm:flex gap-2 mx-auto">
          <div className="px-1 cursor-pointer opacity-85 hover:opacity-100">
            Home
          </div>
          <div className="px-1 cursor-pointer opacity-85 hover:opacity-100">
            About
          </div>
          <div className="px-1 cursor-pointer opacity-85 hover:opacity-100">
            Contact
          </div>
        </div>
        <div id="nav-lang" className="hidden sm:block">
          LANG
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
