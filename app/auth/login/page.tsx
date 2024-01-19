"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Text from "./../../components/Text/Text";
import Input from "./../../components/Input/Input";
import Button from "./../../components/Button/Button";
import { useLoginMutation } from "@/app/store/features/app/app.slice";
import { loginUser } from "@/app/store/features/auth/auth.slice";
import jwt from "jsonwebtoken";
import Loader from "@/app/components/Loader/Loader";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch<AppDispatch>();
  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response: any = await login(formData).unwrap();
      console.log(response);
      if (response) {
        toast.success(response.message);
        const jwtToken = response.data.accessToken;
        const jwtPayload: any = jwt.decode(jwtToken);
        const tempData = jwtPayload;
        const {
          accessToken,
          refreshToken: token,
          password,
          ...data
        } = response.data;
        console.log(response.data);

        const { password: passwordToRemove, ...others } = data.user;
        console.log(others);
        dispatch(loginUser(others));
        try {
          const serverResponse = await axios.post("/api/auth/set-token", {
            token,
          });

          if (
            serverResponse.data?.message.includes("Cookie set successfully")
          ) {
            router.push("/timeline");
          }
        } catch (error: any) {
          toast.error("Token not set");
        }
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message || error.error || error?.data);
    }
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      {isLoading ? (
        <Loader />
      ) : (
        <form
          className="w-11/12 md:w-1/2 xl:w-1/4"
          onSubmit={(e) => handleSubmit(e)}
        >
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
              value={formData.email}
              onChange={handleInputChange}
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
            <Button className="w-full">Login</Button>
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
      )}
    </section>
  );
};

export default Login;
