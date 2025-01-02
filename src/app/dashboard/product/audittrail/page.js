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
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { MdOutlineFileDownload } from "react-icons/md";
import qr from "@/../public/assets/images/logo/qr.png";
import { IoClose } from "react-icons/io5";
import { CiExport } from "react-icons/ci";
import { FiSearch, FiEdit3 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoFilterSharp } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";
import { ChevronRight } from "lucide-react";
import ToggleButton from "@/components/ToggleButton.jsx";
import Sidebar from "@/components/Sidebar";
import Dropdown from "@/components/Dropdown";
import Image from "next/image";
function page() {
  const [sortByOpen, setSortByOpen] = useState(false);
  const [shop, setShop] = useState(false);
  const [role, setRole] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);

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
  const [shopData, setShopData] = useState([
    {
      id: 1,
      name: "All",
      state: false,
    },
    {
      id: 2,
      name: "Dhanwantary",
      state: true,
    },
    {
      id: 3,
      name: "Muthahalli",
      state: true,
    },
    {
      id: 4,
      name: "Usha Tiffin",
      state: false,
    },
    {
      id: 5,
      name: "Arogyam",
      state: true,
    },
    {
      id: 6,
      name: "Tazzha thindi",
      state: true,
    },
    {
      id: 7,
      name: "Kishna Cafe",
      state: true,
    },
  ]);
  const [roleData, setRoleData] = useState([
    {
      id: 1,
      name: "Cashier",
      state: false,
    },
    {
      id: 2,
      name: "Manager",
      state: true,
    },
    {
      id: 3,
      name: "Housekeeping Staff",
      state: true,
    },
    {
      id: 4,
      name: "Doctor",
      state: false,
    },
    {
      id: 5,
      name: "Security Guard",
      state: true,
    },
    {
      id: 6,
      name: "Nurse",
      state: true,
    },
    {
      id: 7,
      name: "Accounts",
      state: true,
    },
  ]);
  const [exportData, setExportData] = useState([
    {
      id: 1,
      name: "Excel",
      state: false,
    },
    {
      id: 2,
      name: "QR Code",
      state: true,
    },
  ]);

  const [activeButton, setActiveButton] = useState("Main Information");

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
  const toggleRoleById = (id) => {
    setExportData((prevExport) =>
      prevExport.map((item) =>
        item.id === id ? { ...item, state: !item.state } : item
      )
    );
  };
  const toggleShopById = (id) => {
    if (id === 1) {
      setShopData((prevShop) => {
        const allTrue = prevShop.every((item) => item.state);
        return prevShop.map((item) => ({ ...item, state: !allTrue }));
      });
    } else {
      setShopData((prevShop) =>
        prevShop.map((item) =>
          item.id === id ? { ...item, state: !item.state } : item
        )
      );
    }
  };

  const handleButtonClick = (e, buttonLabel) => {
    e.preventDefault();
    setActiveButton(buttonLabel);
  };

  const employeData = [
    {
      Productcode: "123 456",
      Shopname: "Dhanawantary",
      Date: "13/12/2024",
      Time: "10:45:00",
      User: "John Doe",
      Feildchanged: "Breakfast",
      Orginalvalue: "Idly",
      Updatedvalue: "Single Idly",
      ProductName: "Idly",
      Action: "Updated",
    },
    {
      Productcode: "123 456",
      Shopname: "Dhanawantary",
      Date: "13/12/2024",
      Time: "10:45:00",
      User: "John Doe",
      Feildchanged: "Breakfast",
      Orginalvalue: "Idly",
      Updatedvalue: "Single Idly",
      ProductName: "Idly",
      Action: "Updated",
    },
    {
      Productcode: "123 456",
      Shopname: "Dhanawantary",
      Date: "13/12/2024",
      Time: "10:45:00",
      User: "John Doe",
      Feildchanged: "Breakfast",
      Orginalvalue: "Idly",
      Updatedvalue: "Single Idly",
      ProductName: "Idly",
      Action: "Updated",
    },
    {
      Productcode: "123 456",
      Shopname: "Dhanawantary",
      Date: "13/12/2024",
      Time: "10:45:00",
      User: "John Doe",
      Feildchanged: "Breakfast",
      Orginalvalue: "Idly",
      Updatedvalue: "Single Idly",
      ProductName: "Idly",
      Action: "Updated",
    },
  ];
  return (
    <>
      <Sidebar active={1} subactive={2} />
      <div className="w-full h-full bg-white m-3 rounded-md p-2 pt-4 border">
        <div className="flex justify-between">
          <h1 className="font-extrabold text-xl mb-10">Audit Trail</h1>
        </div>
        <div className="flex justify-between w-full gap-3">
          <div className="flex gap-3 items-center">
            <DropdownMenu
              open={shop}
              onOpenChange={(isOpen) => {
                setShop(isOpen);
              }}
            >
              <DropdownMenuTrigger className="border p-2 w-40 rounded-md font-semibold flex items-center justify-between gap-1 text-xs">
                Select Shop{" "}
                <ChevronRight
                  className={`transform transition-transform duration-300 ${
                    shop ? "-rotate-90" : "rotate-90"
                  }`}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                <DropdownMenuLabel className="text-primary text-[0.7rem] font-bold">
                  Select Shop
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="border-b" />
                {shopData.map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="text-[0.6rem] font-bold p-1 flex items-center"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <Checkbox
                      checked={item.state}
                      onCheckedChange={() => toggleShopById(item.id)}
                    />
                    {item.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="custom-border border-gray-50" />
                <DropdownMenuItem
                  className="text-[0.6rem] font-bold p-1 flex items-center"
                  onSelect={() => setShop(false)}
                >
                  <button className="bg-primary text-white w-full text-xs rounded-md p-2">
                    Apply
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu
              open={role}
              onOpenChange={(isOpen) => {
                setRole(isOpen);
              }}
            >
              <DropdownMenuTrigger className="border p-2 w-40 rounded-md font-semibold flex items-center justify-between gap-1 text-xs">
                Select Role{" "}
                <ChevronRight
                  className={`transform transition-transform duration-300 ${
                    role ? "-rotate-90" : "rotate-90"
                  }`}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                <DropdownMenuLabel className="text-primary text-[0.7rem] font-bold">
                  Select role
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="border-b" />
                {roleData.map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="text-[0.6rem] font-bold p-1 flex items-center"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <Checkbox
                      checked={item.state}
                      onCheckedChange={() => toggleRoleById(item.id)}
                    />
                    {item.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="custom-border border-gray-50" />
                <DropdownMenuItem
                  className="text-[0.6rem] font-bold p-1 flex items-center"
                  onSelect={() => setRole(false)}
                >
                  <button className="bg-primary text-white w-full text-xs rounded-md p-2">
                    Apply
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="h-[40%] border-l border-gray-300 " />
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
            <div className="bg-[#f7f7f7] p-2 rounded-xl flex items-center p-1">
              <FiSearch className="h-5 w-5" />
            </div>

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
          </div>
        </div>

        <div className="border border-opacity-25 p-4 my-4 rounded-md">
          <div className="flex justify-evenly items-center text-primary font-bold text-xs px-2 pb-2">
            <h5 className="text-start w-[14%]">Product code</h5>
            <h5 className="text-start w-[14%]">Shop Name</h5>
            <h5 className="text-start w-[14%]">Date</h5>
            <h5 className="text-start w-[14%]">Time</h5>
            <h5 className="text-start w-[14%]">User</h5>
            <h5 className="text-start w-[14%]">Feild Changed</h5>
            <h5 className="text-start w-[14%]">Ordinal Value</h5>
            <h5 className="text-start w-[14%]">Upadated Value</h5>
            <h5 className="text-start w-[14%]">Product Name</h5>
            <h5 className="text-start w-[14%]">Action</h5>
          </div>

          <div className="h-96 overflow-y-scroll">
            {employeData.map((item, index) => (
              <div
                key={index}
                className={`flex justify-evenly items-center rounded-md font-bold text-xs py-4 px-2 my-2 pl-4 ${
                  index % 2 == 0 ? "bg-[#f8f5fe]" : "bg-[#f7f7f7]"
                }`}
              >
                <a className="text-start w-[14%]">{item.Productcode || "-"}</a>
                <a className="text-start w-[14%]">{item.Shopname || "-"}</a>
                <a className="text-start w-[14%]">{item.Date || "-"}</a>
                <a className="text-start w-[14%]">{item.Time || "-"}</a>
                <a className="text-start w-[14%]">{item.User || "-"}</a>
                <a className="text-start w-[14%]">{item.Feildchanged || "-"}</a>
                <a className="text-start w-[14%]">{item.Orginalvalue || "-"}</a>
                <a className="text-start w-[14%]">{item.Updatedvalue || "-"}</a>
                <a className="text-start w-[14%]">{item.ProductName || "-"}</a>
                <a className="text-start w-[14%]">{item.Action || "-"}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
