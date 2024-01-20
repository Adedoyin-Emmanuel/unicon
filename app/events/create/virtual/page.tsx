"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Layout from "@/app/components/Layout/Layout";
import Text from "@/app/components/Text/Text";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/app/store/store";
import { useCreateEventMutation } from "@/app/store/features/app/app.slice";
import Loader from "@/app/components/Loader/Loader";
import toast from "react-hot-toast";
import chance from "chance";
import { uploadFly } from "@/app/helpers/uploadFly.config";

const VirtualEvent = () => {
  const pathname = usePathname();
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const { userAuthInfo } = useAppSelector((state) => state.auth);
  const [createEvent, { isLoading }] = useCreateEventMutation();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [uploadingImage, setUploadingImage] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    eventType: "virtual",
    description: "",
    location: "",
    ticketPrice: 0,
    availableTickets: 0,
    registrationClosingDate: "",
    startDateTime: "",
    endDateTime: "",
    tags: "",
  });

  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      // Check if the file type is an image
      if (file.type.startsWith("image/")) {
        setSelectedImage(file);
      } else {
        toast.error("Please select a valid image file");
      }
    } else {
      toast.error("Please select an image");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const { tags, startDateTime, endDateTime, ...rest } = formData;
    const startDateTimeStr = new Date(startDateTime);
    const endDateTimeStr = new Date(endDateTime);

    const startDate = startDateTimeStr.toISOString().split("T")[0];
    const startTime = startDateTimeStr.toTimeString().split(" ")[0];

    const endDate = endDateTimeStr.toISOString().split("T")[0];
    const endTime = endDateTimeStr.toTimeString().split(" ")[0];

    const tagsArray = tags.split(",");

    const newFormData = {
      ...rest,
      startDate,
      startTime,
      endDate,
      endTime,
      tags: tagsArray,
      creator: userAuthInfo?._id,
    };

    console.log(newFormData);

    /**
     * @summary the flyName is the name of the file to be uploaded to uploadfly
     */
    try {
      const chanceInstance = new chance();
      const flyName = chanceInstance.string({
        length: 20,
        casing: "lower",
        alpha: true,
        numeric: true,
      });

      setUploadingImage(true);
      const uploadFlyResponse = await uploadFly.upload(selectedImage as File, {
        filename: flyName,
      });

      if (uploadFlyResponse?.success) {
        const flyUrl = uploadFlyResponse?.data?.url;
        setUploadingImage(false);

        // This response is from my own API so no need to add uniconResponse 😀
        const dataToSubmit = {
          ...newFormData,
          image: flyUrl,
        };

        console.log(dataToSubmit);

        const uniconResponse = await createEvent(dataToSubmit).unwrap();

        if (uniconResponse) {
          toast.success(uniconResponse.message);
          router.push("/timeline");
        }
      }
    } catch (error: any) {
      console.log(error);
      //  toast.error(error?.data?.message || error.error || error?.data);
    }
  };

  return (
    <Layout showInput={false}>
      <section className="w-full mx-auto">
        {isLoading || uploadingImage ? (
          <Loader />
        ) : (
          <form className="xl:w-2/4 mx-auto" onSubmit={(e) => handleSubmit(e)}>
            <section className="my-8">
              <h3 className="text-3xl capitalize font-bold text-secondary">
                create event
              </h3>
              <Text>create a virtual event</Text>
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
                  name="name"
                  placeholder="Enter event name"
                  className="w-full"
                  onChange={handleInputChange}
                  value={formData.name}
                />
              </section>

              <br />

              <section className="w-full">
                <label className="block my-2 capitalize">Event Image:</label>
                <section className="w-full flex items-center justify-center my-1 border-[1px] border-gray-300 focus:border-primary focus:outline-none rounded h-14 p-2">
                  <section className="w-56 flex items-center">
                    <label className="capitalize w-full cursor-pointer text-accent flex items-center justify-center font-bold">
                      <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
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
                        {selectedImage && selectedImage.name}
                      </span>
                    </label>{" "}
                  </section>
                </section>
              </section>
            </section>
            <section className="my-5">
              <label className="block my-2 capitalize">
                Event Description:
              </label>
              <textarea
                className="textarea border-[1px] border-gray-300 focus:outline-none rounded-md w-full textarea-md"
                name="description"
                required
                placeholder="Enter your event description"
                onChange={handleInputChange}
                value={formData.description}
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
                <Input
                  type="datetime-local"
                  name="startDateTime"
                  required
                  onChange={handleInputChange}
                  value={formData.startDateTime}
                />
              </section>
              <br />
              <section className="w-full">
                <label
                  htmlFor="email"
                  className="text-md block my-2 capitalize"
                >
                  End date and time
                </label>
                <Input
                  type="datetime-local"
                  name="endDateTime"
                  required
                  onChange={handleInputChange}
                  value={formData.endDateTime}
                />
              </section>
            </section>

            <section className="my-5">
              <label className="block my-2 capitalize">Event Tags:</label>
              <Input
                type="text"
                placeholder="Enter your event tags, seperate by commmas"
                name="tags"
                onChange={handleInputChange}
                value={formData.tags}
              />
            </section>

            <section className="my-5">
              <label className="block my-2 capitalize">Meeting link:</label>
              <textarea
                className="textarea border-[1px] border-gray-300 focus:outline-none rounded-md w-full textarea-md"
                name="location"
                required
                placeholder="Enter your event location"
                onChange={handleInputChange}
                value={formData.location}
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
                  value={formData.ticketPrice}
                  onChange={handleInputChange}
                />
              </section>
              <br />
              <section className="w-full">
                <label
                  htmlFor="ticketAvailable"
                  className="text-md block my-2 capitalize"
                >
                  Tickets Available
                </label>
                <Input
                  type="number"
                  min={0}
                  name="availableTickets"
                  placeholder="Enter your ticket price"
                  onChange={handleInputChange}
                  required
                  value={formData.availableTickets}
                />
              </section>
            </section>

            <section className="my-5">
              <label className="block capitalize my-2">
                Registration closing date:
              </label>
              <Input
                type="date"
                name="registrationClosingDate"
                required
                onChange={handleInputChange}
                value={formData.registrationClosingDate}
              />
            </section>

            <section className="my-4 mb-5 w-full">
              <Button className="w-full">create event</Button>
            </section>
          </form>
        )}
      </section>
    </Layout>
  );
};

export default VirtualEvent;
