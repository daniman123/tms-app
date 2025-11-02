"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export interface INavBar {
  exampleProp: string;
}

interface INavBarListItem {
  itemLabel: string;
  anchorHref: string;
  customStylesListItem: string;
  customStylesAnchorTag: string;
  pathname: string;
}
export const NavBarListItem = ({
  itemLabel,
  anchorHref,
  customStylesListItem,
  customStylesAnchorTag,
  pathname,
}: INavBarListItem) => {
  const isActive = pathname === anchorHref;

  return (
    <li className={`h-[36px] first:mr-auto ${customStylesListItem}`}>
      <Link
        href={anchorHref}
        className={`h-full px-7 flex items-center text-black rounded-xs ${isActive ? "bg-[#f0f0f0]" : ""} hover:bg-[#f0f0f0] ${customStylesAnchorTag}`}
      >
        {itemLabel}
      </Link>
    </li>
  );
};

const NavBar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);

    setIsMenuToggled(false);
  }, [pathname]);

  return (
    <nav className="top-0 sticky w-full p-[1em] bg-white shadow-2xl z-10">
      {/* Mobile */}
      {isMenuToggled ? (
        <ul
          id="sidebar"
          className="max-w-[1128px] flex justify-end items-center fixed top-0 right-0 h-dvh w-full bg-white flex flex-col items-start justify-start"
        >
          <Image
            src={"/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"}
            alt=""
            height={26}
            width={26}
            onClick={() => setIsMenuToggled(false)}
            className="cursor-pointer m-8"
          />
          <NavBarListItem
            itemLabel="Home"
            anchorHref="/"
            customStylesListItem="w-full"
            customStylesAnchorTag="w-full"
            pathname={pathname}
          />
          <NavBarListItem
            itemLabel="Booking"
            anchorHref="booking"
            customStylesListItem="w-full"
            customStylesAnchorTag="w-full"
            pathname={pathname}
          />
          <NavBarListItem
            itemLabel="About"
            anchorHref="about"
            customStylesListItem="w-full"
            customStylesAnchorTag="w-full"
            pathname={pathname}
          />
          <NavBarListItem
            itemLabel="Lang"
            anchorHref="/lang"
            customStylesListItem="w-full"
            customStylesAnchorTag="w-full"
            pathname={pathname}
          />
        </ul>
      ) : (
        <></>
      )}

      {/* Desktop */}
      <ul className="w-full max-w-[1128px] flex justify-end items-center">
        <NavBarListItem
          itemLabel="TMS"
          anchorHref="/"
          customStylesListItem=""
          customStylesAnchorTag="hover:bg-white"
          pathname=""
        />
        <NavBarListItem
          itemLabel="Home"
          anchorHref="/"
          customStylesListItem="hidden sm:block"
          customStylesAnchorTag=""
          pathname={pathname}
        />
        <NavBarListItem
          itemLabel="Booking"
          anchorHref="booking"
          customStylesListItem="hidden sm:block"
          customStylesAnchorTag=""
          pathname={pathname}
        />
        <NavBarListItem
          itemLabel="About"
          anchorHref="about"
          customStylesListItem="hidden sm:block"
          customStylesAnchorTag=""
          pathname={pathname}
        />
        <NavBarListItem
          itemLabel="Lang"
          anchorHref="/lang"
          customStylesListItem="hidden sm:block"
          customStylesAnchorTag=""
          pathname={pathname}
        />
        <Image
          src={"/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"}
          alt=""
          height={26}
          width={26}
          onClick={() => setIsMenuToggled(true)}
          className="sm:hidden cursor-pointer"
        />
      </ul>
    </nav>
  );
};

export default NavBar;
