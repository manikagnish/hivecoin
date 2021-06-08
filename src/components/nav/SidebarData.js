import React from "react";
import * as HiIcons from "react-icons/hi";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <RiIcons.RiDashboardLine className="link-icon" />,
    cName: "nav-text",
  },
  {
    title: "Buy/Sell",
    path: "/buysell",
    icon: <GiIcons.GiBuyCard className="link-icon" />,
    cName: "nav-text",
  },
  {
    title: "Deals",
    path: "/deals",
    icon: <RiIcons.RiFileListLine className="link-icon" />,
    cName: "nav-text",
  },
  {
    title: "Wallet",
    path: "/wallet",
    icon: <RiIcons.RiWallet3Line className="link-icon" />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <HiIcons.HiOutlineSupport className="link-icon" />,
    cName: "nav-text",
  },
];
