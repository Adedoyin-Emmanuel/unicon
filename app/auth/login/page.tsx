"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Text from "./../../components/Text/Text";
import Input from "./../../components/Input/Input";
import Button from "./../../components/Button/Button";

const Login = () => {
  const pathname = usePathname();

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <form className="w-11/12 md:w-1/2 xl:w-1/4">
        <section className="my-8">
          <h3 className="text-3xl capitalize font-bold text-secondary">
            Welcome back
          </h3>
          <Text>organize, join, network, collaborate</Text>
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="email" className="text-md block my-2">
            Email
          </label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email or username"
          />
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
          <Button>Login</Button>
        </section>

        <section>
          <Text className="inline text-sm">
            no account?
            <Link
              className="capitalize text-secondary px-1"
              href={"/auth/signup"}
            >
              create account
            </Link>
            <Link
              className="capitalize text-secondary px-1"
              href={"/auth/forgot-password"}
            >
              Forgot Password
            </Link>
          </Text>
        </section>
      </form>
    </section>
  );
};

export default Login;
