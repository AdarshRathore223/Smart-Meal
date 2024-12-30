"use client";
import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import ToggleButton from "@/components/ToggleButton.jsx";
import { FiSearch, FiEdit3 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
function page() {
  const sections = ["Employee", "Smart Meal Module", "Option"];
  const [activeButton, setActiveButton] = useState(sections[0]);

  const handleButtonClick = (buttonLabel) => {
    setActiveButton(buttonLabel);
  };

  const employeData = [
    {
      Name: "Sachin Prabhasker",
      Department: "Health Care",
      Designation: "Doctor",
      Location: "ICU",
      Access: "Backoffice POS",
      Status: true,
    },
    {
      Name: "Sachin Prabhasker",
      Department: "Health Care",
      Designation: "Doctor",
      Location: "ICU",
      Access: "Backoffice POS",
      Status: true,
    },
    {
      Name: "Sachin Prabhasker",
      Department: "Health Care",
      Designation: "Doctor",
      Location: "ICU",
      Access: "Backoffice POS",
      Status: true,
    },
    {
      Name: "Sachin Prabhasker",
      Department: "Health Care",
      Designation: "Doctor",
      Location: "ICU",
      Access: "Backoffice POS",
      Status: true,
    },
    {
      Name: "Sachin Prabhasker",
      Department: "Health Care",
      Designation: "Doctor",
      Location: "ICU",
      Access: "Backoffice POS",
      Status: true,
    },
  ];
  return (
    <div className="w-full h-full bg-white m-3 rounded-md p-2 pt-4 border">
      <div className="mb-10">
        <h1 className="font-extrabold text-xl">Role Management</h1>
        <span className="font-bold text-xs">
          Manage Your Role details and configurations
        </span>
      </div>

      <div className="flex flex-grow w-full gap-3 text-[0.7rem] relative">
        {sections.map((buttonLabel) => (
          <button
            key={buttonLabel}
            className={`p-3 px-8 rounded-md font-semibold flex gap-1 flex-1 justify-center ${
              activeButton === buttonLabel
                ? "bg-yellow text-white"
                : "bg-yellow_secondary text-gray-900"
            }`}
            onClick={() => handleButtonClick(buttonLabel)}
          >
            {buttonLabel}
          </button>
        ))}
      </div>

      <div className="w-full flex justify-end items-center mt-6">
        <button className="flex px-4 py-2 items-center gap-2 text-primary bg-primary-foreground border border-primary rounded-md font-bold">
          <MdAddCircleOutline className="w-5 h-5" />
          Add Employee
        </button>
      </div>

      <div className="border border-opacity-25 p-4 my-4 rounded-md border-primary">
        <div className="flex justify-evenly items-center text-primary font-bold text-xs px-2 pb-2">
          <h5 className="text-start w-[14%]">Name</h5>
          <h5 className="text-start w-[14%]">Department</h5>
          <h5 className="text-start w-[14%]">Designation</h5>
          <h5 className="text-start w-[14%]">Location</h5>
          <h5 className="text-start w-[14%]">App Access</h5>
          <h5 className="text-start w-[14%]">Status</h5>
          <h5 className="text-start w-[14%]">Actions</h5>
        </div>
        <div className="h-64 overflow-y-scroll">
          {employeData.map((item, index) => (
            <div
              key={index}
              className={`flex justify-evenly items-center rounded-md font-bold text-xs p-2 my-2 pl-4 ${
                index % 2 == 0 ? "bg-[#f8f5fe]" : "bg-[#f7f7f7]"
              }`}
            >
              <a
                href="./employeemanagement/rolemanagement"
                className="text-start w-[14%]"
              >
                {item.Name || "-"}
              </a>
              <a
                href="./employeemanagement/rolemanagement"
                className="text-start w-[14%]"
              >
                {item.Department || "-"}
              </a>
              <a
                href="./employeemanagement/rolemanagement"
                className="text-start w-[14%]"
              >
                {item.Designation || "-"}
              </a>
              <a
                href="./employeemanagement/rolemanagement"
                className="text-start w-[14%]"
              >
                {item.Location || "-"}
              </a>
              <a
                href="./employeemanagement/rolemanagement"
                className="text-start w-[14%]"
              >
                {item.Access || "-"}
              </a>
              <h5 className="text-start w-[14%] pl-4">
                <ToggleButton isOn={item.Status} />
              </h5>
              <div className="w-[14%] flex gap-2 justify-start">
                <button className="aspect-square rounded-full bg-white h-8 w-8 flex justify-center items-center shadow-lg">
                  <FiEdit3 className="h-1/2 w-1/2" />
                </button>
                <button className="aspect-square rounded-full bg-red-100 h-8 w-8 flex justify-center items-center shadow-lg">
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
