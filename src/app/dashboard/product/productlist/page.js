"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { CiExport } from "react-icons/ci";
import { FiSearch, FiEdit3 } from "react-icons/fi";
import { IoFilterSharp, IoClose } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md";
import { AiOutlineFolderAdd } from "react-icons/ai";
import process from "@/../public/assets/images/Icons/Groupprocessing.svg";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
function page() {
  const [sortByOpen, setSortByOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);

  const productData = [
    {
      group: "Group 1",
      code: "FB08501",
      type: "Breakfast",
      price: 350,
      cost: 300,
      stack: 5,
    },
    {
      group: "Group 2",
      code: "FB08501",
      type: "Lunch",
      price: 350,
      cost: 300,
      stack: 5,
    },
    {
      group: "Nashta",
      code: "FB08501",
      type: "Lunch",
      price: 350,
      cost: 300,
      stack: 5,
    },
    {
      group: "Swalpahara",
      code: "FB08501",
      type: "Lunch",
      price: 350,
      cost: 300,
      stack: 5,
    },
  ];

  const [sortby, setSortBy] = useState([
    {
      id: 1,
      name: "Product Name",
      state: false,
    },
    {
      id: 2,
      name: "Category",
      state: true,
    },
    {
      id: 3,
      name: "Sub Category",
      state: true,
    },
    {
      id: 4,
      name: "Price",
      state: false,
    },
    {
      id: 5,
      name: "Cost",
      state: true,
    },
    {
      id: 6,
      name: "Stock Control",
      state: true,
    },
    {
      id: 7,
      name: "In stock",
      state: true,
    },
  ]);
  const [exportData, setExportData] = useState([
    {
      id: 1,
      name: "Product",
      state: false,
    },
    {
      id: 2,
      name: "All Recipes",
      state: true,
    },
    {
      id: 3,
      name: "Preration",
      state: true,
    },
    {
      id: 4,
      name: "Export PLU",
      state: false,
    },
    {
      id: 5,
      name: "Option",
      state: true,
    },
  ]);
  const toggleStateById = (id) => {
    setSortBy((prevSortBy) =>
      prevSortBy.map((item) =>
        item.id === id ? { ...item, state: !item.state } : item
      )
    );
  };
  const toggleExportById = (id) => {
    setExportData((prevExport) =>
      prevExport.map((item) =>
        item.id === id ? { ...item, state: !item.state } : item
      )
    );
  };
  return (
    <>
    <Sidebar active={1} subactive={1}/>
    <div className="w-full h-full bg-white m-3 rounded-md p-2 pt-4 border">
      <div className="flex justify-between">
        <h1 className="font-extrabold text-xl mb-10">Product</h1>
        <a
          className="bg-primary text-white font-bold rounded-md h-12 w-48 flex justify-center items-center gap-2 cursor-pointer hover:bg-purple-900"
          href="./productlist/addproduct"
        >
          <MdAddCircleOutline />
          Add Product
        </a>
      </div>
      <div className="flex justify-between w-full gap-3">
        <div className="flex gap-3 items-center">
          <AlertDialog>
            <AlertDialogTrigger className="bg-[#e5fff6] border border-[#36c192] text-[#36c192] p-2 px-8 rounded-md font-semibold text-sm flex gap-1">
              <AiOutlineFolderAdd className="stroke-1 w-5 h-5" /> Create Group
            </AlertDialogTrigger>
            <AlertDialogContent className="p-0 border-none">
              <AlertDialogHeader>
                <AlertDialogTitle className="bg-primary rounded-t-md text-sm text-white p-4 flex justify-between items-center">
                  Create / Edit Group
                  <AlertDialogCancel className="bg-transparent border-0 hover:bg-transparent shadow-none">
                    <IoClose className="p-[1px] border-2 border-white  bg-white rounded-full text-destructive font-bold" />
                  </AlertDialogCancel>
                </AlertDialogTitle>
                <form>
                  <AlertDialogDescription className="p-4">
                    <input
                      placeholder="Group Name"
                      className="border-2 rounded-md placeholder:text-black placeholder:text-[0.7rem] placeholder:font-bold p-1 px-2 outline-none w-full"
                    />
                  </AlertDialogDescription>
                </form>
              </AlertDialogHeader>
              <AlertDialogFooter className="p-4">
                <AlertDialogCancel className="bg-destructive-foreground text-destructive w-1/2">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="w-1/2">
                  Create Group
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <div className="h-[40%] border-l border-gray-300 " />

          <button className="bg-gray-100 p-2 px-8 rounded-md font-semibold text-sm flex gap-1">
            <CiExport className="stroke-1 w-4 h-4 rotate-180" /> Import Goods
          </button>
          <DropdownMenu
            open={exportOpen}
            onOpenChange={(isOpen) => {
              setExportOpen(isOpen);
            }}
          >
            <DropdownMenuTrigger className="bg-gray-100 p-2 px-8 rounded-md font-semibold text-sm flex gap-1 outline-none">
              <CiExport className="stroke-1 w-4 h-4" /> Export to Excel
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-96 translate-x-3">
              <DropdownMenuLabel className="text-primary text-[0.7rem] font-bold">
                Export Goods
              </DropdownMenuLabel>
              {exportData.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  className="text-[0.6rem] font-bold p-1 flex items-center"
                  onSelect={(e) => e.preventDefault()}
                >
                  <Checkbox
                    checked={item.state}
                    onCheckedChange={() => toggleExportById(item.id)}
                  />
                  {item.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator className="custom-border border-gray-50" />
              <DropdownMenuItem
                className="text-[0.6rem] font-bold p-1 flex items-center"
                onSelect={() => setSortByOpen(false)}
              >
                <button className="bg-destructive-foreground text-destructive w-full text-xs rounded-md p-2">
                  Cancel
                </button>
                <button className="bg-primary text-white w-full text-xs rounded-md p-2">
                  Export
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex gap-3 mr-2 items-center">
          <button className="bg-gray-100 p-2 rounded-md font-semibold text-sm flex gap-1 aspect-square">
            <FiSearch className="stroke-2 w-4 h-4" />
          </button>
          <div>
            <DropdownMenu
              open={sortByOpen}
              onOpenChange={(isOpen) => {
                setSortByOpen(isOpen);
              }}
            >
              <DropdownMenuTrigger className="bg-gray-100 p-2 rounded-md font-semibold text-sm flex gap-1 aspect-square outline-none">
                <IoFilterSharp className="stroke-1 w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52 translate-x-3">
                <DropdownMenuLabel className="text-primary text-[0.7rem] font-bold">
                  Sort By
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="border-b" />
                {sortby.map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="text-[0.6rem] font-bold p-1 flex items-center"
                    onSelect={(e) => e.preventDefault()} // Prevent menu from closing on selection
                  >
                    <Checkbox
                      checked={item.state}
                      onCheckedChange={() => toggleStateById(item.id)}
                    />
                    {item.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="custom-border border-gray-50" />
                <DropdownMenuItem
                  className="text-[0.6rem] font-bold p-1 flex items-center"
                  onSelect={() => setSortByOpen(false)} // Explicitly close on "Apply" click
                >
                  <button className="bg-primary text-white w-full text-xs rounded-md p-2">
                    Apply
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="h-[40%] border-l border-gray-300 " />
          <button className="bg-gray-100 p-2 rounded-md font-semibold text-sm flex gap-1 aspect-square">
            <Image src={process} alt="Group Processing" />
          </button>
        </div>
      </div>

      <div className="border border-opacity-25 p-4 my-4 rounded-md">
        <div className="flex justify-evenly items-center text-primary font-bold text-xs px-2 pb-2">
          <h5 className="text-start w-[14%]">Group Name</h5>
          <h5 className="text-start w-[14%]">Product Code</h5>
          <h5 className="text-start w-[14%]">Category</h5>
          <h5 className="text-start w-[14%]">Price</h5>
          <h5 className="text-start w-[14%]">Cost</h5>
          <h5 className="text-start w-[14%]">Stack Controls</h5>
          <h5 className="text-start w-[14%]">Actions</h5>
        </div>

        <div className="h-96 overflow-y-scroll">
          {productData.map((item, index) => (
            <div
              key={index}
              className={`flex justify-evenly items-center rounded-md font-bold text-xs py-4 px-2 my-2 pl-4 ${
                index % 2 == 0 ? "bg-[#f8f5fe]" : "bg-[#f7f7f7]"
              }`}
            >
              <a href={`./productlist/[${item.code}]`} className="text-start w-[14%] text-[#538dec] underline">
                {item.group || "-"}
              </a>
              <a href={`./productlist/[${item.code}]`} className="text-start w-[14%]">{item.code || "-"}</a>
              <a href={`./productlist/[${item.code}]`} className="text-start w-[14%]">{item.type || "-"}</a>
              <h5 className="text-start w-[14%] text-[#538dec] underline">
                {item.price || "-"}
              </h5>
              <h5 className="text-start w-[14%] text-[#538dec] underline">
                {item.cost || "-"}
              </h5>
              <h5 className="text-start w-[14%] pl-4 text-[#538dec] underline">
                {item.stack || "-"}
              </h5>
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
    </div>
    </>
  );
}

export default page;
