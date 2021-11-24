import React from "react";
import Navbar from "../components/nav/Navbar";
import { HiCash } from "react-icons/hi";

function Buy() {
  return (
    <>
      <Navbar name="Buy" icon={<HiCash className="navbar-icon" />} />
      <div className="center">
        <h1>BUY</h1>
      </div>
    </>
  );
}

export default Buy;
