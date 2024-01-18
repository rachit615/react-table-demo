import React from "react";
import Sidebar from "../Sidebar";

interface CustomLayoutProps {
  children?: React.ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  return (
    <div className=" flex h-screen">
      <Sidebar />
      {/* main content */}
      <div className="flex flex-col ml-80 pt-14 border flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default CustomLayout;
