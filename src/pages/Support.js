import React from "react";
import Navbar from "../components/nav/Navbar";
import { HiOutlineSupport } from "react-icons/hi";

function Support() {
  return (
    <>
      <Navbar
        name="Support"
        icon={<HiOutlineSupport className="navbar-icon" />}
      />
      <div className="center">
        <h1>SUPPORT</h1>
      </div>
    </>
  );
}

export default Support;
