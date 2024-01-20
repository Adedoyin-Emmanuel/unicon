"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Layout from "@/app/components/Layout/Layout";
import Button from "@/app/components/Button/Button";
import Text from "@/app/components/Text/Text";
import Link from "next/link";
import Input from "@/app/components/Input/Input";
import BackButton from "@/app/components/BackButton/BackButton";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/app/store/store";
import { saveSingleEventInfo } from "@/app/store/features/app/app.slice";
import { useGetEventByIdQuery } from "@/app/store/features/app/app.slice";
import moment from "moment";
import { useRegisterEventMutation } from "@/app/store/features/app/app.slice";

const Checkout = () => {
  const { singleEventInfo } = useAppSelector((state) => state.app);
  const router = useRouter();
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    amount: singleEventInfo?.ticketPrice,
    currency: "NGN",
    callbackUrl: "http://getunicon.vercel.app/timeline",
  });

  const [registerEvent, { isLoading }] = useRegisterEventMutation();

  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await registerEvent(formData).unwrap();

    if (response) {
      console.log(response);

      router.push(response.data.checkout_url);
    }
  };

  return (
    <Layout>
      <form
        className="w-full container"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <section className="w-full flex items-center justify-between  my-8 md:p-1">
          <section className="flex items-center md:gap-x-10 gap-x-3">
            <BackButton />
            <Text className="font-bold">{singleEventInfo?.name}</Text>
          </section>
        </section>
        <section className="my-2">
          <img
            src={singleEventInfo?.image}
            alt="Hero Event Image"
            className="object-cover w-full h-96 rounded"
          />
        </section>
        <section
          className="contact-info my-5 grid md:grid-cols-3 md:grid-flow-col items-center gap-6"
          onSubmit={handleSubmit}
        >
          <section className="first md:col-span-2">
            <h2 className="capitalize font-bold md:text-2xl text-[20px]">
              contact information
            </h2>
            <section className="my-4 mb-5">
              <label htmlFor="fullname" className="text-md block my-2">
                Fullname
              </label>
              <Input
                type="text"
                name="customerName"
                placeholder="Enter your fullname"
                value={formData.customerName}
                onChange={handleInputChange}
              />
            </section>

            <section className="my-4 mb-5">
              <label htmlFor="email" className="text-md block my-2">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
              />
            </section>
          </section>
          <section className="second">
            <h2 className="capitalize font-bold text-[20px]">order summary</h2>

            <div className="flex items-center justify-between my-4">
              <div>
                <p>Tickets</p>
              </div>
              <p>₦{singleEventInfo?.ticketPrice}</p>
            </div>

            <div className="flex items-center justify-between my-4">
              <div>
                <p className="">Total</p>
              </div>
              <p className="font-bold text-primary">
                ₦ {singleEventInfo?.ticketPrice}
              </p>
            </div>

            <Button className="w-full">place order</Button>
          </section>
        </section>
        <br />
      </form>
    </Layout>
  );
};

export default Checkout;
