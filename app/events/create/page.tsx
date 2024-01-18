"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const CreateEvent = () => {
  const pathname = usePathname();

  return (
    <div>
      <h1>Index works!</h1>
      <p>Current pathname: {pathname}</p>
    </div>
  );
};

export default CreateEvent;
