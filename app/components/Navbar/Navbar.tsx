"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";

const Navbar = () => {
  const currentPath = usePathname();
  const hoverClass = "hover:text-primary duration-100 transition-all ease-in";
  const currentPathClass = "text-secondary font-bold";

  const [navToggled, setNavToggled] = useState<boolean>(false);
  const mobileLinksRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navToggled) {
      mobileLinksRef.current!.classList.remove("hidden");
      mobileLinksRef.current!.classList.add("fadeIn");
    } else {
      mobileLinksRef.current!.classList.add("fadeOut");
      mobileLinksRef.current!.classList.add("hidden");
    }
  }, [navToggled]);

  const handleHamburgerClick = () => {
    setNavToggled(!navToggled);
  };
  return (
    <section className="container mx-auto">
      <div className="w-full mx-auto p-4 flex items-center md:my-2 gap-x-12 justify-between">
        <section className="brand-name flex items-center gap-x-10">
          <Link
            href={"/"}
            className="block text-primary font-bold md:text-3xl text-2xl capitalize"
          >
            <img src="/assets/logo.svg" alt="Unicon logo" className="transform -translate-y-1 md:w-12 md:h-12 w-10 h-10" />
          </Link>
          <section className="md:flex hidden gap-x-5">
            <ul className="flex flex-row">
              <li className="mx-2">
                <Link
                  href="/"
                  className={`capitalize ${
                    currentPath.includes("/") && currentPathClass
                  } ${hoverClass}`}
                >
                  Home
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  href="/trending-events"
                  className={`capitalize ${
                    currentPath.includes("trending-events") && currentPathClass
                  } ${hoverClass}`}
                >
                  Trending events
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  href="/join-event"
                  className={`capitalize ${
                    currentPath.includes("/join-event") && currentPathClass
                  } ${hoverClass}`}
                >
                  Join an event
                </Link>
              </li>
            </ul>
          </section>
        </section>

        <section className="md:flex hidden items-center w-auto gap-x-3">
          <Link className="block" href={"/auth/login"}>
            <Button className="w-28">Login</Button>
          </Link>
          <Link className="block" href={"/auth/signup"}>
            <Button border className="w-28">
              Signup
            </Button>
          </Link>
        </section>

        <div
          className={`md:hidden transform transition-transform duration-100 ease-in-out ${
            navToggled ? "-rotate-90" : "rotate-0"
          }`}
          onClick={handleHamburgerClick}
        >
          <svg
            stroke="currentColor"
            fill={navToggled ? "#E51E56" : "#000"}
            stroke-width="0"
            viewBox="0 0 24 24"
            height="35"
            width="35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
          </svg>
        </div>
      </div>

      <section
        className="nav-items hidden transform transition-transform duration-100"
        ref={mobileLinksRef}
      >
        <ul className="flex flex-col items-center gap-y-4">
          <li className="mx-2">
            <Link
              href="/auth/login"
              className={`capitalize ${
                currentPath.includes("/auth/login") && currentPathClass
              } ${hoverClass}`}
            >
              Login
            </Link>
          </li>

          <li className="mx-2">
            <Link
              href="/auth/signup"
              className={`capitalize ${
                currentPath.includes("/auth/signup") && currentPathClass
              } ${hoverClass}`}
            >
              Signup
            </Link>
          </li>

          <li className="mx-2">
            <Link
              href="/"
              className={`capitalize ${
                currentPath.includes("/") && currentPathClass
              } ${hoverClass}`}
            >
              Home
            </Link>
          </li>
          <li className="mx-2">
            <Link
              href="/trending-events"
              className={`capitalize ${
                currentPath.includes("trending-events") && currentPathClass
              } ${hoverClass}`}
            >
              Trending events
            </Link>
          </li>
          <li className="mx-2">
            <Link
              href="/join-event"
              className={`capitalize ${
                currentPath.includes("/join-event") && currentPathClass
              } ${hoverClass}`}
            >
              Join an event
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Navbar;
