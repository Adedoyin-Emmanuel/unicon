"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Text from "./../../components/Text/Text";
import Input from "./../../components/Input/Input";
import Button from "./../../components/Button/Button";
import toast from "react-hot-toast";
import { useCreateUserMutation } from "@/app/store/features/app/app.slice";
import Loader from "@/app/components/Loader/Loader";

const Signup = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [createUser, { isLoading: isCreateUserLoading }] =
    useCreateUserMutation();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();

    try {
      const response = await createUser(formData).unwrap();
      if (response) {
        toast.success(response.message);
        router.push("/auth/login");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || error.error || error?.data);
    }
  };
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      {isCreateUserLoading && <Loader />}
      <form
        className="w-11/12 md:w-1/2 xl:w-1/4"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
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
            onChange={handleInputChange}
            value={formData.username}
          />
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="email" className="text-md block my-2">
            Email
          </label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
            value={formData.email}
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
            value={formData.password}
            onChange={handleInputChange}
          />
        </section>

        <section className="my-4 mb-5 w-full">
          <Button className="w-full">Sign up</Button>
        </section>

        <section>
          <Text className="inline text-sm">
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
