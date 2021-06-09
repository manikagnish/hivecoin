import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { CgShapeCircle } from "react-icons/cg";
import DoughnutChart from "./DoughnutChart";

function Deals() {
  return (
    <div className="dashboard__card dashboard__card-two  dashboard__card-deals">
      <div className="dashboard__card-two__header">
        <h2>Safe deals</h2>
        <IoIosArrowDropright className="icon" />
      </div>
      <div className="dashboard__card-deals__body">
        <div className="chart-doughnut">
          <DoughnutChart />
        </div>
        <ul>
          <li>
            <p>5.37890123 BTC</p>
            <small className="active">
              <span>
                <CgShapeCircle />
              </span>
              5 active deals
            </small>
          </li>
          <hr />
          <li>
            <p>15.4567828 BTC</p>
            <small>
              <span>
                <CgShapeCircle />
              </span>
              20 total deals
            </small>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Deals;
