"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Layout from "@/app/components/Layout/Layout";
import Button from "@/app/components/Button/Button";
import Text from "@/app/components/Text/Text";
import Link from "next/link";
import Input from "@/app/components/Input/Input";
import BackButton from "@/app/components/BackButton/BackButton";

const Checkout = () => {
  return (
    <Layout>
      <section className="w-full container">
        <section className="w-full flex items-center justify-between  my-8 md:p-1">
          <section className="flex items-center md:gap-x-10 gap-x-3">
            <BackButton />
            <Text className="font-bold">women in tech technovation</Text>
          </section>
        </section>
        <section className="my-2">
          <img
            src="/assets/whitesur.jpg"
            alt="Hero Event Image"
            className="object-cover w-full h-96 rounded"
          />
        </section>
        <section className="contact-info my-5 grid md:grid-cols-3 md:grid-flow-col items-center gap-6">
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
                name="fullname"
                placeholder="Enter your fullname"
              />
            </section>

            <section className="my-4 mb-5">
              <label htmlFor="email" className="text-md block my-2">
                Email
              </label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
            </section>
          </section>
          <section className="second">
            <h2 className="capitalize font-bold text-[20px]">order summary</h2>

            <div className="flex items-center justify-between my-4">
              <div>
                <p>Tickets</p>
                <div className="flex items-center gap-x-2 my-1">
                  <Button
                    border
                    className="text-black mr-2 w-10 h-10 text-2xl flex items-center justify-center"
                  >
                    -
                  </Button>
                  <span className="text-[20px]">2</span>
                  <Button
                    border
                    className="text-black text-2xl ml-2 w-10 h-10 flex items-center justify-center "
                  >
                    +
                  </Button>
                </div>
              </div>
              <p>$30.00</p>
            </div>

            <div className="flex items-center justify-between my-4">
              <div>
                <p>Sub-total</p>
              </div>
              <p>$60.00</p>
            </div>

            <div className="flex items-center justify-between my-4">
              <div>
                <p className="">Total</p>
              </div>
              <p className="font-bold text-primary">$60.00</p>
            </div>

            <Button className="w-full">place order</Button>
          </section>
        </section>
        <br />
      </section>
    </Layout>
  );
};

export default Checkout;
