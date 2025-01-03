import React from "react";
import TopBar from "@/components/TopBar.jsx";
function layout({ children }) {
  return (
    <div className="w-full h-full flex flex-col">
      <TopBar />
      <div className="flex h-full">{children}</div>
    </div>
  );
}

export default layout;
