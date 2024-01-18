"use client";
import React from "react";
import AppHeader from "./../AppHeader/AppHeader";

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
  showInput?: boolean;
}

const Layout = ({ className, children, showInput = true }: LayoutProps) => {
  return (
    <div className="w-full h-full container mx-auto">
      <section className="mx-auto w-full flex my-1 items-center justify-between md:p-3 p-0">
        <section className="w-11/12 gap-x-2 xl:w-2/6 flex items-center xl:gap-x-10 p-2">
          <img
            src="/assets/logo.svg"
            alt="Unicon logo"
            className="w-10 h-10 transform -translate-y-1 cursor-pointer"
          />
          {showInput && (
            <input
              type="text"
              id="search"
              placeholder="Search for events"
              className="w-full p-2 border rounded-md transition-all duration-300 outline-none focus:outline-none border-slate-300 focus:border-slate-400 hover:border-slate-400"
            />
          )}
        </section>

        <AppHeader />
      </section>

      <section className="w-full p-2 overflow-x-hidden">{children}</section>
    </div>
  );
};

export default Layout;
