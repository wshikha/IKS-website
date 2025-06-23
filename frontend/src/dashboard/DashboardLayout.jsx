import SideBar from "./SideBar";
import React from "react";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex flex-col gap-3 mt-5 md:flex-row">
      <SideBar className="bg-orange-100" />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
