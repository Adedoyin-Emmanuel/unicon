"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  className?: string;
}

const BackButton = ({ className, ...others }: BackButtonProps) => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <div
      onClick={handleBackButtonClick}
      {...others}
      className={`cursor-pointer ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default BackButton;
