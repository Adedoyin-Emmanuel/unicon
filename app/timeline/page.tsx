"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Layout from "./../components/Layout/Layout";

const Timeline = () => {
  const pathname = usePathname();

  return (
    <Layout>
      <h1 className="capitalize text-3xl text-primary font-bold">
        hello squad
      </h1>
    </Layout>
  );
};

export default Timeline;
