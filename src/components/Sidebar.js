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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Sidebar() {
  const [activeId, setActiveId] = useState(1);
  const [subActiveId, setSubActiveId] = useState(1);
  const [isExpanded, setisExpanded] = useState(false);
  const navitems = [
    {
      id: 1,
      label: "Product Management",
      icon: <Food className="w-5 h-5" />,
      sub: [
        {
          id: 1,
          name: "Product List",
          href: "/dashboard/product/productlist",
        },
        {
          id: 2,
          name: "Audit Trail",
          href: "",
        },
      ],
    },
    {
      id: 2,
      label: "Smart Meal",
      icon: <Meal className="w-5 h-5" />,
      sub: [
        {
          id: 3,
          name: "Meal Guidelines",
          href: "/dashboard/smartmeal/mealguidelines",
        },
      ],
    },
    {
      id: 3,
      label: "Employee Management",
      icon: <People className="w-4 h-4" />,
      sub: [
        {
          id: 4,
          name: "Employee Profiles",
          href: "",
        },
      ],
    },
    {
      id: 4,
      label: "Settings",
      icon: <Setting />,
      sub: [
        {
          id: 5,
          name: "Shop Information",
          href: "",
        },
        {
          id: 6,
          name: "User Right & Controls",
          href: "/dashboard/settings/userright",
        },
      ],
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
    <div
      className={`bg-white border h-full flex flex-col justify-between relative transition-all duration-300 ease-in-out ${
        isExpanded ? "w-96" : "w-24"
      }`}
    >
      <div className="flex flex-col items-start justify-start mt-4 gap-3 overflow-y-auto">
        <Accordion
          type="single"
          collapsible
          className="w-full px-4"
          value={activeId > 4 ? null : `w-full item-${activeId}`}
          onValueChange={(value) => {
            const id = value ? parseInt(value.split("-").pop()) : null;
            setActiveId(id || null);
          }}
        >
          {navitems.map(({ id, label, icon, sub }) => (
            <div key={id} className="flex flex-col items-start w-full">
              {sub && isExpanded ? (
                <AccordionItem value={`w-full item-${id}`}>
                  <AccordionTrigger
                    onClick={() => setActiveId(id)}
                    className={`p-4 cursor-pointer flex gap-1 text-xs font-bold items-center justify-start w-full rounded-md ${
                      activeId === id
                        ? "fill-white text-white bg-primary"
                        : "fill-primary"
                    } ${
                      id === 4
                        ? id === activeId
                          ? "stroke-primary"
                          : "stroke-white"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {icon}
                      {isExpanded && label}
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="bg-primary-foreground rounded-b-lg font-bold text-sm p-4 flex flex-col gap-2">
                    {sub.map(({ id: subId, name, href }, index) => (
                      <a
                        key={index}
                        href={href}
                        className={`flex items-center justify-between text-xs text-gray-700 hover:text-primary py-1 ml-4 ${
                          subActiveId === subId ? "font-bold text-primary" : ""
                        } `}
                        onClick={() => setSubActiveId(subId)}
                      >
                        {name}
                        {subActiveId === subId && (
                          <FaAngleRight className="ml-2 fill-primary" />
                        )}
                      </a>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div
                  onClick={() => setActiveId(id)}
                  className={`p-4 cursor-pointer flex gap-1 text-xs font-bold items-center justify-start w-full rounded-md 
                    ${isExpanded===false && "aspect-square"}
                    ${
                      activeId === id
                        ? "fill-white text-white bg-primary"
                        : "fill-primary"
                    } ${
                    id === 4
                      ? id === activeId
                        ? "stroke-primary"
                        : "stroke-white"
                      : ""
                  }`}
                >
                  <a className="flex items-center gap-1">
                    {icon}
                    {isExpanded && label}
                  </a>
                </div>
              )}

              {id === 4 && (
                <div className="border-t border-gray-300 w-full my-2" />
              )}
            </div>
          ))}
        </Accordion>
      </div>
      <div className="flex justify-center items-center mb-4">
        <Image
          src={logout}
          alt="Logout Button"
          className="rotate-180 cursor-pointer"
        />
      </div>
      <FaAngleRight
        className={`rounded-full bg-white border absolute top-[5%] -right-2 p-[0.1rem] transition-transform duration-300 ease-in-out ${
          isExpanded && "rotate-180"
        }`}
        onClick={() => setisExpanded(!isExpanded)}
      />
    </div>
  );
}

export default Sidebar;
