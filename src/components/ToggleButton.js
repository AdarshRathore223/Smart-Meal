"use client";
import React, { useState } from "react";

const ToggleButton = ({ isOn = false, onToggle, buttonclass, knobclass }) => {
  const [toggleState, setToggleState] = useState(isOn);

  const handleToggle = () => {
    const newState = !toggleState;
    setToggleState(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <div
      className={`relative inline-flex items-center w-12 h-6 text-xs rounded-full cursor-pointer border-primary border bg-primary bg-opacity-10 `}
      onClick={handleToggle}
    >
      <div
        className={`absolute left-1 transition-transform duration-300 ease-in-out mb-[0.5px] ${
          toggleState ? `translate-x-full` : `translate-x-0`
        } w-5 h-5 bg-primary rounded-full`}
      />
    </div>
  );
};

export default ToggleButton;
