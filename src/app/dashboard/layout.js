import React from "react";
import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";
function layout({ children }) {
  return (
    <div className="w-full h-full flex flex-col">
      <TopBar />
      <div className="flex h-full">
        <Sidebar/>
        {children}
      </div>
    </div>
  );
}

export default layout;
