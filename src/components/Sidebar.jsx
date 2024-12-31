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

function Sidebar({ active, subactive }) {
  const [activeId, setActiveId] = useState(active);
  const [subActiveId, setSubActiveId] = useState(subactive);
  const [isExpanded, setIsExpanded] = useState(false);

  const navitems = [
    {
      id: 1,
      label: "Product Management",
      icon: <Food className="w-5 h-5" />,
      href: "/dashboard/product/productlist",
      sub: [
        { id: 1, name: "Product List", href: "/dashboard/product/productlist" },
        { id: 2, name: "Audit Trail", href: "#" },
      ],
    },
    {
      id: 2,
      label: "Smart Meal",
      icon: <Meal className="w-5 h-5" />,
      href: "/dashboard/smartmeal/mealguidelines",
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
      href: "/dashboard/employee/employeeprofile",
      sub: [
        {
          id: 4,
          name: "Employee Profiles",
          href: "/dashboard/employee/employeeprofile",
        },
      ],
    },
    {
      id: 4,
      label: "Settings",
      icon: <Setting className="w-5 h-5" />,
      sub: [
        { id: 5, name: "Shop Information", href: "" },
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
      icon: <Link className="w-5 h-5" />,
      href: "#",
    },
    { id: 6, label: "FAQ", icon: <Faq className="w-5 h-5" />, href: "#" },
    {
      id: 7,
      label: "Onboarding",
      icon: <Video className="w-5 h-5" />,
      href: "#",
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
          value={activeId > 4 ? null : `item-${activeId}`}
        >
          {navitems.map(({ id, label, icon, sub, href }) => (
            <div key={id} className="flex flex-col items-start w-full">
              {sub && isExpanded ? (
                <AccordionItem value={`item-${id}`}>
                  <AccordionTrigger
                    onClick={() => setActiveId(id)}
                    className={`p-4 cursor-pointer flex gap-1 text-xs font-bold items-center justify-center w-full rounded-md ${
                      activeId === id
                        ? "fill-white text-white bg-primary"
                        : "fill-primary"
                    }
                     ${
                       id === 4
                         ? id === activeId
                           ? "stroke-primary"
                           : "stroke-white"
                         : ""
                     }
                    
                    `}
                  >
                    <div className="flex items-center justify-center gap-3">
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
                        }`}
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
                <a
                  href={!isExpanded ? href : undefined}
                  onClick={() => setActiveId(id)}
                  className={`p-4 cursor-pointer flex gap-1 text-xs font-bold items-center justify-center w-full rounded-md ${
                    activeId === id
                      ? "fill-white text-white bg-primary"
                      : "fill-primary"
                  }
                  ${
                    id === 4
                      ? id === activeId
                        ? "stroke-primary"
                        : "stroke-white"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-center w-full">
                    {icon}
                  </div>
                </a>
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
        onClick={() => setIsExpanded(!isExpanded)}
      />
    </div>
  );
}

export default Sidebar;
