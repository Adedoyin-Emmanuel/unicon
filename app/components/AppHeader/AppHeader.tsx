"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface AppHeaderProps {
  className?: string;
}

const AppHeader = ({ className, ...others }: AppHeaderProps) => {
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] =
    useState(false);
  const profileRef: any = useRef(null);
  const router = useRouter();
  useEffect(() => {
    const closeDropdowns = (event: MouseEvent) => {
      if (
        isProfileDropdownVisible &&
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileDropdownVisible(false);
      }
    };

    window.addEventListener("click", closeDropdowns);

    return () => {
      window.removeEventListener("click", closeDropdowns);
    };
  }, [isProfileDropdownVisible]);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownVisible(!isProfileDropdownVisible);
    console.log(isProfileDropdownVisible);
  };

  const profileMenuItems = [
    {
      id: 1,
      text: "browse events",
      onClick: () => {
        router.push("/events");
      },
    },

    {
      id: 2,
      text: "saved events",
      onClick: () => {
        router.push("/events");
      },
    },
    {
      id: 3,
      text: "settings",
      onClick: () => {
        router.push("/settings");
      },
    },

    {
      id: 4,
      text: "logout",
      onClick: () => {
        console.log("logout");
      },
    },
  ];
  return (
    <div
      className={`flex items-center gap-x-2 relative ${className}`}
      {...others}
    >
      <div className="avatar p-2 cursor-pointer" ref={profileRef}>
        <div className="w-10 rounded-full" onClick={toggleProfileDropdown}>
          <img
            src="https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"
            alt="User profile image"
          />
        </div>
      </div>

      {isProfileDropdownVisible && (
        <div className="profile-dropdown absolute  top-full w-60 h-64 right-0 bg-white z-[100] rounded-md shadow-md p-4">
          <h4 className="mb-2 font-bold text-gray-800 capitalize">Menu</h4>
          {profileMenuItems.map((item) => (
            <p
              key={item.id}
              className="text-[13px] md:text-sm p-3 hover:bg-secondary hover:text-white rounded capitalize mt-2 cursor-pointer"
              onClick={() => item.onClick()}
            >
              {item.text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppHeader;
