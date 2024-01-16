"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Text from "./../../components/Text/Text";
import Input from "./../../components/Input/Input";
import Button from "./../../components/Button/Button";

const Signup = () => {
  const pathname = usePathname();

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <form className="w-11/12 md:w-1/2 xl:w-1/4">
        <section className="my-8">
          <h3 className="text-3xl capitalize font-bold text-secondary">
            Create An Account
          </h3>
          <Text>organize, join, network, collaborate</Text>
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="username" className="text-md block my-2">
            Username
          </label>
          <Input
            type="text"
            name="username"
            placeholder="Enter your username eg emmysoft"
          />
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="email" className="text-md block my-2">
            Email
          </label>
          <Input type="email" name="email" placeholder="Enter your email" />
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="email" className="text-md block my-2">
            Password
          </label>
          <Input
            type="password"
            name="password"
            placeholder="Shhhhh, it's a secret"
          />
        </section>

        <section className="my-4 mb-5 w-full">
          <Button>Sign up</Button>
        </section>

        <section>
          <Text className="inline">
            have an account?
            <Link
              className="capitalize text-secondary px-1"
              href={"/auth/login"}
            >
              login
            </Link>
          </Text>
        </section>
      </form>
    </section>
  );
};

export default Signup;
