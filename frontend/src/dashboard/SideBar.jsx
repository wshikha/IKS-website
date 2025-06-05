import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloud,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

function SideBar() {
  return (
    <div className="mt-20">
      <Sidebar aria-label="Sidebar with content separator example">
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </SidebarItem>
            <SidebarItem
              href="/admin/dashboard/upload"
              icon={HiOutlineCloudUpload}
            >
              Upload Events
            </SidebarItem>
            <SidebarItem href="/admin/dashboard/manage" icon={HiInbox}>
              Manage Events
            </SidebarItem>
            <SidebarItem href="#" icon={HiUser}>
              Users
            </SidebarItem>
            <SidebarItem href="/login" icon={HiShoppingBag}>
              Login
            </SidebarItem>
            <SidebarItem href="/sign-up" icon={HiArrowSmRight}>
              Sign In
            </SidebarItem>
            <SidebarItem href="/logout" icon={HiTable}>
              Log Out
            </SidebarItem>
          </SidebarItemGroup>
          <SidebarItemGroup>
            <SidebarItem href="#" icon={HiChartPie}>
              Upgrade to Pro
            </SidebarItem>
            <SidebarItem href="#" icon={HiViewBoards}>
              Documentation
            </SidebarItem>
            <SidebarItem href="#" icon={BiBuoy}>
              Help
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  );
}

export default SideBar;
