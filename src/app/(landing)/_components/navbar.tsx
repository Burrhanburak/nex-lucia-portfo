"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/lib/types";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`Navbar_container__x_wnu ${isMenuOpen ? "Navbar_menuOpened___q5q3" : ""}`}
      id="navbar"
    >
      <div
        className="Navbar_navbar__XlgWY"
        style={{ height: isMenuOpen ? "70vh" : "var(--navbar-height)", overflow: "hidden" }}
      >
        <div className="Navbar_logoContainer__enocR">
          <Link href="/">
            <Image
              className="relative"
              src="/log.png"
              alt="Next.js Logo"
              width={18}
              height={37}
              priority
            />
          </Link>
          <div className="Navbar_navToggle__skv0c" onClick={toggleMenu}>
            <div className="Navbar_navToggleLine__wBYSL"></div>
            <div className="Navbar_navToggleLine__wBYSL"></div>
            <div className="Navbar_navToggleLine__wBYSL"></div>
          </div>
        </div>
        <div className="Navbar_navigation__sNAXS">
          {routes.slice(0, -1).map(({ name, href }) => (
            <Link key={name} className="NavLink_navLink__REP72" href={href}>
              {name}
            </Link>
          ))}
        </div>
        <div className="Navbar_secondary__UAPPh Navbar_loading__Qz_aU">
          <div className="Navbar_signedOutWide__P7f_w">
            <Link
              className="NavLink_navLink__REP72"
              href={routes.find((route) => route.name === "Login")?.href || ""}
            >
              Log in
            </Link>
            <Link
              className="Button_button__JJiqJ Button_light__KdYEB Navbar_downloadButton__yQ3j6"
              href="#"
              aria-disabled="false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                <path
                  fill="currentColor"
                  d="M12.665 15.358c-.905.844-1.893.711-2.843.311-1.006-.409-1.93-.427-2.991 0-1.33.551-2.03.391-2.825-.31C-.498 10.886.166 4.078 5.28 3.83c1.246.062 2.114.657 2.843.71 1.09-.213 2.133-.826 3.296-.746 1.393.107 2.446.64 3.138 1.6-2.88 1.662-2.197 5.315.443 6.337-.526 1.333-1.21 2.657-2.345 3.635zM8.03 3.778C7.892 1.794 9.563.16 11.483 0c.268 2.293-2.16 4-3.452 3.777"
                />
              </svg>
              Download
            </Link>
          </div>
          <div className="Navbar_signedOutMedium__sdlYf">
            <Link
              href="/"
              className="Button_button__JJiqJ Button_light__KdYEB"
              aria-disabled="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
