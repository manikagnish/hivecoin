import React from "react";
import Navbar from "../components/nav/Navbar";
import * as RiIcons from "react-icons/ri";

function Deals() {
  return (
    <>
      <Navbar
        name="Deals"
        icon={<RiIcons.RiFileListLine className="navbar-icon" />}
      />
      <div className="center">
        <h1>DEALS</h1>
      </div>
    </>
  );
}

export default Deals;
