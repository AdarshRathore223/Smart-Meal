"use client";
import React, { useState } from "react";

import Image from "next/image";

import logo from "@/../public/assets/images/logo/logo-s.png";
import openEye from "@/../public/assets/images/Icons/Eye-open.svg";
import closeEye from "@/../public/assets/images/Icons/Eye-close.svg";

function Page() {
  const [isVisible, setIsVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="border border-[#5e20d11a] min-w-[30rem] rounded-xl min-h-24 flex flex-col justify-center items-center">
        <Image src={logo} alt="Logo Image" className="py-10"/>
        <h1 className="text-3xl font-bold text-primary">Welcome Back!</h1>
        <h3 className="text-[#151515] opacity-55 mt-1">
          Please sign in to continue
        </h3>

        <form className="w-full p-8">
          <input
            type="email"
            className="h-12 border rounded-md w-full outline-blue-500 m-2 p-2 placeholder:text-[#7B7B7B] bg-transparent"
            placeholder="Enter User ID"
          />
          <div className="relative">
            <input
              type={isVisible ? "password" : "text"}
              className="h-12 border rounded-md w-full outline-blue-500 m-2 p-2 placeholder:text-[#7B7B7B] bg-transparent"
              placeholder="Enter Password"
            />
            {isVisible ? (
              <Image
                src={closeEye}
                alt="Hide Password"
                className="absolute right-[5%] top-[50%] -translate-y-1/2"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <Image
                src={openEye}
                alt="Show Password"
                className="absolute right-[5%] top-[50%] -translate-y-1/2"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
          <div className="w-full text-xs text-[#C70606] font-semibold underline tracking-wide flex justify-end my-2">
            <a href="#">Forgot password?</a>
          </div>
          <button className="w-full m-2 bg-primary text-white p-2 rounded-md py-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
