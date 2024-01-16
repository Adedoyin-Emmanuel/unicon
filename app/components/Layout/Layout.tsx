"use client";
import React from "react";
import AppHeader from "./../AppHeader/AppHeader";

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ className, children }: LayoutProps) => {
  return (
    <div className="w-full h-full p-2 mx-auto overflow-x-hidden">
      <section className="w-full flex items-center justify-between">
        <h1 className="block text-primary font-bold text-2xl  capitalize">
          unicon
        </h1>
        <AppHeader />
      </section>

      {children}
    </div>
  );
};

export default Layout;
