import React from "react";
import ToggleButton from "@/components/ToggleButton";

import { CiExport } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
function page() {
  const mealTimes = [
    {
      meal: "Breakfast",
      startTime: "7:00 AM",
      endTime: "10:00 AM",
      points: null,
      status: (
        <ToggleButton
          onLabel="Active"
          offLabel="Inactive"
          size="lg"
          onColor="bg-blue-500"
          offColor="bg-red-500"
          labelColor="text-white"
        />
      ),
    },
    {
      meal: "Lunch",
      startTime: "12:00 PM",
      endTime: "3:00 PM",
      points: null,
      status: "Active",
    },
    {
      meal: "Snacks",
      startTime: "4:00 PM",
      endTime: "4:30 PM",
      points: null,
      status: "Active",
    },
    {
      meal: "Dinner",
      startTime: "8:00 PM",
      endTime: "10:00 PM",
      points: null,
      status: "Active",
    },
    {
      meal: "Tea / Coffee",
      startTime: "10:00 AM",
      endTime: "10:00 PM",
      points: null,
      status: "Active",
    },
  ];
  return (
    <div className="w-full h-full bg-white m-3 rounded-md p-2 pt-4 border">
      <h1 className="font-extrabold text-xl mb-10">Smart Meal</h1>
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

      <div className="border border-primary border-opacity-25 p-4 my-4 rounded-md">
        <div className="flex justify-evenly text-primary font-bold text-xs">
          <h5 className="w-full text-center">Meal Name</h5>
          <h5 className="w-full text-center">Start Time</h5>
          <h5 className="w-full text-center">End Time</h5>
          <h5 className="w-full text-center">Points</h5>
          <h5 className="w-full text-center">Status</h5>
          <h5 className="w-full text-center">Actions</h5>
        </div>

        {mealTimes.map((item, index) => (
          <div
            key={index}
            className={`flex justify-evenly font-bold text-xs py-4 my-2 ${
              index % 2 == 0 ? "bg-[#f8f5fe]" : "bg-[#f7f7f7]"
            }`}
          >
            <h5 className="w-full text-center">
              {item.mealName || "Meal Name"}
            </h5>
            <h5 className="w-full text-center">
              {item.startTime || "Start Time"}
            </h5>
            <h5 className="w-full text-center">{item.endTime || "End Time"}</h5>
            <h5 className="w-full text-center">{item.points || "-"}</h5>
            <h5 className="w-full text-center">{item.status || "Status"}</h5>
            <h5 className="w-full text-center">{item.actions || "Actions"}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
