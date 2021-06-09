import React from "react";
import Navbar from "../../components/nav/Navbar";
import * as RiIcons from "react-icons/ri";
import "./Dashboard.scss";
import { Container, Row, Col } from "reactstrap";
import { GiTreeBeehive } from "react-icons/gi";
import { IoIosArrowDropright } from "react-icons/io";
import dollar from "../../images/dollar2.svg";
import arrow from "../../images/arrow_circle.svg";

function Dashboard() {
  return (
    <>
      <Navbar
        name="Dashboard"
        icon={<RiIcons.RiDashboardLine className="navbar-icon" />}
      />
      <div className="dashboard">
        <Container className="dashboard__container">
          <Row>
            <Col xs="12" lg="6">
              <div className="dashboard__card dashboard__card-balance dashboard__card-balance--orange">
                <div className="left">
                  <div className="heading">
                    <GiTreeBeehive className="balance-card-icon" />
                    <h2>0.00379971 BTC</h2>
                  </div>
                  <div className="subheading">
                    <p>Wallet balance</p>
                  </div>
                </div>
                <div className="right">
                  <img src={dollar} alt="dollar icon" />
                </div>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <div className="dashboard__card dashboard__card-balance dashboard__card-balance--white">
                <div className="left">
                  <div className="heading">
                    <GiTreeBeehive className="balance-card-icon" />
                    <h2>0.00257087 BTC</h2>
                  </div>
                  <div className="subheading">
                    <p>Unconfirmed balance</p>
                  </div>
                </div>
                <div className="right">
                  <img src={dollar} alt="dollar icon" />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              <div className="dashboard__card dashboard__card-two dashboard__card-activity">
                <div className="dashboard__card-two__header">
                  <h2>Activity</h2>
                  <IoIosArrowDropright className="icon" />
                </div>
              </div>
            </Col>
            <Col xs="12" lg="6">
              deals
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              stats
            </Col>
            <Col xs="12" lg="6">
              recipient
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
