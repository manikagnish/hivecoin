import React from "react";
import Navbar from "../components/nav/Navbar";
import * as GiIcons from "react-icons/gi";

function Buy() {
  return (
    <>
      <Navbar
        name="Buy/Sell"
        icon={<GiIcons.GiBuyCard className="navbar-icon" />}
      />
      <div className="center">
        <h1>BUY/SELL</h1>
      </div>
    </>
  );
}

export default Buy;
