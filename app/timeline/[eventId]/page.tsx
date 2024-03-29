"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import Link from "next/link";
import BackButton from "../../components/BackButton/BackButton";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/app/store/store";
import { saveSingleEventInfo } from "@/app/store/features/app/app.slice";
import { useGetEventByIdQuery } from "@/app/store/features/app/app.slice";
import moment from "moment";

const EventId = ({ params }: { params: { eventId: string } }) => {
  const dispatch = useDispatch();
  const { singleEventInfo } = useAppSelector((state) => state.app);
  const { data, isLoading, refetch, isSuccess } = useGetEventByIdQuery(
    params.eventId
  );

  useEffect(() => {
    if (isSuccess && data) {
      const refetchData = async () => {
        const response = await refetch();
        return response;
      };
      refetchData().then((data) => {});
      dispatch(saveSingleEventInfo(data?.data));
      console.log(data);
    }
  }, [data]);

  const startDateCustom: moment.Moment = moment(singleEventInfo?.startDate);
  const currentDate: moment.Moment = moment();
  const duration: moment.Duration = moment.duration(
    currentDate.diff(startDateCustom)
  );
  const weeks: number = Math.abs(Math.round(duration.asWeeks()));
  const days: number = Math.abs(Math.round(duration.asDays()));

  const startDate: moment.Moment = moment(singleEventInfo?.startDate);
  const endDate: moment.Moment = moment(singleEventInfo?.endDate);

  const formattedStartDate: string = startDate.format("Do");
  const formattedEndDate: string = endDate.format("Do MMMM, YYYY");

  const formattedDateRange: string = `${formattedStartDate} - ${formattedEndDate}`;

  console.log("Formatted Date Range:", formattedDateRange);

  return (
    <Layout>
      <section className="w-full container">
        <section className="w-full flex items-center justify-between  my-8 md:p-1">
          <section className="flex items-center md:gap-x-10 gap-x-3">
            <BackButton />
            <Text className="font-bold">{singleEventInfo?.name}</Text>
          </section>

          <Link href={`/timeline/${params.eventId}/checkout`}>
            <Button>register</Button>
          </Link>
        </section>
        <section className="my-2">
          <img
            src={singleEventInfo?.image}
            alt="Hero Event Image"
            className="object-cover w-full h-96 rounded"
          />
        </section>
        <section className="event-description my-4 grid md:grid-cols-3 md:grid-flow-col items-center gap-6">
          <section className="first md:col-span-2">
            <h2 className="capitalize font-bold md:text-2xl text-[20px]">
              event description
            </h2>
            <p className="py-3 ">{singleEventInfo?.description}</p>
          </section>

          <section className="w-full second flex flex-col ">
            <section className="flex items-center justify-between p-1">
              <Text className="font-bold">{formattedDateRange}</Text>
              <Text className="font-bold">₦{singleEventInfo?.ticketPrice}</Text>
            </section>

            <section className="location flex items-center gap-x-2 my-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <Text noCapitalize>
                {singleEventInfo?.eventType == "physical" ? (
                  singleEventInfo?.location
                ) : (
                  <Link href={`${singleEventInfo?.location}`}>
                    {singleEventInfo?.location.toString()}
                  </Link>
                )}
              </Text>
            </section>

            <section className="time flex items-center gap-x-2 my-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M9.99999 3.01758C9.58578 3.01758 9.24999 2.68179 9.24999 2.26758C9.24999 1.85336 9.58578 1.51758 9.99999 1.51758H13.5355C13.9497 1.51758 14.2855 1.85336 14.2855 2.26758C14.2855 2.68179 13.9497 3.01758 13.5355 3.01758H9.99999Z"
                  fill="black"
                />
                <path
                  d="M6.53033 3.46948C6.82322 3.76238 6.82322 4.23725 6.53033 4.53014L4.03033 7.03014C3.73744 7.32304 3.26256 7.32304 2.96967 7.03014C2.67678 6.73725 2.67678 6.26238 2.96967 5.96948L5.46967 3.46948C5.76256 3.17659 6.23744 3.17659 6.53033 3.46948Z"
                  fill="black"
                />
                <path
                  d="M12 5.74981C7.99594 5.74981 4.75 8.99575 4.75 12.9998C4.75 17.0039 7.99594 20.2498 12 20.2498C16.0041 20.2498 19.25 17.0039 19.25 12.9998C19.25 12.5856 19.5858 12.2498 20 12.2498C20.4142 12.2498 20.75 12.5856 20.75 12.9998C20.75 17.8323 16.8325 21.7498 12 21.7498C7.16751 21.7498 3.25 17.8323 3.25 12.9998C3.25 8.16732 7.16751 4.24981 12 4.24981C12.4142 4.24981 12.75 4.5856 12.75 4.99981C12.75 5.41403 12.4142 5.74981 12 5.74981Z"
                  fill="black"
                />
                <path
                  d="M17.1882 8.36407C17.4204 8.0655 17.394 7.64074 17.1265 7.37329C16.8591 7.10583 16.4343 7.07938 16.1357 7.3116L12.9658 9.77708L10.8944 11.2567C10.4519 11.5727 10.1893 12.083 10.1893 12.6268C10.1893 13.5566 10.9432 14.3105 11.873 14.3105C12.4168 14.3105 12.9271 14.0479 13.2431 13.6054L14.7227 11.534L17.1882 8.36407Z"
                  fill="black"
                />
                <path
                  d="M9.99999 3.01758C9.58578 3.01758 9.24999 2.68179 9.24999 2.26758C9.24999 1.85336 9.58578 1.51758 9.99999 1.51758H13.5355C13.9497 1.51758 14.2855 1.85336 14.2855 2.26758C14.2855 2.68179 13.9497 3.01758 13.5355 3.01758H9.99999Z"
                  fill="black"
                />
                <path
                  d="M6.53033 3.46948C6.82322 3.76238 6.82322 4.23725 6.53033 4.53014L4.03033 7.03014C3.73744 7.32304 3.26256 7.32304 2.96967 7.03014C2.67678 6.73725 2.67678 6.26238 2.96967 5.96948L5.46967 3.46948C5.76256 3.17659 6.23744 3.17659 6.53033 3.46948Z"
                  fill="black"
                />
                <path
                  d="M12 5.74981C7.99594 5.74981 4.75 8.99575 4.75 12.9998C4.75 17.0039 7.99594 20.2498 12 20.2498C16.0041 20.2498 19.25 17.0039 19.25 12.9998C19.25 12.5856 19.5858 12.2498 20 12.2498C20.4142 12.2498 20.75 12.5856 20.75 12.9998C20.75 17.8323 16.8325 21.7498 12 21.7498C7.16751 21.7498 3.25 17.8323 3.25 12.9998C3.25 8.16732 7.16751 4.24981 12 4.24981C12.4142 4.24981 12.75 4.5856 12.75 4.99981C12.75 5.41403 12.4142 5.74981 12 5.74981Z"
                  fill="black"
                />
                <path
                  d="M17.1882 8.36407C17.4204 8.0655 17.394 7.64074 17.1265 7.37329C16.8591 7.10583 16.4343 7.07938 16.1357 7.3116L12.9658 9.77708L10.8944 11.2567C10.4519 11.5727 10.1893 12.083 10.1893 12.6268C10.1893 13.5566 10.9432 14.3105 11.873 14.3105C12.4168 14.3105 12.9271 14.0479 13.2431 13.6054L14.7227 11.534L17.1882 8.36407Z"
                  fill="black"
                />
              </svg>

              <Text>
                {singleEventInfo?.startTime} - {singleEventInfo?.endTime}
              </Text>
            </section>
            <section className="time flex items-center gap-x-2 my-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
                  fill="#292D32"
                />
                <path
                  d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
                  fill="#292D32"
                />
                <path
                  d="M8.5 14.5003C8.37 14.5003 8.24 14.4703 8.12 14.4203C7.99 14.3703 7.89 14.3003 7.79 14.2103C7.61 14.0203 7.5 13.7703 7.5 13.5003C7.5 13.3703 7.53 13.2403 7.58 13.1203C7.63 13.0003 7.7 12.8903 7.79 12.7903C7.89 12.7003 7.99 12.6303 8.12 12.5803C8.48 12.4303 8.93 12.5103 9.21 12.7903C9.39 12.9803 9.5 13.2403 9.5 13.5003C9.5 13.5603 9.49 13.6303 9.48 13.7003C9.47 13.7603 9.45 13.8203 9.42 13.8803C9.4 13.9403 9.37 14.0003 9.33 14.0603C9.3 14.1103 9.25 14.1603 9.21 14.2103C9.02 14.3903 8.76 14.5003 8.5 14.5003Z"
                  fill="#292D32"
                />
                <path
                  d="M12 14.4999C11.87 14.4999 11.74 14.4699 11.62 14.4199C11.49 14.3699 11.39 14.2999 11.29 14.2099C11.11 14.0199 11 13.7699 11 13.4999C11 13.3699 11.03 13.2399 11.08 13.1199C11.13 12.9999 11.2 12.8899 11.29 12.7899C11.39 12.6999 11.49 12.6299 11.62 12.5799C11.98 12.4199 12.43 12.5099 12.71 12.7899C12.89 12.9799 13 13.2399 13 13.4999C13 13.5599 12.99 13.6299 12.98 13.6999C12.97 13.7599 12.95 13.8199 12.92 13.8799C12.9 13.9399 12.87 13.9999 12.83 14.0599C12.8 14.1099 12.75 14.1599 12.71 14.2099C12.52 14.3899 12.26 14.4999 12 14.4999Z"
                  fill="#292D32"
                />
                <path
                  d="M15.5 14.4999C15.37 14.4999 15.24 14.4699 15.12 14.4199C14.99 14.3699 14.89 14.2999 14.79 14.2099C14.75 14.1599 14.71 14.1099 14.67 14.0599C14.63 13.9999 14.6 13.9399 14.58 13.8799C14.55 13.8199 14.53 13.7599 14.52 13.6999C14.51 13.6299 14.5 13.5599 14.5 13.4999C14.5 13.2399 14.61 12.9799 14.79 12.7899C14.89 12.6999 14.99 12.6299 15.12 12.5799C15.49 12.4199 15.93 12.5099 16.21 12.7899C16.39 12.9799 16.5 13.2399 16.5 13.4999C16.5 13.5599 16.49 13.6299 16.48 13.6999C16.47 13.7599 16.45 13.8199 16.42 13.8799C16.4 13.9399 16.37 13.9999 16.33 14.0599C16.3 14.1099 16.25 14.1599 16.21 14.2099C16.02 14.3899 15.76 14.4999 15.5 14.4999Z"
                  fill="#292D32"
                />
                <path
                  d="M8.5 18.0002C8.37 18.0002 8.24 17.9702 8.12 17.9202C8 17.8702 7.89 17.8002 7.79 17.7102C7.61 17.5202 7.5 17.2602 7.5 17.0002C7.5 16.8702 7.53 16.7402 7.58 16.6202C7.63 16.4902 7.7 16.3802 7.79 16.2902C8.16 15.9202 8.84 15.9202 9.21 16.2902C9.39 16.4802 9.5 16.7402 9.5 17.0002C9.5 17.2602 9.39 17.5202 9.21 17.7102C9.02 17.8902 8.76 18.0002 8.5 18.0002Z"
                  fill="#292D32"
                />
                <path
                  d="M12 18.0002C11.74 18.0002 11.48 17.8902 11.29 17.7102C11.11 17.5202 11 17.2602 11 17.0002C11 16.8702 11.03 16.7402 11.08 16.6202C11.13 16.4902 11.2 16.3802 11.29 16.2902C11.66 15.9202 12.34 15.9202 12.71 16.2902C12.8 16.3802 12.87 16.4902 12.92 16.6202C12.97 16.7402 13 16.8702 13 17.0002C13 17.2602 12.89 17.5202 12.71 17.7102C12.52 17.8902 12.26 18.0002 12 18.0002Z"
                  fill="#292D32"
                />
                <path
                  d="M15.5 17.9999C15.24 17.9999 14.98 17.8899 14.79 17.7099C14.7 17.6199 14.63 17.5099 14.58 17.3799C14.53 17.2599 14.5 17.1299 14.5 16.9999C14.5 16.8699 14.53 16.7399 14.58 16.6199C14.63 16.4899 14.7 16.3799 14.79 16.2899C15.02 16.0599 15.37 15.9499 15.69 16.0199C15.76 16.0299 15.82 16.0499 15.88 16.0799C15.94 16.0999 16 16.1299 16.06 16.1699C16.11 16.1999 16.16 16.2499 16.21 16.2899C16.39 16.4799 16.5 16.7399 16.5 16.9999C16.5 17.2599 16.39 17.5199 16.21 17.7099C16.02 17.8899 15.76 17.9999 15.5 17.9999Z"
                  fill="#292D32"
                />
                <path
                  d="M20.5 9.83984H3.5C3.09 9.83984 2.75 9.49984 2.75 9.08984C2.75 8.67984 3.09 8.33984 3.5 8.33984H20.5C20.91 8.33984 21.25 8.67984 21.25 9.08984C21.25 9.49984 20.91 9.83984 20.5 9.83984Z"
                  fill="#292D32"
                />
                <path
                  d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z"
                  fill="#292D32"
                />
              </svg>

              <Text className="font-bold">
                in {days} {days > 1 ? "Days" : "Day"}
              </Text>
            </section>
          </section>
        </section>
        <br />

        <section className="">
          <h2 className="capitalize font-bold text-[20px]">event tags</h2>
          <section className="tags w-full flex gap-3 my-1 flex-wrap">
            {singleEventInfo?.tags?.map((tag, index) => (
              <section
                key={index}
                className="border-[1px] border-slate-300 rounded p-2 capitalize cursor-pointer"
              >
                {tag}
              </section>
            ))}
          </section>
        </section>
      </section>
    </Layout>
  );
};

export default EventId;
