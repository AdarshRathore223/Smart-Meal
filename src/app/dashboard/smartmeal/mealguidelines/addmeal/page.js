"use client";
import Dropdown from "@/components/Dropdown";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdDone } from "react-icons/md";
function page() {
  const [activeButton, setActiveButton] = useState("Availability");
  const [selectAll, setSelectAll] = useState(false);
  const [number, setNumber] = useState(1);

  const handleButtonClick = (buttonLabel) => {
    setActiveButton(buttonLabel);
  };

  const [mealTimes, setMealTimes] = useState([
    {
      id: 1,
      available: true,
      shop: "C9-TNG-cafe",
    },
    {
      id: 2,
      available: false,
      shop: "C9-TNG-cafe",
    },
    {
      id: 3,
      available: false,
      shop: "C9-TNG-cafe",
    },
    {
      id: 4,
      available: true,
      shop: "C9-TNG-cafe",
    },
    {
      id: 5,
      available: true,
      shop: "C9-TNG-cafe",
    },
  ]);

  const toggleAvailability = (id) => {
    setMealTimes((prevMealTimes) =>
      prevMealTimes.map((meal) =>
        meal.id === id ? { ...meal, available: !meal.available } : meal
      )
    );
  };
  const setAllCheckBox = (value) => {
    setMealTimes((prevMealTimes) =>
      prevMealTimes.map((meal) => ({ ...meal, available: value }))
    );
    setSelectAll(value);
  };
  return (
    <div className="w-full h-full bg-white m-3 rounded-md p-2 pt-4 border">
      <div className="flex justify-between">
        <h1 className="font-extrabold text-xl mb-10 flex justify-center">
          Smart Meal
          <span className="text-primary underline pl-1">
            / Add - Edit Product
          </span>
        </h1>
      </div>

      <div className="flex w-full gap-3 text-[0.7rem] relative">
        {["General Information", "Menu Timing", "Availability"].map(
          (buttonLabel) => (
            <button
              key={buttonLabel}
              className={`p-3 px-8 rounded-md font-semibold flex gap-1 ${
                activeButton === buttonLabel
                  ? "bg-yellow text-white"
                  : "bg-yellow_secondary text-gray-900"
              }`}
              onClick={() => handleButtonClick(buttonLabel)}
            >
              {buttonLabel}
            </button>
          )
        )}
      </div>

      <div className="my-2">
        <h1 className="font-extrabold p-2">{activeButton}</h1>

        {activeButton === "General Information" && (
          <div className="grid grid-cols-2 grid-rows-2 w-full lg:w-3/4 gap-2">
            <input
              placeholder="Enter Meal Name"
              className="border-2 rounded-md placeholder:text-black placeholder:text-[0.7rem] placeholder:font-bold p-1 px-2 outline-none"
            />
            <Dropdown />
            <input
              placeholder="Enter Meal allowed in a day"
              className="border-2 rounded-md placeholder:text-black placeholder:text-[0.7rem] placeholder:font-bold p-1 px-2 outline-none"
            />
          </div>
        )}
        {activeButton === "Menu Timing" && (
          <>
            <div className="flex items-baseline w-[30rem] p-2">
              <div className="text-xs font-bold text-primary w-1/2">
                Start Time
              </div>
              <div className="text-xs font-bold text-primary w-1/2">
                End Time
              </div>
            </div>
            <div className="flex items-baseline w-3/4 p-2">
              <input
                type="text"
                className="border p-2 rounded-md border-gray-300 outline-none"
                placeholder="Select Time"
              />
              <p className="px-2">To</p>
              <input
                type="text"
                className="border p-2 rounded-md border-gray-300 outline-none"
                placeholder="Select Time"
              />
              <IoMdAdd
                className="w-6 h-6 p-[2px] fill-black border-2 border-black rounded-full ml-2 translate-y-2"
                onClick={() => setNumber(number + 1)}
              />
            </div>

            {Array.from({ length: number }, (_, index) => (
              <div className="flex items-baseline w-3/4 p-2" key={index}>
                <input
                  type="text"
                  className="border p-2 rounded-md border-gray-300 outline-none"
                  placeholder="Select Time"
                />
                <p className="px-2">To</p>
                <input
                  type="text"
                  className="border p-2 rounded-md border-gray-300 outline-none"
                  placeholder="Select Time"
                />
                <RiDeleteBinLine
                  className="w-6 h-6 p-[2px] fill-red-600 border-2 border-red-500 rounded-full ml-2 translate-y-2"
                  onClick={() => setNumber(number - 1)}
                />
                <IoMdAdd
                  className="w-6 h-6 p-[2px] fill-black border-2 border-black rounded-full ml-2 translate-y-2"
                  onClick={() => setNumber(number + 1)}
                />
              </div>
            ))}
          </>
        )}
        {activeButton === "Availability" && (
          <>
            <div className="font-extrabold p-2 flex justify-start items-center">
              <div className="w-fit text-start relative">
                <input
                  type="checkbox"
                  id="custom-checkbox"
                  checked={selectAll}
                  onChange={() => {}}
                  className="opacity-0 peer w-7 h-7"
                />
                {selectAll === true ? (
                  <div
                    className="w-6 h-6 border-2 bg-[#06b077] absolute rounded-md flex justify-center items-center bottom-1"
                    onClick={() => setAllCheckBox(false)}
                  >
                    <MdDone className="fill-white w-4 h-4" />
                  </div>
                ) : (
                  <div
                    className="w-6 h-6 border-2 border-[#06b077] absolute rounded-md flex justify-center items-center bottom-1"
                    onClick={() => setAllCheckBox(true)}
                  />
                )}
              </div>
              <h1 className="text-xs h-full">
                The product is applicable to all Shops
              </h1>
            </div>
            <div className="p-4 my-4 rounded-md max-w-[30rem]">
              <div className="flex justify-evenly items-center text-primary font-bold text-xs px-2 pb-2">
                <h5 className="w-full text-start">Available</h5>
                <h5 className="w-full text-start">Shop</h5>
              </div>

              <div className="h-56 overflow-y-auto">
                {mealTimes.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-evenly items-center rounded-md font-bold text-xs py-4 px-2 my-2 ${
                      index % 2 == 0 ? "bg-[#f8f5fe]" : "bg-[#f7f7f7]"
                    }`}
                  >
                    <div className="w-full text-start relative">
                      <input
                        type="checkbox"
                        id="custom-checkbox"
                        checked={item.available}
                        onChange={() => {}}
                        className="opacity-0 peer"
                      />
                      <div
                        className="w-6 h-6 border-2 border-[#06b077] absolute top-0 rounded bg-white translate-x-1/2 -translate-y-1 peer-checked:opacity-0 opacity-100"
                        onClick={() => toggleAvailability(item.id)}
                      />
                      <div
                        className="w-6 h-6 border-2 bg-[#06b077] absolute top-0 rounded-md flex justify-center items-center translate-x-1/2 -translate-y-1 peer-checked:opacity-100 opacity-0"
                        onClick={() => toggleAvailability(item.id)}
                      >
                        <MdDone className="fill-white w-4 h-4" />
                      </div>
                    </div>

                    <h5 className="w-full text-start">{item.shop || "-"}</h5>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
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
