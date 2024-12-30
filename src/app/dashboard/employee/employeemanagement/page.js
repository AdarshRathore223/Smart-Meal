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

import { CiExport } from "react-icons/ci";
import { FiSearch, FiEdit3 } from "react-icons/fi";
import { LuCopy } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoFilterSharp } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";
import { ChevronRight } from "lucide-react";
import ToggleButton from "@/components/ToggleButton.jsx";

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
      <div className="flex justify-between">
        <h1 className="font-extrabold text-xl mb-10">Employee Management</h1>
        <a
          className="bg-primary text-white font-bold rounded-md h-12 w-48 flex justify-center items-center gap-2 cursor-pointer hover:bg-purple-900"
          href="./productlist/addproduct"
        >
          <MdAddCircleOutline />
          Add Employee
        </a>
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
          <div className="bg-[#f7f7f7] p-2 rounded-xl flex items-center min-w-[15rem] max-md:w-1/4 ">
            <FiSearch className="h-5 w-5" />
            <input
              type="text"
              className="bg-transparent outline-none w-full ml-4 placeholder:text-xs"
              placeholder="Search for Employee"
            />
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
          <h5 className="text-start w-[14%]">Name</h5>
          <h5 className="text-start w-[14%]">Department</h5>
          <h5 className="text-start w-[14%]">Designation</h5>
          <h5 className="text-start w-[14%]">Location</h5>
          <h5 className="text-start w-[14%]">App Access</h5>
          <h5 className="text-start w-[14%]">Status</h5>
          <h5 className="text-start w-[14%]">Actions</h5>
        </div>

        <div className="h-96 overflow-y-scroll">
          {employeData.map((item, index) => (
            <div
              key={index}
              className={`flex justify-evenly items-center rounded-md font-bold text-xs py-4 px-2 my-2 pl-4 ${
                index % 2 == 0 ? "bg-[#f8f5fe]" : "bg-[#f7f7f7]"
              }`}
            >
              <a href="./employeemanagement/rolemanagement" className="text-start w-[14%]">
                {item.Name || "-"}
              </a>
              <a href="./employeemanagement/rolemanagement" className="text-start w-[14%]">{item.Department || "-"}</a>
              <a href="./employeemanagement/rolemanagement" className="text-start w-[14%]">{item.Designation || "-"}</a>
              <a href="./employeemanagement/rolemanagement" className="text-start w-[14%]">
                {item.Location || "-"}
              </a>
              <a href="./employeemanagement/rolemanagement" className="text-start w-[14%]">
                {item.Access || "-"}
              </a>
              <h5 className="text-start w-[14%] pl-4">
                <ToggleButton isOn={item.Status}/>
              </h5>
              <div className="w-[14%] flex gap-2 justify-start">
                <button className="aspect-square rounded-full bg-white h-10 w-10 flex justify-center items-center shadow-lg">
                  <FiEdit3 className="h-1/2 w-1/2" />
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
