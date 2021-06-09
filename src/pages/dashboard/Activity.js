import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { CgShapeCircle } from "react-icons/cg";
import { Table } from "reactstrap";

function Activity() {
  return (
    <div className="dashboard__card dashboard__card-two  dashboard__card-activity">
      <div className="dashboard__card-two__header--table">
        <h2>Activity</h2>
        <IoIosArrowDropright className="icon" />
      </div>
      <div className="dashboard__card-activity__body">
        <Table>
          <tbody>
            <tr>
              <th scope="row">
                <CgShapeCircle className="bullet-icon" />
              </th>
              <td className="td-1">
                <h3>Deal number 213132</h3>
                <small>Konstantinpavlov</small>
              </td>
              <td className="td-2">
                <span>Selling</span>
              </td>
              <td className="td-1">
                <h3>
                  <span>-</span> 0.00379971 BTC
                </h3>
                <small>19.09.2016, 13:27</small>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <CgShapeCircle className="bullet-icon" />
              </th>
              <td className="td-1">
                <h3>Deal number 213132</h3>
                <small>Konstantinpavlov</small>
              </td>
              <td className="td-2">
                <span>Selling</span>
              </td>
              <td className="td-1">
                <h3>
                  <span>-</span> 0.00379971 BTC
                </h3>
                <small>19.09.2016, 13:27</small>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <CgShapeCircle className="bullet-icon" />
              </th>
              <td className="td-1">
                <h3>Deal number 213132</h3>
                <small>Konstantinpavlov</small>
              </td>
              <td className="td-2">
                <span>Selling</span>
              </td>
              <td className="td-1">
                <h3>
                  <span>-</span> 0.00379971 BTC
                </h3>
                <small>19.09.2016, 13:27</small>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Activity;
