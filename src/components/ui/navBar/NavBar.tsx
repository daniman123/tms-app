"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

export interface INavBar {
  exampleProp: string;
}

export interface INavBarButton {
  buttonLabel: string;
  buttonHref: string;
}

const NavBarDesktop = () => {
  return (
    <ul className="relative hidden sm:flex max-w-[1128px] mx-auto justify-center items-center gap-2">
      <NavBarButtonDesktop buttonLabel="Home" buttonHref="/" />
      <NavBarButtonDesktop buttonLabel="Booking" buttonHref="/booking" />
      <NavBarButtonDesktop buttonLabel="About" buttonHref="/about" />
    </ul>
  );
};

const NavBarButtonDesktop = ({ buttonLabel, buttonHref }: INavBarButton) => {
  const pathname = usePathname();
  const isActive = pathname === buttonHref;

  return (
    <li className="h-9">
      <Link
        href={buttonHref}
        className="group relative flex h-full items-center p-2 rounded-xs"
      >
        {buttonLabel}
        <span
          className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-500 ease-in-out
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
        />
      </Link>
    </li>
  );
};

const NavBarMobile = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <ul className="relative sm:hidden">
      <NavBarToggleButton
        isMenuToggled={isMenuToggled}
        setIsMenuToggled={setIsMenuToggled}
      />
      {isMenuToggled ? (
        <>
          <NavBarButtonMobile buttonLabel="Home" buttonHref="/" />
          <NavBarButtonMobile buttonLabel="Booking" buttonHref="/booking" />
          <NavBarButtonMobile buttonLabel="About" buttonHref="/about" />
        </>
      ) : (
        <></>
      )}
    </ul>
  );
};

interface INavBarToggleButton {
  isMenuToggled: boolean;
  setIsMenuToggled: Dispatch<SetStateAction<boolean>>;
}

const NavBarToggleButton = ({
  isMenuToggled,
  setIsMenuToggled,
}: INavBarToggleButton) => {
  return <button onClick={() => setIsMenuToggled(!isMenuToggled)}>show</button>;
};

const NavBarButtonMobile = ({ buttonLabel, buttonHref }: INavBarButton) => {
  const pathname = usePathname();
  const isActive = pathname === buttonHref;

  return (
    <li className="h-9">
      <Link
        href={buttonHref}
        className="group relative flex h-full items-center p-2 rounded-xs"
      >
        {buttonLabel}
        <span
          className={`absolute bottom-0 left-0 h-[2px] bg-black
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
        />
      </Link>
    </li>
  );
};

const NavBar = () => {
  return (
    <nav className="top-0 sticky w-full p-[1em] shadow-2xl">
      {/* Desktop */}
      <NavBarDesktop />
      {/* Mobile */}
      <NavBarMobile />
    </nav>
  );
};

export default NavBar;
