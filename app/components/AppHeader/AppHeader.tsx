"use client";
import React from "react";

interface AppHeaderProps {
  className?: string;
}

const AppHeader = ({ className, ...others }: AppHeaderProps) => {
  return (
    <div className={`p-3 flex items-center gap-x-2 ${className}`} {...others}>
      <div className="avatar">
        <div className="w-10 rounded-full">
          <img src="https://api.dicebear.com/7.x/micah/svg?seed=adedoyin%20emma" />
        </div>
      </div>
      <div className="dropdown dropdown-bottom ">
        <div tabIndex={0} role="button" className="btn m-1 flex items-center">
          Adedoyi Emmanuel
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-zinc-50 rounded-box w-52"
        >
          <li>
            <a>Browse events</a>
          </li>

          <li>
            <a>Saved events</a>
          </li>
          <li>
            <a>Settings</a>
          </li>

          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
