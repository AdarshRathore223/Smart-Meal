import React from "react";

import { FiSearch, FiEdit3 } from "react-icons/fi";
import { LuCopy } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md";
import Sidebar from "@/components/Sidebar";
function page() {
  const rights = [
    {
      id: 1,
      designation: "Administor",
      rights: "Full Access",
      employee: 1,
    },
    {
      id: 2,
      designation: "Manager",
      rights: "Back office",
      employee: 1,
    },
    {
      id: 3,
      designation: "Store",
      rights: "Back office",
      employee: 1,
    },
    {
      id: 4,
      designation: "Admin",
      rights: "Back office",
      employee: 1,
    },
    {
      id: 5,
      designation: "Cashier",
      rights: "POS KDS",
      employee: 1,
    },
  ];
  return (
    <>
    <Sidebar active={4} subactive={6}/>
      <div className="w-full h-full bg-white m-3 rounded-md p-2 pt-4 border">
        <div className="flex justify-between">
          <h1 className="font-extrabold text-xl mb-10">
            User Right & Controls
          </h1>
          <a
            className="bg-primary text-white font-bold rounded-md h-12 w-48 flex justify-center items-center gap-2 cursor-pointer hover:bg-purple-900"
            href="./userright/addrole"
          >
            <MdAddCircleOutline />
            Add Role
          </a>
        </div>

        <div className="border border-opacity-25 p-4 my-4 rounded-md">
          <div className="flex justify-end w-full gap-3">
            <div className="flex gap-3 mr-2">
              <button className="bg-gray-100 p-2 rounded-md font-semibold text-sm flex gap-1 aspect-square">
                <FiSearch className="stroke-2 w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex justify-evenly items-center text-primary font-bold text-xs px-2 pb-2">
            <h5 className="w-full text-start">Designation</h5>
            <h5 className="w-full text-start">Access Right</h5>
            <h5 className="w-full text-start">Employee</h5>
            <h5 className="w-full text-start">Actions</h5>
          </div>

          <div className="h-96 overflow-y-scroll">
            {rights.map((item, index) => (
              <div
                key={index}
                className={`flex justify-evenly items-center rounded-md font-bold text-xs py-4 px-2 my-2 ${
                  index % 2 == 0 ? "bg-[#f8f5fe]" : "bg-[#f7f7f7]"
                }`}
              >
                <h5 className="w-full text-start">{item.designation || "-"}</h5>
                <h5 className="w-full text-start">{item.rights || "-"}</h5>
                <h5 className="w-full text-start">{item.employee || "-"}</h5>
                <div className="w-full flex gap-2 justify-start">
                  <a
                    href="./userright/addrole"
                    className="aspect-square rounded-full bg-white h-10 w-10 flex justify-center items-center shadow-lg"
                  >
                    <FiEdit3 className="h-1/2 w-1/2" />
                  </a>
                  <a className="aspect-square rounded-full bg-white h-10 w-10 flex justify-center items-center shadow-lg">
                    <LuCopy className="h-1/2 w-1/2" />
                  </a>
                  <a className="aspect-square rounded-full bg-red-100 h-10 w-10 flex justify-center items-center shadow-lg">
                    <RiDeleteBinLine className="fill-red-600 h-4/6 w-4/6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
