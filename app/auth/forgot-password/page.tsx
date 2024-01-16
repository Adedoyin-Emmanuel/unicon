"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Text from "./../../components/Text/Text";
import Input from "./../../components/Input/Input";
import Button from "./../../components/Button/Button";

const ForgotPassword = () => {
  const pathname = usePathname();

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <form className="w-11/12 md:w-1/2 xl:w-1/4">
        <section className="my-8">
          <h3 className="text-3xl capitalize font-bold text-secondary">
            Forgot Password
          </h3>
          <Text>Enter the email associated with this account</Text>
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="email" className="text-md block my-2">
            Email
          </label>
          <Input type="email" name="email" placeholder="Enter your email" />
        </section>

        <section className="my-4 mb-5 w-full">
          <Button>Submit</Button>
        </section>

        <section>
          <Text className="inline">
            no account?
            <Link
              className="capitalize text-secondary px-1"
              href={"/auth/signup"}
            >
              create account
            </Link>
          </Text>
        </section>
      </form>
    </section>
  );
};

export default ForgotPassword;
