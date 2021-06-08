import React from "react";
import * as HiIcons from "react-icons/hi";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <RiIcons.RiDashboardLine />,
    cName: "nav-text",
  },
  {
    title: "Buy/Sell",
    path: "/buysell",
    icon: <GiIcons.GiBuyCard />,
    cName: "nav-text",
  },
  {
    title: "Deals",
    path: "/deals",
    icon: <RiIcons.RiFileListLine />,
    cName: "nav-text",
  },
  {
    title: "Deals",
    path: "/gDeals",
    icon: <SiIcons.SiGnuprivacyguard />,
    cName: "nav-text",
  },
  {
    title: "wallet",
    path: "/wallet",
    icon: <RiIcons.RiWallet3Line />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <HiIcons.HiOutlineSupport />,
    cName: "nav-text",
  },
];
