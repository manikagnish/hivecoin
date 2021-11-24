import React from "react";
import Navbar from "../components/nav/Navbar";
import * as GiIcons from "react-icons/gi";

function Sell() {
  return (
    <>
      <Navbar
        name="Sell"
        icon={<GiIcons.GiBuyCard className="navbar-icon" />}
      />
      <div className="center">
        <h1>SELL</h1>
      </div>
    </>
  );
}

export default Sell;
