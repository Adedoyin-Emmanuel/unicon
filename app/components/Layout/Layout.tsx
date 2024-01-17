"use client";
import React from "react";
import AppHeader from "./../AppHeader/AppHeader";

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ className, children }: LayoutProps) => {
  return (
    <div className="w-full h-full my-1 mx-auto">
      <section className="w-full flex items-center justify-between md:p-3 p-0">
        <section className="w-11/12 gap-x-2 xl:w-2/6 flex items-center xl:gap-x-10 p-2">
          <img
            src="/assets/logo.svg"
            alt="Unicon logo"
            className="w-11 h-11 transform -translate-y-1"
          />
          <input
            type="text"
            id="search"
            placeholder="Search for events"
            className="w-full p-2 border rounded-md transition-all duration-300 outline-none focus:outline-none border-slate-300 focus:border-slate-400 hover:border-slate-400"
          />
        </section>

        <AppHeader />
      </section>

      <section className="w-full md:p-5 p-2 overflow-x-hidden">
        {children}
      </section>
    </div>
  );
};

export default Layout;
