import React from "react";
import Navbar from "../../components/nav/Navbar";
import * as RiIcons from "react-icons/ri";
import "./Dashboard.scss";
import { Container, Row, Col } from "reactstrap";

import BalanceCard from "./BalanceCard";
import Activity from "./Activity";
import Deals from "./Deals";
import Stats from "./Stats";

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
              <BalanceCard theme="dashboard__card-balance--orange dashboard__card dashboard__card-balance" />
            </Col>
            <Col xs="12" lg="6">
              <BalanceCard theme="dashboard__card-balance--white dashboard__card dashboard__card-balance" />
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              <Activity />
            </Col>
            <Col xs="12" lg="6">
              <Deals />
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              <Stats />
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
