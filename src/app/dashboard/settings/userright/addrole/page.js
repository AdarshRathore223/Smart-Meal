"use client";
import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import CheckboxButton from "@/components/CheckboxButton";
function page() {
  const [apps, setApps] = useState([
    { id: 1, access: true, label: "POS Access" },
    { id: 2, access: false, label: "Smart Meal Tracker" },
    { id: 3, access: true, label: "Inventory Module" },
    { id: 4, access: false, label: "Back office" },
  ]);

  const togglePermissions = (id) => {
    setApps((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, access: !app.access } : app
      )
    );
  };
  
  return (
    <div className="w-full h-full bg-white m-3 rounded-md p-2 pt-4 border">
      <div className="flex justify-between">
        <h1 className="font-extrabold text-xl mb-10">
          User Right & Controls
          <span className="text-primary underline">
            / Add - Edit User Rights & Controls
          </span>
        </h1>
        <a
          className="bg-primary text-white font-bold rounded-md h-12 w-48 flex justify-center items-center gap-2 cursor-pointer hover:bg-purple-900"
          href="./userright/addrole"
        >
          <MdAddCircleOutline />
          Add Role
        </a>
      </div>

      <div className="border border-gray-300 p-6 my-4 rounded-md h-[60%] flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-base">Designation</h1>
          <input
            type="text"
            className="border border-gray-300 rounded-md w-full max-w-xs p-2 text-sm bg-white placeholder:text-gray-500"
            placeholder="Enter Designation"
          />
        </div>

        <div className="w-full flex-grow bg-gray-100 rounded-md p-4 text-sm font-bold">
          <p>Access to the following Apps</p>

          <div className="flex mt-4">
            {apps.map((item) => (
              <div className="flex" key={item.id}>
                <CheckboxButton
                  
                  id={item.id}
                  checked={item.access}
                  onChange={() => {togglePermissions(item.id)}}
                />
                <p className="ml-8">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-1/2 lg:w-1/4 flex gap-2 absolute bottom-[10%] right-5">
        <a
          href="./"
          className="w-1/2 p-3 text-xs text-red-600 bg-red-100 rounded-md font-bold"
        >
          <button className="w-full">Back</button>
        </a>
        <button className="w-1/2 bg-primary p-3 text-white text-xs font-bold rounded-md">
          Add / Update
        </button>
      </div>
    </div>
  );
}

export default page;
