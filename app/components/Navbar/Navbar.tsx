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
      <div className="bg-white w-full mx-auto p-4 flex items-center md:my-2 gap-x-12 justify-between">
        <section className="brand-name flex items-center gap-x-10">
          <Link
            href={"/"}
            className="block text-primary font-bold md:text-3xl text-2xl capitalize"
          >
            unicon
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
          <Button className="w-32">Login</Button>
          <Button border className="w-32">
            Signup
          </Button>
        </section>

        <div
          className={`md:hidden transform transition-transform duration-100 ease-in-out ${
            navToggled ? "-rotate-90" : "rotate-0"
          }`}
          onClick={handleHamburgerClick}
        >
          <svg
            width="24"
            height="22"
            viewBox="0 0 18 16"
            fill={navToggled ? "#E51E56" : "#000"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.25 8C0.25 7.58579 0.585786 7.25 1 7.25L16.9996 7.25C17.4138 7.25 17.7496 7.58579 17.7496 8C17.7496 8.41421 17.4138 8.75 16.9996 8.75H1C0.585786 8.75 0.25 8.41421 0.25 8ZM3.53307 15C3.53307 14.5858 3.86886 14.25 4.28307 14.25L17 14.25C17.4142 14.25 17.75 14.5858 17.75 15C17.75 15.4142 17.4142 15.75 17 15.75L4.28307 15.75C3.86886 15.75 3.53307 15.4142 3.53307 15ZM9.22186 1C9.22186 0.585787 9.55765 0.25 9.97186 0.25L17 0.25C17.4142 0.25 17.75 0.585787 17.75 1C17.75 1.41421 17.4142 1.75 17 1.75L9.97186 1.75C9.55765 1.75 9.22186 1.41421 9.22186 1Z"
            />
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
