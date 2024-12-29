import React from 'react'

import Image from "next/image";

import { FiSearch, FiUser } from "react-icons/fi";
import { FaWifi, FaAngleDown } from "react-icons/fa";
import { PiBell } from "react-icons/pi";

import logo from "@/../public/assets/images/logo/Logo-Z.png";

function TopBar() {
  return (
    <div className="flex justify-between items-center w-full bg-white border p-3 px-6">
          <Image src={logo} alt="Logo" className="w-10 aspect-square" />
          <div className="bg-[#f7f7f7] p-2 rounded-xl flex items-center min-w-[25rem] max-md:w-1/4 ">
            <FiSearch className="h-5 w-5" />
            <input
              type="text"
              className="bg-transparent outline-none w-full ml-4 placeholder:text-xs"
              placeholder="Search for Employe or with Employee ID"
            />
          </div>
    
          <div className="flex items-center justify-center gap-3">
            <div className=" w-12 aspect-square rounded-full flex justify-center items-center">
              <FaWifi className="w-1/2 h-1/2 fill-[#06B077]" />
            </div>
            <div className="bg-[#F6F2FE] w-12 aspect-square rounded-full flex justify-center items-center relative">
              <PiBell className="w-1/2 h-1/2 fill-primary" />
              <div className="absolute text-xs font-extrabold rounded-full bg-[#F6F2FE] text-green-600 top-[10%] right-[18%] pt-[2px]">
                03
              </div>
            </div>
            <div className="bg-[#06b07723] w-12 aspect-square rounded-full flex justify-center items-center relative">
              <FiUser className="w-1/2 h-1/2 stroke-primary" />
              <div className="absolute text-xs font-extrabold rounded-full bg-green-500 border-2 border-white top-[5%] right-[5%] pt-[2px] w-3 h-3" />
            </div>
            <div>
              <p className="font-bold">Adarsh Rathore</p>
              <p className="text-sm text-gray-600">Role</p>
            </div>
            <FaAngleDown className="bg-gray-100 rounded-full p-1 w-6 h-6" />
          </div>
        </div>
  )
}

export default TopBar