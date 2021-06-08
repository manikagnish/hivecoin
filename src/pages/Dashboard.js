import React from "react";
import Navbar from "../components/nav/Navbar";
import * as RiIcons from "react-icons/ri";

function Dashboard() {
  return (
    <>
      <Navbar
        name="Dashboard"
        icon={<RiIcons.RiDashboardLine className="navbar-icon" />}
      />
      <div className="center">
        <h1>DASHBOARD</h1>
      </div>
    </>
  );
}

export default Dashboard;
