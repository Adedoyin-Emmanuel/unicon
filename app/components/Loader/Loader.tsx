"use client";

interface LoaderProps {
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const Loader = ({ size, className }: LoaderProps) => {
  const loaderSize = size || "lg";
  return (
    <div className="loader-container fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
      <span
        className={`loading loading-ring loading-${loaderSize} text-center bg-primary w-12 h-12 ${className}`}
      ></span>
    </div>
  );
};

export const LoaderSmall = ({ size, className }: LoaderProps) => {
  const loaderSize = size || "lg";
  return (
    <div className="loader-container flex items-center justify-center z-50">
      <span
        className={`loading loading-bars  loading-${loaderSize} text-center bg-primary w-10 h-10  ${className}`}
      ></span>
    </div>
  );
};

export default Loader;
