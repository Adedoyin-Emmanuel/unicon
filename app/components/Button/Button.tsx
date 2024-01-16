import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  animate?: boolean;
  border?: boolean;
}

const Button = ({
  className,
  children,
  disabled,
  onClick,
  animate,
  border,
  ...others
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`capitalize rounded p-2 cursor-pointer  transition-all duration-150 ease-in transform ${
        animate && "hover:scale-x-105"
      } ${
        border
          ? "text-black border-[1px] border-primary hover:bg-primary hover:text-white"
          : "text-white bg-primary hover:bg-secondary"
      }  ${className}`}
      {...others}
    >
      {disabled ? <>Loading...</> : children}
    </button>
  );
};

export default Button;
