"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import AppHeader from "./../components/AppHeader/AppHeader";

const Timeline = () => {
  const pathname = usePathname();

  return (
    <div>
      <AppHeader />
    </div>
  );
};

export default Timeline;
