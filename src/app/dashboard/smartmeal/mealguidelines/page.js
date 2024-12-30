import React from "react";
import ToggleButton from "@/components/ToggleButton";

import { CiExport } from "react-icons/ci";
import { FiSearch, FiEdit3 } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md";
function page() {
  const mealTimes = [
    {
      meal: "Breakfast",
      startTime: "7:00 AM",
      endTime: "10:00 AM",
      points: null,
      status: true,
    },
    {
      meal: "Lunch",
      startTime: "12:00 PM",
      endTime: "3:00 PM",
      points: null,
      status: false,
    },
    {
      meal: "Snacks",
      startTime: "4:00 PM",
      endTime: "4:30 PM",
      points: null,
      status: true,
    },
    {
      meal: "Dinner",
      startTime: "8:00 PM",
      endTime: "10:00 PM",
      points: null,
      status: true,
    },
    {
      meal: "Tea / Coffee",
      startTime: "10:00 AM",
      endTime: "10:00 PM",
      points: null,
      status: true,
    },
    {
      meal: "Tea / Coffee",
      startTime: "10:00 AM",
      endTime: "10:00 PM",
      points: null,
      status: true,
    },
  ];
  return (
    <div className="w-full h-full bg-white m-3 rounded-md p-2 pt-4 border">
      <div className="flex justify-between">
      <h1 className="font-extrabold text-xl mb-10">Smart Meal</h1>
      <a className="bg-primary text-white font-bold rounded-md h-12 w-48 flex justify-center items-center gap-2 cursor-pointer hover:bg-purple-900" href="./smartmeal/addmeal"><MdAddCircleOutline/>Add Meal</a>
      </div>
      <div className="flex justify-between w-full gap-3">
        <div className="flex gap-3">
          <button className="bg-gray-100 p-2 px-8 rounded-md font-semibold text-sm flex gap-1">
            <CiExport className="stroke-1 w-4 h-4 rotate-180" /> Import List
          </button>
          <button className="bg-gray-100 p-2 px-8 rounded-md font-semibold text-sm flex gap-1">
            <CiExport className="stroke-1 w-4 h-4" /> Export to Excel
          </button>
        </div>
        <div className="flex gap-3 mr-2">
          <button className="bg-gray-100 p-2 rounded-md font-semibold text-sm flex gap-1 aspect-square">
            <FiSearch className="stroke-2 w-4 h-4" />
          </button>
          <button className="bg-gray-100 p-2 rounded-md font-semibold text-sm flex gap-1 aspect-square">
            <IoFilterSharp className="stroke-1 w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="border border-opacity-25 p-4 my-4 rounded-md">
        <div className="flex justify-evenly items-center text-primary font-bold text-xs px-2 pb-2">
          <h5 className="w-full text-start">Meal Name</h5>
          <h5 className="w-full text-start">Start Time</h5>
          <h5 className="w-full text-start">End Time</h5>
          <h5 className="w-full text-start">Points</h5>
          <h5 className="w-full text-start">Status</h5>
          <h5 className="w-full text-start">Actions</h5>
        </div>

        <div className="h-96 overflow-y-scroll">
          {mealTimes.map((item, index) => (
            <div
              key={index}
              className={`flex justify-evenly items-center rounded-md font-bold text-xs py-4 px-2 my-2 ${
                index % 2 == 0 ? "bg-[#f8f5fe]" : "bg-[#f7f7f7]"
              }`}
            >
              <h5 className="w-full text-start">
                {item.meal || "Meal Name"}
              </h5>
              <h5 className="w-full text-start">
                {item.startTime || "Start Time"}
              </h5>
              <h5 className="w-full text-start">
                {item.endTime || "End Time"}
              </h5>
              <h5 className="w-full text-start">{item.points || "-"}</h5>
              <h5 className="w-full text-start">
                <ToggleButton isOn={item.status} />
              </h5>
              <div className="w-full flex gap-2 justify-start">
                <button className="aspect-square rounded-full bg-white h-10 w-10 flex justify-center items-center shadow-lg">
                  <FiEdit3 className="h-1/2 w-1/2" />
                </button>
                <button className="aspect-square rounded-full bg-white h-10 w-10 flex justify-center items-center shadow-lg">
                  <LuCopy className="h-1/2 w-1/2" />
                </button>
                <button className="aspect-square rounded-full bg-red-100 h-10 w-10 flex justify-center items-center shadow-lg">
                  <RiDeleteBinLine className="fill-red-600 h-4/6 w-4/6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
