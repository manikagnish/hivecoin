import React from "react";
import Navbar from "../components/nav/Navbar";
import { RiWallet3Line } from "react-icons/ri";

function Wallet() {
  return (
    <>
      <Navbar name="Wallet" icon={<RiWallet3Line className="navbar-icon" />} />
      <div className="center">
        <h1>WALLET</h1>
      </div>
    </>
  );
}

export default Wallet;
