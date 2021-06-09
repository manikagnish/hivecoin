import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import LineChartComp from "./LineChartComp";

function Stats() {
  return (
    <div className="dashboard__card dashboard__card-two  dashboard__card-stats">
      <div className="dashboard__card-two__header">
        <h2>Balance statistic</h2>
        <IoIosArrowDropright className="icon" />
      </div>
      <div className="dashboard__card-stats__body">
        <div className="chart-doughnut">
          <LineChartComp />
        </div>
      </div>
    </div>
  );
}

export default Stats;
