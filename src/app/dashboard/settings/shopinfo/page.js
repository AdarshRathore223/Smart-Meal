"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { CiLocationOn } from "react-icons/ci";
import { FiEdit3 } from "react-icons/fi";
import { LuCopy } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
function page() {
  const [activeButton, setActiveButton] = useState("My Shop Details");
  const [activeShopData, setActiveShopData] = useState({
    id: 1,
    name: "Vijankara Padmasanna",
    outletid: 4231234,
    category: "Restaurant",
    Addline1: "#123, Prestige Tower, MG Road,",
    Addline2: "Bangalore - 560001, Karnataka, India",
  });
  const shopData = [
    {
      id: 1,
      name: "Vijankara Padmasanna",
      outletid: 4231234,
      category: "Restaurant",
      Addline1: "#123, Prestige Tower, MG Road,",
      Addline2: "Bangalore - 560001, Karnataka, India",
    },
    {
      id: 2,
      name: "Muthahalli HSR",
      outletid: 5892485,
      category: "Cafe",
      Addline1: "#123, Prestige Tower, MG Road,",
      Addline2: "Bangalore - 560001, Karnataka, India",
    },
  ];

  const shopListData = [
    {
      shopname: "Prestige Mall Store",
      licence: "ABC-1234-EFGH-5678",
      platform: "Window",
      No_of_licence: 10,
      status: "Active",
    },
    {
      shopname: "Prestige Mall Store",
      licence: "ABC-1234-EFGH-5678",
      platform: "Window",
      No_of_licence: 10,
      status: "Active",
    },
    {
      shopname: "Prestige Mall Store",
      licence: "ABC-1234-EFGH-5678",
      platform: "Window",
      No_of_licence: 10,
      status: "Active",
    },
    {
      shopname: "Prestige Mall Store",
      licence: "ABC-1234-EFGH-5678",
      platform: "Window",
      No_of_licence: 10,
      status: "Active",
    },
    {
      shopname: "Prestige Mall Store",
      licence: "ABC-1234-EFGH-5678",
      platform: "Window",
      No_of_licence: 10,
      status: "Active",
    },
  ];
  const subcription = [
    {
      screenID: "SRC001",
      deviceID: "DEV123",
      screenLocation: "Entrace Area",
      screen: 24,
      devicetype: "POS Display",
      status: "Active",
    },
    {
      screenID: "SRC001",
      deviceID: "DEV123",
      screenLocation: "Entrace Area",
      screen: 24,
      devicetype: "POS Display",
      status: "Active",
    },
    {
      screenID: "SRC001",
      deviceID: "DEV123",
      screenLocation: "Entrace Area",
      screen: 24,
      devicetype: "POS Display",
      status: "Active",
    },

  ];

  const handleActiveshop = (data) => {
    setActiveShopData({ ...data });
  };

  return (
    <>
      <Sidebar active={4} subactive={5} />
      <div className="w-full h-full bg-white m-3 rounded-md p-6 border flex flex-col">
        <div className="flex justify-between">
          <h1 className="font-extrabold text-xl mb-10 flex justify-center">
            Settings
          </h1>
        </div>

        <div className="flex-grow w-full border p-2 rounded-md flex flex-col">
          <div className="flex gap-3 text-[0.7rem] relative w-3/5">
            {["My Shop Details", "Shop List", "Subscription"].map(
              (buttonLabel) => (
                <button
                  key={buttonLabel}
                  className={`p-3 px-8 rounded-md font-semibold flex justify-center items-center gap-1 w-1/4 ${
                    activeButton === buttonLabel
                      ? "bg-primary text-white"
                      : "bg-primary-foreground text-gray-900"
                  }`}
                  onClick={() => setActiveButton(buttonLabel)}
                >
                  {buttonLabel}
                </button>
              )
            )}
          </div>

          {/* Content area */}
          {activeButton === "My Shop Details" && (
            <div className="grid grid-cols-6 mt-2 flex-grow">
              <div className="border border-primary rounded-md p-2">
                {shopData.map((item, index) => (
                  <button
                    onClick={() => handleActiveshop(item)}
                    key={index}
                    className={`w-full p-2 border text-[0.7rem] text-start rounded-md  mb-2 ${
                      item.id === activeShopData.id
                        ? "border-yellow bg-yellow_secondary text-yellow font-semibold"
                        : "bg-[#fdf5ed] border-none font-semibold"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="col-span-5 bg-gray-100 mx-2 rounded-md max-h-44 flex flex-col justify-center items-center font-bold">
                <div className="text-xs">
                  Outlet ID - {activeShopData.outletid}{" "}
                </div>
                <div className="text-primary">{activeShopData.name}</div>
                <div className="text-xs">{activeShopData.category}</div>
                <div className="w-24 border-b border-black my-2" />
                <div className="flex justify-center items-center">
                  <CiLocationOn className="w-8 h-8 bg-primary-foreground rounded-full text-primary p-2" />

                  <div className="flex justify-center flex-col items-start text-xs ml-2">
                    <div>{activeShopData.Addline1}</div>
                    <div>{activeShopData.Addline2}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeButton === "Shop List" && (
            <div className="border border-opacity-25 p-4 my-4 rounded-md">
              <div className="flex justify-evenly items-center text-primary font-bold text-xs px-2 pb-2">
                <h5 className="text-start w-[14%]">Shop Name</h5>
                <h5 className="text-start w-[14%]">Licence key</h5>
                <h5 className="text-start w-[14%]">Plateform</h5>
                <h5 className="text-start w-[14%]">Number of Licence</h5>
                <h5 className="text-start w-[14%]">Status</h5>
                <h5 className="text-start w-[14%]">Actions</h5>
              </div>

              <div className="h-96 overflow-y-scroll">
                {shopListData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-evenly items-center rounded-md font-bold text-xs py-4 px-2 my-2 pl-4 ${
                      index % 2 == 0 ? "bg-[#f8f5fe]" : "bg-[#f7f7f7]"
                    }`}
                  >
                    <a className="text-start w-[14%]">{item.shopname || "-"}</a>
                    <a className="text-start w-[14%]">{item.licence || "-"}</a>
                    <a className="text-start w-[14%]">{item.platform || "-"}</a>
                    <h5 className="text-start w-[14%]">
                      {item.No_of_licence || "-"}
                    </h5>
                    <h5 className="text-start w-[14%]">{item.status || "-"}</h5>
                    <div className="w-[14%] flex gap-2 justify-start">
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
          )}

          {activeButton === "Subscription" && (
            <>
              <div className="flex w-full gap-2 mt-8">
                <button className="w-1/2 p-2 text-xs rounded-md flex flex-col justify-center items-center bg-gray-100 text-primary font-medium border-b-4 border-primary">
                  <div className="text-2xl">04</div>
                  <div className="font-bold">Total Devices</div>
                </button>
                <button className="w-1/2 p-2 text-xs rounded-md flex flex-col justify-center items-center bg-gray-100 font-medium">
                  <div className="text-2xl">06</div>
                  <div className="font-bold">Total Licence</div>
                </button>
              </div>

              {/* <div className="p-4 my-4 rounded-md">
                <div className="flex justify-evenly items-center text-primary font-bold text-xs px-2 pb-2">
                  <h5 className="text-start w-[14%]">Screen ID</h5>
                  <h5 className="text-start w-[14%]">Device ID</h5>
                  <h5 className="text-start w-[14%]">Screen Location</h5>
                  <h5 className="text-start w-[14%]">Screen Size</h5>
                  <h5 className="text-start w-[14%]">Device Type</h5>
                  <h5 className="text-start w-[14%]">Status</h5>
                </div>

                <div className="h-80 overflow-y-scroll">
                  {subcription.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-evenly items-center rounded-md font-bold text-xs py-4 px-2 my-2 pl-4 ${
                        index % 2 == 0 ? "bg-[#f8f5fe]" : "bg-[#f7f7f7]"
                      }`}
                    >
                      <a className="text-start w-[14%]">
                        {item.screenID || "-"}
                      </a>
                      <a className="text-start w-[14%]">
                        {item.deviceID || "-"}
                      </a>
                      <a className="text-start w-[14%]">
                        {item.screenLocation || "-"}
                      </a>
                      <h5 className="text-start w-[14%]">
                        {item.screen + " inches" || "-"}
                      </h5>
                      <h5 className="text-start w-[14%]">
                        {item.devicetype || "-"}
                      </h5>
                      <h5 className="text-start w-[14%]">
                        {item.status || "-"}
                      </h5>
                     
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="flex justify-center items-center">
                <div className="w-32 h-32 bg-white shadow-lg rounded-full">

                </div>
              </div>


            </>
          )}
        </div>
      </div>
    </>
  );
}

export default page;
