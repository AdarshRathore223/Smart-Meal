"use client"
import React, { useState } from "react";

const ToggleButton = ({
  isOn = false,
  onToggle,
  onLabel = "ON",
  offLabel = "OFF",
  size = "md",
  onColor = "bg-green-500",
  offColor = "bg-gray-300",
  labelColor = "text-white",
}) => {
  const [toggleState, setToggleState] = useState(isOn);

  const handleToggle = () => {
    const newState = !toggleState;
    setToggleState(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  const sizeClasses = {
    sm: "w-12 h-6 text-xs",
    md: "w-16 h-8 text-sm",
    lg: "w-20 h-10 text-base",
  };

  const knobSizeClasses = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div
      className={`relative inline-flex items-center ${sizeClasses[size]} rounded-full cursor-pointer ${
        toggleState ? onColor : offColor
      }`}
      onClick={handleToggle}
    >
      <div
        className={`absolute left-1 transition-transform duration-300 ease-in-out ${
          toggleState ? `translate-x-full` : `translate-x-0`
        } ${knobSizeClasses[size]} bg-white rounded-full`}
      />
    </div>
  );
};

export default ToggleButton;
