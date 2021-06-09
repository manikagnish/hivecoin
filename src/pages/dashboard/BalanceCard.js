import React from "react";
import { GiTreeBeehive } from "react-icons/gi";
import dollar from "../../images/dollar2.svg";

function BalanceCard(props) {
  return (
    <div className={props.theme}>
      <div className="left">
        <div className="heading">
          <GiTreeBeehive className="balance-card-icon" />
          <h2>{props.heading}</h2>
        </div>
        <div className="subheading">
          <p>{props.subheading}</p>
        </div>
      </div>
      <div className="right">
        <img src={dollar} alt="dollar icon" />
      </div>
    </div>
  );
}

export default BalanceCard;
