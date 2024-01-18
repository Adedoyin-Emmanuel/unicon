"use client";

import React, { MutableRefObject } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  required?: boolean;
}
const Input = ({
  className,
  inputRef,
  required = true,
  ...others
}: InputProps) => {
  return (
    <input
      ref={inputRef}
      className="input border-[1px] border-gray-300 focus:border-primary focus:outline-none rounded-md w-full h-14 transition-all duration-300 ease-linear bg-transparent"
      {...others}
      required={required}
    />
  );
};

export default Input;
