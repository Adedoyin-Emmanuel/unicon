"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Layout from "../components/Layout/Layout";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";
import Link from "next/link";
import { AppDispatch, useAppSelector } from "../store/store";
import { useGetAllEventsQuery } from "../store/features/app/app.slice";
import { saveTimeEventsInfo } from "../store/features/app/app.slice";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader/Loader";
import EventCard from "../components/EventCard/EventCard";

const Timeline = () => {
  const pathname = usePathname();
  const [totalEvents, setTotalEvents] = useState<number>(2);

  const { data, isLoading, refetch, isSuccess } = useGetAllEventsQuery({});
  const { timelineInfo } = useAppSelector((state) => state.app);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isSuccess && data) {
      const refetchData = async () => {
        const response = await refetch();
        return response;
      };
      refetchData().then((data) => {});
      dispatch(saveTimeEventsInfo(data?.data));
      console.log(data);
    }
  }, [data]);

  return (
    <Layout>
      <section className="w-full">
        <section className="upcoming-events my-8 md:p-1">
          <h3 className="font-bold text-2xl capitalize my-2 md:px-11">
            upcoming events
          </h3>

          <section
            className={`md:items-center md:justify-center w-full gap-10 ${
              totalEvents !== 0 && "flex flex-col md:grid md:place-items-center"
            } sm:grid-cols-2 xl:grid-cols-3 my-8`}
          >
            {isLoading ? (
              <Loader />
            ) : timelineInfo?.length == 0 ? (
              <Text>No events found</Text>
            ) : (
              timelineInfo?.map((event) => {
                return (
                  <EventCard
                    title={event.name}
                    price={event.ticketPrice}
                    location={event.location}
                    startTime={event.startTime}
                    endTime={event.endTime}
                    imageUrl={event.image}
                    startDate={event.startDate}
                    endDate={event.endDate}
                    _id={event._id}
                  />
                );
              })
            )}
          </section>
        </section>
      </section>

      <Link href="/events/create" title="Create a new event">
        <section className="fixed bottom-14 right-8">
          <section
            className={`w-12 h-12 flex items-center justify-center  bg-primary shadow-lg rounded-full  cursor-pointer relative transform-gpu transition-transform duration-200 scale-100 hover:scale-110 `}
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
