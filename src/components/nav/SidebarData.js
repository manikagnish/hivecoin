import React from "react";
import { GiBuyCard } from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import { HiCash } from "react-icons/hi";

export const SidebarData = [
  // {
  //   title: "Dashboard",
  //   path: "/",
  //   icon: <RiIcons.RiDashboardLine className="link-icon" />,
  //   cName: "nav-text",
  // },

  // {
  //   title: "Deals",
  //   path: "/deals",
  //   icon: <RiIcons.RiFileListLine className="link-icon" />,
  //   cName: "nav-text",
  // },
  {
    title: "Wallet",
    path: "/hivecoin/wallet",
    icon: <RiIcons.RiWallet3Line className="link-icon" />,
    cName: "nav-text",
  },
  {
    title: "Buy",
    path: "/hivecoin/buy",
    icon: <HiCash className="link-icon" />,
    cName: "nav-text",
  },
  {
    title: "Sell",
    path: "/hivecoin/sell",
    icon: <GiBuyCard className="link-icon" />,
    cName: "nav-text",
  },
  // {
  //   title: "Support",
  //   path: "/support",
  //   icon: <HiIcons.HiOutlineSupport className="link-icon" />,
  //   cName: "nav-text",
  // },
];
