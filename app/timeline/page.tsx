"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Layout from "../components/Layout/Layout";
import Button from "../components/Button/Button";
import Link from "next/link";

const Timeline = () => {
  const pathname = usePathname();

  return (
    <Layout>
      <section className="w-full"></section>

      <Link href="/events/create" title="Create a new event">
        <section className="fixed bottom-14 right-8">
          <section
            className={`w-12 h-12 flex items-center justify-center  bg-secondary rounded-full shadow cursor-pointer relative transform-gpu transition-transform duration-200 scale-100 hover:scale-110 `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </section>
        </section>
      </Link>
    </Layout>
  );
};

export default Timeline;
