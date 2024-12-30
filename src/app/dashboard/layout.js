import React from "react";
import TopBar from "@/components/TopBar.jsx";
import Sidebar from "@/components/Sidebar.jsx";
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
