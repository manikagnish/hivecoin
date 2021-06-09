import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { CgShapeCircle } from "react-icons/cg";

function Deals() {
  return (
    <div className="dashboard__card dashboard__card-two  dashboard__card-deals">
      <div className="dashboard__card-two__header">
        <h2>Safe deals</h2>
        <IoIosArrowDropright className="icon" />
      </div>
      <div className="dashboard__card-deals__body">
        <div className="chart-donut"></div>
        <ul>
          <li>
            <p>5.37890123 BTC</p>
            <small>
              <CgShapeCircle /> 20 active deals
            </small>
          </li>
          <hr />
          <li>
            <p>5.37890123 BTC</p>
            <small>
              <CgShapeCircle /> 20 active deals
            </small>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Deals;
