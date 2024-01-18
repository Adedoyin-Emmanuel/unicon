"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Layout from "@/app/components/Layout/Layout";
import Text from "@/app/components/Text/Text";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import { FaUpload } from "react-icons/fa";

const EditEvent = () => {
  const pathname = usePathname();

  return (
    <Layout showInput={false}>
      <section className="w-full mx-auto">
        <form className="xl:w-2/4 mx-auto">
          <section className="my-8">
            <h3 className="text-3xl capitalize font-bold text-secondary">
              create event
            </h3>
            <Text>create a physical event</Text>
          </section>

          <section className="form-group my-4 mb-5 md:flex w-full  items-center gap-x-2 justify-between">
            <section className="w-full">
              <label
                htmlFor="eventName"
                className="text-md block my-2 capitalize"
              >
                Event name
              </label>
              <Input
                type="text"
                name="eventName"
                placeholder="Enter event name"
                className="w-full"
              />
            </section>

            <br />

            <section className="w-full">
              <label className="block my-2 capitalize">Product Image:</label>
              <section className="w-full flex items-center justify-center my-1 border-[1px] border-gray-300 focus:border-primary focus:outline-none rounded h-14 p-2">
                <section className="w-56 flex items-center">
                  <label className="capitalize w-full cursor-pointer text-accent flex items-center justify-center font-bold">
                    <input
                      type="file"
                      id="image"
                      name="image"
                      className=""
                      hidden
                      required
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                      />
                    </svg>

                    <span className="text-sm font-normal px-3 text-black">
                      tiki.png
                    </span>
                  </label>{" "}
                </section>
              </section>
            </section>
          </section>
          <section className="my-5">
            <label className="block my-2 capitalize">Event Description:</label>
            <textarea
              className="textarea border-[1px] border-gray-300 focus:outline-none rounded-md w-full textarea-md"
              name="description"
              required
              placeholder="Enter your event description"
            />
          </section>

          <section className="form-group my-5 md:flex w-full  items-center gap-x-2 justify-between">
            <section className="w-full">
              <label
                htmlFor="startDate"
                className="text-md block my-2 capitalize"
              >
                Start date and time
              </label>
              <Input type="datetime-local" name="startDate" required />
            </section>
            <br />
            <section className="w-full">
              <label htmlFor="email" className="text-md block my-2 capitalize">
                End date and time
              </label>
              <Input type="datetime-local" name="endDate" required />
            </section>
          </section>

          <section className="my-5">
            <label className="block my-2 capitalize">Product Tags:</label>
            <Input
              type="text"
              placeholder="Enter your event tags, seperate by commmas"
              name="tags"
            />
          </section>

          <section className="my-5">
            <label className="block my-2 capitalize">Event Location:</label>
            <textarea
              className="textarea border-[1px] border-gray-300 focus:outline-none rounded-md w-full textarea-md"
              name="description"
              required
              placeholder="Enter your event location"
            />
          </section>

          <section className="form-group my-5 md:flex w-full  items-center gap-x-2 justify-between">
            <section className="w-full">
              <label
                htmlFor="ticketPrice"
                className="text-md block my-2 capitalize"
              >
                Ticket Price
              </label>
              <Input
                type="number"
                min={0}
                name="ticketPrice"
                placeholder="Enter your ticket price"
                required
              />
            </section>
            <br />
            <section className="w-full">
              <label
                htmlFor="ticketPrice"
                className="text-md block my-2 capitalize"
              >
                Tickets Available
              </label>
              <Input
                type="number"
                min={0}
                name="ticketAvailable"
                placeholder="Enter your ticket price"
                required
              />
            </section>
          </section>

          <section className="my-5">
            <label className="block capitalize my-2">
              Registration closing date:
            </label>
            <Input type="date" name="endDate" required />
          </section>

          <section className="my-4 mb-5 w-full">
            <Button className="w-full">create event</Button>
          </section>
        </form>
      </section>
    </Layout>
  );
};

export default EditEvent;
