"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Text from "./../../components/Text/Text";
import Input from "./../../components/Input/Input";
import Button from "./../../components/Button/Button";

const ResetPassword = () => {
  const pathname = usePathname();

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <form className="w-11/12 md:w-1/2 xl:w-1/4">
        <section className="my-8">
          <h3 className="text-3xl capitalize font-bold text-secondary">
            Reset Password
          </h3>
          <Text>Enter a new password</Text>
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="password" className="text-md block my-2">
            New password
          </label>
          <Input
            type="password"
            name="password"
            placeholder="Shhhhh, it's a secret"
          />
        </section>

        <section className="my-4 mb-5 w-full">
          <Button className="w-full">Reset password</Button>
        </section>
      </form>
    </section>
  );
};

export default ResetPassword;
