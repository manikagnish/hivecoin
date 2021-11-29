import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import photoRecip1 from "../../images/emn.jpg";
import photoRecip2 from "../../images/joe.jpg";
import photoRecip3 from "../../images/img-9.jpg";
import { Table } from "reactstrap";
import { CgShapeCircle } from "react-icons/cg";

function RecipientCard() {
  return (
    <div className="dashboard__card dashboard__card-two  dashboard__card-activity">
      <div className="dashboard__card-two__header--table">
        <h2>Recipients</h2>
        <IoIosArrowDropright className="icon" />
      </div>
      <div className="dashboard__card-activity__body dashboard__card-recipient__body">
        <Table>
          <tbody>
            <tr>
              <th scope="row">
                <div className="recipient-img-container">
                  <img src={photoRecip1} alt="recipient" />

                  <CgShapeCircle className="recipient-icon" />
                </div>
              </th>
              <td className="td-1">
                <h3>Konstantinpavlov</h3>
                <small>pavlov@gmail.com</small>
              </td>
              <td className="td-2-recip">
                <span>3 deals</span>
              </td>
              <td className="td-3-recip">
                <h3>Send HCT</h3>
                <small>last 3 days ago</small>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="recipient-img-container">
                  <img src={photoRecip2} alt="recipient" />

                  <CgShapeCircle className="recipient-icon" />
                </div>
              </th>
              <td className="td-1">
                <h3>Konstantinpavlov</h3>
                <small>pavlov@gmail.com</small>
              </td>
              <td className="td-2-recip">
                <span>3 deals</span>
              </td>
              <td className="td-3-recip">
                <h3>Send HCT</h3>
                <small>last 3 days ago</small>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="recipient-img-container">
                  <img src={photoRecip3} alt="recipient" />

                  <CgShapeCircle className="recipient-icon" />
                </div>
              </th>
              <td className="td-1">
                <h3>Konstantinpavlov</h3>
                <small>pavlov@gmail.com</small>
              </td>
              <td className="td-2-recip">
                <span>3 deals</span>
              </td>
              <td className="td-3-recip">
                <h3>Send HCT</h3>
                <small>last 3 days ago</small>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default RecipientCard;
