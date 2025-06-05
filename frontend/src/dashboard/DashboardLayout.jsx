import SideBar from "./SideBar";
import React from "react";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
