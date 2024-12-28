"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
  Food,
  Meal,
  People,
  Setting,
  Link,
  Faq,
  Video,
} from "@/../public/assets/images/Icons/Icons.js";

import logout from "@/../public/assets/images/Icons/logout.svg";
import { FaAngleRight } from "react-icons/fa";
function Sidebar() {
  const [activeId, setActiveId] = useState(1);

  const navitems = [
    {
      id: 1,
      label: "Food",
      icon: <Food className="w-5 h-5" />,
      href: "/food",
    },
    {
      id: 2,
      label: "Meal",
      icon: <Meal className="w-5 h-5" />,
      href: "/meal",
    },
    {
      id: 3,
      label: "People",
      icon: <People className="w-4 h-4" />,
      href: "/people",
    },
    {
      id: 4,
      label: "Setting",
      icon: <Setting />,
      href: "/setting",
    },
    {
      id: 5,
      label: "Integration",
      icon: <Link />,
      href: "/integration",
    },
    {
      id: 6,
      label: "FAQ",
      icon: <Faq />,
      href: "/faq",
    },
    {
      id: 7,
      label: "Onboarding",
      icon: <Video />,
      href: "/onboarding",
    },
  ];

  return (
    <div className="bg-white w-24 border h-full flex flex-col justify-between relative">
      <div className="flex flex-col items-center justify-start mt-4 gap-3 overflow-y-auto">
        {navitems.map(({ id, label, icon, href }) => (
          <div key={id} className="flex flex-col items-center">
            <a
              // href={href}
              onClick={() => setActiveId(id)}
              className={`p-4 cursor-pointer ${
                activeId === id
                  ? "fill-white bg-primary rounded-2xl"
                  : "fill-primary"
              } ${
                id === 4
                  ? id === activeId
                    ? "stroke-primary"
                    : "stroke-white"
                  : ""
              }`}
            >
              {icon}
            </a>
            {id === 4 && (
              <div className="border-t border-gray-300 w-1/2 my-2" />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mb-4">
        <Image
          src={logout}
          alt="Logout Button"
          className="rotate-180 cursor-pointer"
        />
      </div>

      <FaAngleRight className=" rounded-full bg-white border absolute top-[5%] -right-[10%] p-[0.1rem]" />
    </div>
  );
}

export default Sidebar;
