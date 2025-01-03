import { cn } from "@/lib/utils";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
function Dropdown({className ,placeholder}) {
  return (
    <div className={cn("border-2 h-fit rounded-md relative ",className)}>
      <select
        id="dropdown"
        // value=""
        className="rounded p-2 text-[0.7rem] font-bold w-full hover:bg-none outline-none appearance-none"
      >
        <option value="">
          {placeholder !== undefined ? placeholder : "Choose Option"}
        </option>
        <option value="1">Option 1</option>
      </select>
      <IoIosArrowDown className="absolute top-1/2 right-2 -translate-y-1/2" />
    </div>
  );
}

export default Dropdown;
