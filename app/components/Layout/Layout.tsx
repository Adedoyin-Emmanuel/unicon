"use client";
import React from "react";
import AppHeader from "./../AppHeader/AppHeader";

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ className, children }: LayoutProps) => {
  return (
    <div className="w-full h-full my-3 mx-auto overflow-x-hidden">
      <section className="w-full flex items-center justify-between">
        <section className="w-11/12 gap-x-2 xl:w-2/6 flex items-center xl:gap-x-10 p-2">
          <h1 className="lg:block hidden text-primary font-bold text-2xl  capitalize">
            Unicon
          </h1>

          <input
            type="text"
            id="search"
            placeholder="Search for events"
            className="w-full p-2 border rounded-md transition-all duration-300 outline-none focus:outline-none border-slate-300 focus:border-slate-400 hover:border-slate-400"
          />
        </section>

        <AppHeader />
      </section>

      <section className="w-full p-2">{children}</section>
    </div>
  );
};

export default Layout;
