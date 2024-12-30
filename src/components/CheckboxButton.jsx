import React from "react";
import { MdDone } from "react-icons/md";

const CheckboxButton = ({ id, checked, onChange}) => {
  return (
    <div className="text-start relative">
      {/* Hidden checkbox */}
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="opacity-0 peer"
      />

      {/* Unchecked state */}
      <div
        className="w-6 h-6 border-2 border-[#06b077] absolute top-0 rounded bg-white translate-x-1/2 -translate-y-1 peer-checked:opacity-0 opacity-100 cursor-pointer"
        onClick={onChange}
      />

      {/* Checked state */}
      <div
        className="w-6 h-6 border-2 bg-[#06b077] absolute top-0 rounded-md flex justify-center items-center translate-x-1/2 -translate-y-1 peer-checked:opacity-100 opacity-0 cursor-pointer"
        onClick={onChange}
      >
        <MdDone className="fill-white w-4 h-4" />
      </div>
    </div>
  );
};

export default CheckboxButton;
