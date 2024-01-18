"use client";

import Modal from "@/app/components/Modal/Modal";
import Layout from "@/app/components/Layout/Layout";
import Text from "@/app/components/Text/Text";
import Verified from "@/app/components/Verified/Verified";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsPenFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import BackButton from "@/app/components/BackButton/BackButton";

const Settings = () => {
  const router = useRouter();
  const [skip, setSkip] = useState<boolean>(true);
  const verificationRef = useRef<HTMLDialogElement | any>(null);

  const handleLogoutClick = async () => {
    console.log("logout");
  };

  const handleNavigateToProfile = () => {
    router.push("/user/profile/me");
  };

  const handleUpdateProfile = () => {
    router.push("/user/profile");
  };

  const handleVerificationModalClick = () => {
    if (verificationRef && verificationRef.current) {
      verificationRef?.current.showModal();
    }
  };

  const handleSendVerficationMail = async () => {
    setSkip(false);
  };

  return (
    <Layout showInput={false}>
      <BackButton className="p-2" />
      <section className="my-5">
        <section className="my-8">
          <section
            className="profile-container  w-full flex items-center justify-center cursor-pointer"
            onClick={handleNavigateToProfile}
          >
            <section className="profile-section w-full p-2 my-5 flex items-center md:justify-center gap-x-5 md:gap-x-20">
              <div className="avatar cursor-pointer">
                <div className="w-16 rounded-full">
                  <img
                    className=""
                    src={"https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"}
                    alt="user profile image"
                  />
                </div>
                <section className="pen-container bg-accent flex items-center justify-center rounded-full w-6 h-6 transform-gpu text-white translate-y-12 -translate-x-7 hover:scale-110 duration-100 ease-linear hover:bg-secondary hover:text-slate-200">
                  <Link href={"/user/profile"}>
                    {" "}
                    <BsPenFill />
                  </Link>
                </section>
              </div>
              <section className="user-info">
                <h3 className="font-bold capitalize flex items-center gap-x-1">
                  adedoyin emmanuel
                  <span>{true && <Verified />}</span>
                </h3>
                <Text className="text-sm font-bold" noCapitalize={true}>
                  @emmysoft
                </Text>
                <Text className="text-sm">i build stuff</Text>
              </section>
            </section>
          </section>
          <Modal ref={verificationRef}>
            <section className="confirm">
              <h3 className="font-bold text-2xl capitalize text-accent">
                get verified
              </h3>
              <p className="my-3">
                A verification mail would be sent to your inbox, do well to
                check spam if you can't find the mail. Then follow the mail
                instructions.
              </p>

              <section className="mt-8 w-full flex items-end justify-end">
                <button
                  className="bg-accent capitalize p-2 rounded-md text-white text-sm"
                  onClick={handleSendVerficationMail}
                >
                  send mail
                </button>
              </section>
            </section>
          </Modal>
          <section className="action-container w-full flex flex-col items-center md:justify-center">
            <section
              className="account-details my-5 flex items-center transition-colors duration-100 ease-linear rounded cursor-pointer gap-x-10 w-full p-2 md:w-6/12"
              onClick={handleUpdateProfile}
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
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>

              <Link href="/user/profile" className="details">
                <h3 className="account font-bold capitalize text-[16px]">
                  account{" "}
                </h3>
                <Text className="text-sm">update your account info</Text>
              </Link>
            </section>
            <section
              className="account-details my-5 flex items-center transition-colors duration-100 ease-linear rounded cursor-pointer gap-x-10 w-full p-2 md:w-6/12"
              onClick={handleNavigateToProfile}
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
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <section className="details">
                <Link href={"/user/profile/me"}>
                  <h3 className="account font-bold capitalize text-[16px]">
                    profile{" "}
                  </h3>
                  <Text className="text-sm">view your profile</Text>
                </Link>
              </section>
            </section>
            <section
              className="account-verify my-5 flex items-center transition-colors duration-100 ease-linear rounded cursor-pointer gap-x-10 w-full p-2 md:w-6/12"
              onClick={handleVerificationModalClick}
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
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>

              <section className="details">
                <h3 className="account font-bold capitalize text-[16px]">
                  verify account{" "}
                </h3>
                <Text className="text-sm">get your account verified</Text>
              </section>
            </section>
            <section className="account-details my-5 flex items-center transition-colors duration-100 ease-linear rounded cursor-pointer gap-x-10 w-full p-2 md:w-6/12">
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
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>

              <section className="details">
                <h3 className="account font-bold capitalize text-[16px]">
                  Invite{" "}
                </h3>
                <Text className="text-sm">invite your friends to Unicon</Text>
              </section>
            </section>
            <section
              className="account-details my-5 flex items-center transition-colors duration-100 ease-linear rounded cursor-pointer gap-x-10 w-full p-2 md:w-6/12"
              onClick={handleLogoutClick}
            >
              <FiLogOut className="h-5 w-5" />

              <section className="details">
                <h3 className="account font-bold capitalize text-[16px]">
                  Logout{" "}
                </h3>
                <Text className="text-sm">log out of your account</Text>
              </section>
            </section>
          </section>
        </section>
      </section>
    </Layout>
  );
};

export default Settings;
