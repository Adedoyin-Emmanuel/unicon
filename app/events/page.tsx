"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Layout from "@/app/components/Layout/Layout";
import Text from "@/app/components/Text/Text";

const EventDashboard = () => {
  const pathname = usePathname();

  return (
    <Layout>
      <section className="w-full">
        <section className="header my-3">
          <h2 className="font-bold capitalize text-2xl">event management</h2>
          <p>
            Effortlessly monitor your created and registered events all in one
            place
          </p>
        </section>

        <section className="analytics mx-auto w-full flex md:flex-row flex-col md:items-center md:justify-between gap-x-5 my-5 md:p-0 p-1">
          <section className="w-full cursor-pointer created-events bg-primary/15 rounded-md border-[1px] border-primary p-3 flex flex-col items-center justify-center md:w-72 h-24 my-3">
            <h1 className="text-4xl font-extrabold">0</h1>
            <h2 className="font-medium text-[15px] capitalize py-1">
              created events
            </h2>
          </section>

          <section className="w-full cursor-pointer registered-events bg-primary/15 rounded-md border-[1px] border-primary p-3 flex flex-col items-center justify-center md:w-72 h-24 my-3">
            <h1 className="text-4xl font-extrabold">0</h1>
            <h2 className="font-medium text-[15px] capitalize py-1">
              registered events
            </h2>
          </section>

          <section className="w-full cursor-pointer created-events bg-primary rounded-md border-[1px] border-primary p-3 flex flex-col items-center justify-center md:w-72 h- my-3">
            <h1 className="text-4xl font-extrabold my-3">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block"
              >
                <path
                  d="M21.896 13.944H13.832V22.008H8.6V13.944H0.584V8.712H8.6V0.647999H13.832V8.712H21.896V13.944Z"
                  fill="white"
                />
              </svg>
            </h1>

            <h2 className="font-medium text-[15px] capitalize py-1 text-white ">
              create an event
            </h2>
          </section>
        </section>

        <section className="my-events">
          <div role="tablist" className="tabs tabs-lifted w-full">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab font-bold"
              aria-label="Created Events"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-x-base-100 rounded-box p-1 py-3 w-full"
            >
              <section className="events w-full flex flex-col  items-center justify-center my-4">
                <Text>No events available</Text>
              </section>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab font-medium"
              aria-label="Registered Events"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-x-base-100 rounded-box p-1 py-3 w-full"
            >
              <section className="events w-full flex flex-col  items-center justify-center my-4">
                <Text>No events available</Text>
              </section>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default EventDashboard;
