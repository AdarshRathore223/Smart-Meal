"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiSearch, FiUser } from "react-icons/fi";
import { FaWifi, FaAngleDown } from "react-icons/fa";
import { PiBell } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import logo from "@/../public/assets/images/logo/Logo-Z.png";
import { Clock, CrossIcon } from "lucide-react";
import { IoClose } from "react-icons/io5";
import Dropdown from "./Dropdown";

function TopBar() {
  const [isNotiVisible, setIsNotiVisible] = useState(false);
  const orderData = [
    {
      orderId: 12345,
      customerName: "John Doe",
      numberOfItems: 2,
      totalCost: 450,
      timeSinceOrder: "24 minutes",
    },
    {
      orderId: 1235,
      customerName: "John Doe",
      numberOfItems: 2,
      totalCost: 450,
      timeSinceOrder: "24 minutes",
    },
    {
      orderId: 1345,
      customerName: "John Doe",
      numberOfItems: 2,
      totalCost: 450,
      timeSinceOrder: "24 minutes",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full bg-white border p-3 px-6">
      <Image src={logo} alt="Logo" className="w-10 aspect-square" />
      <div className="bg-[#f7f7f7] p-2 rounded-xl flex items-center min-w-[25rem] max-md:w-1/4 ">
        <FiSearch className="h-5 w-5" />
        <input
          type="text"
          className="bg-transparent outline-none w-full ml-4 placeholder:text-xs"
          placeholder="Search for Employe or with Employee ID"
        />
      </div>

      <div className="flex items-center justify-center gap-3">
        <div className=" w-12 aspect-square rounded-full flex justify-center cursor-pointer items-center">
          <FaWifi className="w-1/2 h-1/2 fill-[#06B077]" />
        </div>
        <div
          className="bg-[#F6F2FE] hover:bg-[#e9e2ff] w-12 aspect-square rounded-full flex justify-center cursor-pointer items-center relative"
          onClick={() => setIsNotiVisible(true)}
        >
          <PiBell className="w-1/2 h-1/2 fill-primary" />
          <div className="absolute text-xs font-extrabold rounded-full bg-[#F6F2FE] text-green-600 top-[10%] right-[18%] pt-[2px]">
            03
          </div>
        </div>
        <div className="bg-[#06b07723] w-12 aspect-square rounded-full flex justify-center cursor-pointer items-center relative">
          <FiUser className="w-1/2 h-1/2 stroke-primary" />
          <div className="absolute text-xs font-extrabold rounded-full bg-green-500 border-2 border-white top-[5%] right-[5%] pt-[2px] w-3 h-3" />
        </div>
        <div>
          <p className="font-bold">Adarsh Rathore</p>
          <p className="text-sm text-gray-600">Role</p>
        </div>
        <FaAngleDown className="bg-gray-100 rounded-full p-1 w-6 h-6" />
      </div>

      <div
        className={`fixed w-[45vw] min-w-[30rem] h-screen bg-white top-0 z-50 rounded-l-xl overflow-hidden shadow-[15px_0px_25px_10px] p-4 transition-all duration-500 ease-in-out transform ${
          isNotiVisible
            ? "translate-x-0 right-0"
            : "translate-x-full -right-1/2"
        }`}
      >
        <button className="absolute bg-destructive-foreground text-destructive p-2 w-1/4 text-xs font-bold rounded-md bottom-[10%] right-[5%]">
          Dismiss all
        </button>

        <div
          className="w-full font-bold flex justify-between mt-5 cursor-pointer"
          onClick={() => setIsNotiVisible(false)}
        >
          Notifications
          <IoClose className="bg-gray-100 hover:bg-gray-300 text-destructive w-7 h-7 p-1 rounded-full" />
        </div>

        <div className="w-full grid grid-cols-2 gap-1 mt-5">
          <button className="bg-primary text-white p-2 rounded-md text-xs tracking-wide">
            All
          </button>
          <button className="bg-gray-100 font-bold p-2 rounded-md text-xs tracking-wide">
            Updated from ZIOUN
          </button>

          <Dropdown placeholder={"Select Shop"} />
          <Dropdown placeholder={"Type of Notification"} />
        </div>

        {orderData.map((item, index) => (
          <div
            className="w-full bg-gray-100 h-24 rounded-md mt-2 relative"
            key={index}
          >
            <div className="absolute right-[3%] top-5 flex font-semibold text-[0.7rem] justify-center items-center gap-1">
              <Clock className="w-3 h-3" /> {item.timeSinceOrder}
            </div>
            <div className=" flex gap-2 absolute bottom-4 right-4">
              <button className="bg-white text-[0.7rem] rounded-sm px-4 p-1 font-semibold">
                Mark as Read
              </button>
              <button className="bg-primary text-white text-[0.7rem] rounded-sm px-4 p-1">
                View Details
              </button>
            </div>
            <div className="flex justify-between item start">
              <div className="flex items-start justify-center p-4">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="ml-2">
                  <div className="text-primary text-sm font-semibold">
                    New Online Order{" "}
                    <span className="text-black">#{item.orderId}</span>
                  </div>
                  <div className="text-xs font-semibold">
                    Customer Name: {item.customerName}
                  </div>
                  <div className="underline text-xs font-semibold">
                    {item.numberOfItems} Items-{item.totalCost}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBar;
