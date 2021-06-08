import React from "react";
import Navbar from "../components/nav/Navbar";
import { HiOutlineSupport } from "react-icons/hi";

function Support() {
  return (
    <>
      <Navbar
        name="Dashboard"
        icon={<HiOutlineSupport className="navbar-icon" />}
      />
      <div className="center">
        <h1>SUPPORT</h1>
      </div>
    </>
  );
}

export default Support;
