"use client";
import React, { useState } from "react";
import Image from "next/image";

import logo from "@/../public/assets/images/logo/logo-s.png";
import openEye from "@/../public/assets/images/Icons/Eye-open.svg";
import closeEye from "@/../public/assets/images/Icons/Eye-close.svg";

function Page() {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("called");
    setError(""); // Clear any previous errors

    // Construct form data as a URL-encoded string
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    try {
      setIsLoading(true);
      const response = await fetch("https://ziounbe.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        const errorData = await response.json();

        if (response.status === 422) {
          // Handle Validation Error
          const validationError = errorData.detail
            ?.map((err) => `${err.loc.join(" -> ")}: ${err.msg}`)
            .join(", ");
          throw new Error(validationError || "Validation error occurred");
        } else {
          throw new Error(errorData.message || "Failed to login");
        }
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Assuming the token is in `data.access_token`
      const token = data.access_token;

      // Set the token in a cookie (expires in 24 hour)
      document.cookie = `authToken=${token}; path=/; max-age=86400; secure; SameSite=Strict`;

      // Redirect to the employee dashboard
      window.location.href = "/dashboard/employee/employeeprofile";
    } catch (error) {
      console.error("Error during login:", error);
      setError(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="border border-[#5e20d11a] min-w-[30rem] rounded-xl min-h-24 flex flex-col justify-center items-center">
        {isloading ? "Loading.." : ""}
        <Image src={logo} alt="Logo Image" className="py-10" />
        <h1 className="text-3xl font-bold text-primary">Welcome Back!</h1>
        <h3 className="text-[#151515] opacity-55 mt-1">
          Please sign in to continue
        </h3>

        <form className="w-full p-8" onSubmit={handleSubmit}>
          <input
            type="text"
            className="h-12 border rounded-md w-full outline-blue-500 m-2 p-2 placeholder:text-[#7B7B7B] bg-transparent"
            placeholder="Enter User ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <input
              type={isVisible ? "password" : "text"}
              className="h-12 border rounded-md w-full outline-blue-500 m-2 p-2 placeholder:text-[#7B7B7B] bg-transparent"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {isVisible ? (
              <Image
                src={closeEye}
                alt="Hide Password"
                className="absolute right-[5%] top-[50%] -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <Image
                src={openEye}
                alt="Show Password"
                className="absolute right-[5%] top-[50%] -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
          {error && (
            <p className="text-xs text-red-600 mt-2 text-center">{error}</p>
          )}
          <div className="w-full text-xs text-[#C70606] font-semibold underline tracking-wide flex justify-end my-2">
            <a href="#">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full m-2 bg-primary text-white p-2 rounded-md py-3"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
