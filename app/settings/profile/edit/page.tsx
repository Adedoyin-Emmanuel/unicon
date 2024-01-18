"use client";

import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import Loader from "@/app/components/Loader/Loader";
import Layout from "@/app/components/Layout/Layout";
import Text from "@/app/components/Text/Text";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  //   const [formData, setFormData] = useState({
  //     name: userAuthInfo?.name,
  //     email: userAuthInfo?.email,
  //     username: userAuthInfo?.username,
  //     bio: userAuthInfo?.bio,
  //     location: userAuthInfo?.location,
  //   });

  //   const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submitted");
  };

  const navigateToPicturePage = (): void => {
    router.push("/buyer/profile/picture");
  };
  return (
    <Layout showInput={false}>
      <section className="my-5">
        <section className="w-full my-8">
          <section className="flex flex-col items-center justify-center">
            <div className="avatar cursor-pointer">
              <div className="w-24 rounded-full">
                <img
                  className=""
                  src={"https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"}
                  alt="buyer profile image"
                  onClick={navigateToPicturePage}
                />
              </div>
              <Link
                href="/buyer/profile/picture"
                className="bg-accent flex items-center justify-center rounded-full w-8 h-8 transform-gpu text-white translate-y-16 -translate-x-10 hover:scale-110 duration-100 ease-linear hover:bg-secondary hover:text-slate-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </Link>
            </div>

            <form
              className="w-full p-1 md:w-1/2 xl:w-2/4"
              onSubmit={(e) => handleSubmit(e)}
            >
              <section className="my-4 mb-5">
                <label htmlFor="name" className="text-md block my-2">
                  Fullname
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your fullname"
                />
              </section>

              <section className="my-4 mb-5">
                <label htmlFor="username" className="text-md block my-2">
                  Username
                </label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                />
              </section>

              <section className="my-4 mb-5">
                <label htmlFor="email" className="text-md block my-2">
                  Email
                </label>
                <Input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
              </section>
              <section className="my-4 mb-5">
                <label htmlFor="bio" className="text-md block my-2">
                  Bio
                </label>
                <textarea
                  className="textarea border-2 border-gray-300 focus:outline-none rounded-md w-full textarea-md"
                  name="bio"
                ></textarea>
              </section>

              <section className="my-4 mb-5">
                <label htmlFor="bio" className="text-md block my-2">
                  Location
                </label>
                <Input
                  type="text"
                  name="location"
                  placeholder="Enter your location"
                />
              </section>

              <section className="my-4 mb-5 w-full">
                <Button className="w-full"> Update info</Button>
              </section>
            </form>
          </section>
        </section>
      </section>
    </Layout>
  );
}
