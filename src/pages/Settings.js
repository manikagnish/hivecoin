import React from "react";
import Navbar from "../components/nav/Navbar";
import { FiSettings } from "react-icons/fi";

function Settings() {
  return (
    <>
      <Navbar name="Settings" icon={<FiSettings className="navbar-icon" />} />
      <div className="center">
        <h1>Settings</h1>
      </div>
    </>
  );
}

export default Settings;
